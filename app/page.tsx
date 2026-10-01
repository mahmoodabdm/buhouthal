"use client";
import { useState, useEffect } from "react";
import { Search, Sparkles, BookOpen, FileText, GraduationCap, Database, Download, BadgeCheck, Mail, ArrowLeft, Menu, X } from "lucide-react";

export default function Page() {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const handleSearch = () => {
    if (!query.trim()) {
      setToast("اكتب موضوع البحث أولاً");
      setTimeout(() => setToast(null), 2500);
      return;
    }
    setIsSearching(true);
    setToast(`جاري البحث عن: ${query} في 250 مليون ورقة...`);
    setTimeout(() => {
      setIsSearching(false);
      setToast("تم الاتصال بـ OpenAlex API - هذه واجهة تجريبية");
      setTimeout(() => setToast(null), 3000);
    }, 1400);
  };

  const tags = ["quantum computing", "machine learning", "renewable energy", "CRISPR", "neural networks", "climate change"];

  const navItems = [
    { label: "الرئيسية", href: "#home" },
    { label: "سياسة الخصوصية", href: "#privacy" },
    { label: "اتصل بنا", href: "#contact" },
    { label: "عن الموقع", href: "#about" },
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-[#fcfcfb] text-slate-900 selection:bg-blue-100 overflow-x-hidden" style={{ fontFamily: "'Cairo', sans-serif" }}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(1.5deg); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(-1deg); }
        }
        @keyframes wave {
          0%, 100% { transform: rotate(-15deg); }
          25% { transform: rotate(20deg); }
          50% { transform: rotate(-10deg); }
          75% { transform: rotate(25deg); }
        }
        @keyframes blink {
          0%, 90%, 100% { transform: scaleY(1); }
          92%, 94% { transform: scaleY(0.1); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.15); }
        }
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(12px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(12px) rotate(-360deg); }
        }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/70" style={{ paddingTop: 'var(--safe-area-inset-top)' }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 h-[72px] flex items-center justify-between">
          {/* Right: Logo + Nav (RTL first) */}
          <div className="flex items-center gap-10">
            <a href="#home" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-[#2563eb] flex items-center justify-center shadow-[0_8px_20px_-8px_#2563eb] group-hover:shadow-[0_12px_24px_-10px_#2563eb] transition-all">
                <span className="text-white font-black text-[18px] tracking-tighter">B</span>
              </div>
              <span className="text-[22px] font-extrabold tracking-tight">
                <span className="text-slate-900">Buhouth</span><span className="text-[#2563eb]">AI</span>
              </span>
            </a>

            <nav className="hidden lg:flex items-center gap-7">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-[14.5px] font-semibold text-slate-600 hover:text-slate-900 transition-colors relative py-1 after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-0 after:bg-[#2563eb] hover:after:w-full after:transition-all after:duration-300">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Left: Auth buttons (RTL end) */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => { setToast("تسجيل الدخول - قريباً"); setTimeout(()=>setToast(null),2000); }}
                className="h-10 px-5 rounded-full border border-slate-200 bg-white text-[14px] font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all"
              >
                تسجيل الدخول
              </button>
              <button
                onClick={() => { setToast("مرحباً! ابدأ مجاناً الآن"); setTimeout(()=>setToast(null),2000); }}
                className="h-10 px-5 rounded-full bg-[#2563eb] text-white text-[14px] font-bold shadow-[0_8px_20px_-8px_#2563eb] hover:bg-[#1d4ed8] hover:shadow-[0_12px_24px_-10px_#2563eb] hover:-translate-y-[1px] transition-all flex items-center gap-1.5"
              >
                ابدأ مجانا
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>

            <button onClick={() => setMobileMenu(!mobileMenu)} className="lg:hidden w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center">
              {mobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenu && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-5 py-4 flex flex-col gap-3 animate-in">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={()=>setMobileMenu(false)} className="py-2.5 px-3 rounded-xl hover:bg-slate-50 font-semibold text-slate-700">{item.label}</a>
            ))}
            <div className="flex gap-3 pt-3 border-t border-slate-100">
              <button className="flex-1 h-11 rounded-full border border-slate-200 bg-white font-bold text-[14px]">تسجيل الدخول</button>
              <button className="flex-1 h-11 rounded-full bg-[#2563eb] text-white font-bold text-[14px]">ابدأ مجانا</button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="max-w-[1280px] mx-auto px-5 md:px-8 pt-10 md:pt-16 pb-8 overflow-hidden">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-6 items-center">
          
          {/* Right: Text (RTL first) */}
          <div className="order-1 min-w-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[12.5px] font-bold text-[#2563eb] mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_0_4px_rgba(16,185,129,0.15)]" />
              بحث مباشر في 250,387,000 ورقة علمية حقيقية
              <Sparkles className="w-3.5 h-3.5 ml-1 opacity-70" />
            </div>

            <h1 className="text-[34px] md:text-[52px] leading-[1.05] font-extrabold tracking-tight text-slate-900">
              ابحث في أكبر
              <span className="relative inline-block mx-2">
                <span className="relative z-10 bg-gradient-to-b from-[#2563eb] to-[#1e40af] bg-clip-text text-transparent">مكتبة أكاديمية</span>
                <span className="absolute bottom-1.5 right-0 left-0 h-[10px] bg-blue-100 -rotate-1 -z-0 rounded-sm" />
              </span>
              مفتوحة
            </h1>

            <p className="mt-5 text-[16px] md:text-[17px] leading-[1.8] text-slate-600 font-medium max-w-[560px]">
              لا نحمل البحوث داخل الموقع حتى لا تُهمل البناء. نتصل مباشرة بـ
              <span className="inline-flex items-center gap-1.5 mx-1.5 px-2 py-0.5 rounded-lg bg-slate-900 text-white text-[12px] font-bold tracking-wide">OpenAlex API</span>
              - نفس قاعدة بيانات Microsoft Academic السابقة، محدثة لحظياً.
            </p>

            {/* Search Box */}
            <div className="mt-8 relative max-w-[600px]">
              <div className="relative group">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-200 via-blue-100 to-violet-200 rounded-[28px] opacity-0 group-focus-within:opacity-100 blur-[1px] transition-opacity duration-500" />
                <div className="relative flex items-center bg-white border border-slate-200 rounded-[26px] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.02)] group-focus-within:shadow-[0_20px_60px_-20px_rgba(37,99,235,0.25),0_0_0_1px_rgba(37,99,235,0.15)] group-focus-within:border-blue-200 transition-all duration-300">
                  <Search className="w-5 h-5 text-slate-400 mr-5 shrink-0" />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    placeholder="مثال: artificial intelligence in education - ابحث في 250 مليون بحث علمي..."
                    className="w-full h-[64px] bg-transparent outline-none text-[15px] placeholder:text-slate-400 font-medium pr-2 pl-2"
                  />
                  <button
                    onClick={handleSearch}
                    disabled={isSearching}
                    className="ml-2 mr-2 h-[48px] px-6 rounded-full bg-[#2563eb] text-white font-bold text-[14.5px] shadow-[0_8px_20px_-6px_#2563eb] hover:bg-[#1d4ed8] hover:shadow-[0_12px_24px_-8px_#2563eb] active:scale-[0.98] transition-all flex items-center gap-2 shrink-0"
                  >
                    {isSearching ? (
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Search className="w-4 h-4" />
                    )}
                    بحث
                  </button>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-[12px] font-semibold text-slate-500 ml-1 py-1">شائع:</span>
                {tags.map((t) => (
                  <button
                    key={t}
                    onClick={() => setQuery(t)}
                    className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[12.5px] font-medium text-slate-600 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 transition-all"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Mini trust */}
            <div className="mt-8 flex items-center gap-4 text-[12px] text-slate-500 font-medium">
              <span className="flex items-center gap-1.5"><BadgeCheck className="w-4 h-4 text-emerald-500" /> لا حاجة لبطاقة</span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span className="flex items-center gap-1.5"><Download className="w-4 h-4" /> تحميل PDF مباشر</span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span>API مفتوح</span>
            </div>
          </div>

          {/* Left: 3D Robot */}
          <div className="order-2 relative flex justify-center lg:justify-end min-w-0 overflow-hidden">
            {/* Background glows */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute top-10 left-10 w-[260px] h-[260px] md:w-[320px] md:h-[320px] bg-blue-100 rounded-full blur-[80px] opacity-60" />
              <div className="absolute bottom-10 right-10 w-[220px] h-[220px] md:w-[280px] md:h-[280px] bg-violet-100 rounded-full blur-[80px] opacity-60" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] md:w-[420px] md:h-[420px] bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[48px] rotate-3 border border-white shadow-[inset_0_1px_0_0_white]" />
            </div>

            <div className="relative w-full max-w-[380px] md:max-w-[460px] h-[520px] mx-auto">
              {/* Floating papers */}
              <div className="absolute top-8 right-4 w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-[0_12px_24px_-8px_rgba(0,0,0,0.12)] flex items-center justify-center" style={{ animation: "float 4s ease-in-out infinite" }}>
                <FileText className="w-7 h-7 text-[#2563eb]" />
              </div>
              <div className="absolute top-28 left-2 w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-[0_12px_24px_-8px_rgba(0,0,0,0.12)] flex items-center justify-center" style={{ animation: "floatSlow 3.5s ease-in-out infinite 0.5s" }}>
                <BookOpen className="w-6 h-6 text-violet-500" />
              </div>
              <div className="absolute bottom-32 right-0 w-11 h-11 rounded-2xl bg-white border border-slate-200 shadow-[0_12px_24px_-8px_rgba(0,0,0,0.12)] flex items-center justify-center" style={{ animation: "float 3.8s ease-in-out infinite 1s" }}>
                <GraduationCap className="w-6 h-6 text-emerald-500" />
              </div>
              <div className="absolute bottom-48 left-6 px-3 py-1.5 rounded-full bg-slate-900 text-white text-[11px] font-bold shadow-lg flex items-center gap-1.5" style={{ animation: "floatSlow 4.2s ease-in-out infinite 0.2s" }}>
                <Database className="w-3.5 h-3.5" /> OpenAlex
              </div>

              {/* Robot */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animation: "float 5s ease-in-out infinite" }}>
                {/* Shadow */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[180px] h-[28px] bg-slate-900/10 blur-[12px] rounded-full" />

                {/* Antenna */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
                  <div className="w-[14px] h-[14px] rounded-full bg-gradient-to-br from-blue-400 to-[#2563eb] shadow-[0_0_12px_#2563eb,0_0_24px_#60a5fa] border-2 border-white" style={{ animation: "pulseGlow 2s ease-in-out infinite" }} />
                  <div className="w-[3px] h-7 bg-gradient-to-b from-slate-300 to-slate-400 -mt-1" />
                </div>

                {/* Head */}
                <div className="relative w-[148px] h-[118px] mx-auto">
                  <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.18),inset_0_1px_0_0_white,0_0_0_1px_rgba(0,0,0,0.02)]" />
                  {/* Head highlight */}
                  <div className="absolute top-3 left-4 right-4 h-[22px] rounded-full bg-gradient-to-b from-white to-transparent opacity-80" />
                  
                  {/* Eyes container */}
                  <div className="absolute top-[32px] left-1/2 -translate-x-1/2 flex gap-7">
                    {/* Eye */}
                    <div className="relative">
                      <div className="w-[28px] h-[28px] rounded-full bg-slate-900 shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),0_2px_8px_rgba(0,0,0,0.2)] flex items-center justify-center overflow-hidden" style={{ animation: "blink 4s ease-in-out infinite" }}>
                        <div className="w-[14px] h-[14px] rounded-full bg-[#2563eb] shadow-[0_0_10px_#2563eb] relative">
                          <div className="absolute top-[2px] left-[3px] w-[5px] h-[5px] rounded-full bg-white opacity-90" />
                        </div>
                      </div>
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-blue-400/40 blur-[2px] rounded-full" />
                    </div>
                    <div className="relative">
                      <div className="w-[28px] h-[28px] rounded-full bg-slate-900 shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),0_2px_8px_rgba(0,0,0,0.2)] flex items-center justify-center overflow-hidden" style={{ animation: "blink 4s ease-in-out infinite 0.1s" }}>
                        <div className="w-[14px] h-[14px] rounded-full bg-[#2563eb] shadow-[0_0_10px_#2563eb] relative">
                          <div className="absolute top-[2px] left-[3px] w-[5px] h-[5px] rounded-full bg-white opacity-90" />
                        </div>
                      </div>
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-blue-400/40 blur-[2px] rounded-full" />
                    </div>
                  </div>

                  {/* Smile indicator */}
                  <div className="absolute bottom-[18px] left-1/2 -translate-x-1/2 w-10 h-3">
                    <div className="w-full h-[3px] rounded-full bg-slate-200" />
                    <div className="mx-auto mt-1 w-6 h-1.5 rounded-b-full bg-slate-900/10" />
                  </div>

                  {/* Cheek blush */}
                  <div className="absolute top-[64px] left-3 w-6 h-3 rounded-full bg-blue-100 blur-[2px] opacity-60" />
                  <div className="absolute top-[64px] right-3 w-6 h-3 rounded-full bg-blue-100 blur-[2px] opacity-60" />
                </div>

                {/* Neck */}
                <div className="w-[52px] h-4 mx-auto -mt-1 rounded-full bg-gradient-to-b from-slate-200 to-slate-300 border border-slate-200 shadow-inner" />

                {/* Body */}
                <div className="relative w-[168px] h-[148px] mx-auto -mt-1">
                  <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-white via-white to-slate-50 border border-slate-200 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.18),inset_0_1px_0_0_white]" />
                  <div className="absolute inset-[1px] rounded-[35px] bg-gradient-to-br from-white/80 to-transparent pointer-events-none" />
                  
                  {/* Chest logo */}
                  <div className="absolute top-[22px] left-1/2 -translate-x-1/2 w-[92px] h-[48px] rounded-2xl bg-slate-900 shadow-[0_8px_20px_-8px_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.15)] flex flex-col items-center justify-center">
                    <span className="text-white font-black text-[14px] tracking-tight leading-none">Buhouth<span className="text-[#60a5fa]">AI</span></span>
                    <span className="text-[8px] text-white/60 font-bold tracking-[0.2em] mt-1">RESEARCH ENGINE</span>
                    <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399] animate-pulse" />
                  </div>

                  {/* Chest details */}
                  <div className="absolute bottom-[24px] left-1/2 -translate-x-1/2 flex gap-2">
                    <div className="w-9 h-2 rounded-full bg-slate-100 border border-slate-200" />
                    <div className="w-9 h-2 rounded-full bg-blue-50 border border-blue-100" />
                  </div>
                </div>

                {/* Arms */}
                {/* Right arm (holding book) */}
                <div className="absolute top-[132px] -right-2 w-[64px] h-[18px] origin-right">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-slate-100 to-white border border-slate-200 shadow-[0_8px_16px_-8px_rgba(0,0,0,0.15)]" />
                  <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-slate-200 shadow flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-slate-700" />
                  </div>
                </div>

                {/* Left arm waving */}
                <div className="absolute top-[132px] -left-5 w-[72px] h-[20px] origin-right" style={{ animation: "wave 2.2s ease-in-out infinite", transformOrigin: "right center" }}>
                  <div className="w-full h-full rounded-full bg-gradient-to-l from-slate-100 to-white border border-slate-200 shadow-[0_8px_16px_-8px_rgba(0,0,0,0.15)] flex items-center justify-end pr-2">
                    <span className="text-[12px]">👋</span>
                  </div>
                  <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-slate-200 shadow flex items-center justify-center">
                    <span className="text-[14px]">✋</span>
                  </div>
                </div>

                {/* Base */}
                <div className="w-[84px] h-8 mx-auto mt-1 rounded-b-[20px] rounded-t-[12px] bg-gradient-to-b from-slate-100 to-slate-200 border border-slate-200 shadow-[inset_0_1px_0_0_white] flex items-center justify-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-slate-300" />
                  <div className="w-2 h-2 rounded-full bg-slate-300" />
                  <div className="w-2 h-2 rounded-full bg-slate-300" />
                </div>
              </div>

              {/* Floating card tips */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 -translate-y-full bg-white border border-slate-200 rounded-full px-3 py-1.5 shadow-[0_8px_20px_-8px_rgba(0,0,0,0.15)] flex items-center gap-1.5 text-[11px] font-bold text-slate-700 whitespace-nowrap">
                <span className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">🤖</span>
                أهلاً! كيف أساعدك اليوم؟
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-8 mt-4 md:mt-8">
        <div className="rounded-[28px] bg-white border border-slate-200/80 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.12)] overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-x-reverse divide-slate-100">
            {[
              { value: "250M+", label: "بحث علمي", sub: "ورقة حقيقية من OpenAlex", icon: Database, color: "text-blue-600 bg-blue-50" },
              { value: "50K+", label: "جامعة ومؤسسة", sub: "حول العالم", icon: GraduationCap, color: "text-violet-600 bg-violet-50" },
              { value: "PDF مباشر", label: "تحميل فوري", sub: "بدون تسجيل", icon: Download, color: "text-emerald-600 bg-emerald-50" },
              { value: "مجاني 100%", label: "مفتوح المصدر", sub: "للجميع", icon: BadgeCheck, color: "text-amber-600 bg-amber-50" },
            ].map((stat) => (
              <div key={stat.label} className="px-6 md:px-8 py-7 md:py-8 flex items-center gap-4 group hover:bg-slate-50/60 transition-colors">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${stat.color} group-hover:scale-105 transition-transform`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[18px] md:text-[20px] font-extrabold leading-none text-slate-900">{stat.value}</div>
                  <div className="text-[13px] font-bold text-slate-700 mt-1">{stat.label}</div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">{stat.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Features */}
      <section id="about" className="max-w-[1280px] mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "مباشر من المصدر",
              desc: "نتصل مباشرة بـ OpenAlex API. لا تخزين وهمي، لا تكرار. نفس البيانات التي تستخدمها الجامعات الكبرى.",
              icon: "🔗",
            },
            {
              title: "بحث ذكي بالعربية والإنجليزية",
              desc: "افهم نيتك البحثية. اكتب بالعربية أو الإنجليزية واحصل على نتائج دقيقة مع ملخصات وروابط PDF.",
              icon: "🧠",
            },
            {
              title: "احترافي وسريع",
              desc: "واجهة مثل Perplexity و Notion. سريعة، نظيفة، بدون إعلانات. صُممت للباحثين الحقيقيين.",
              icon: "⚡️",
            },
          ].map((f) => (
            <div key={f.title} className="rounded-[24px] bg-white border border-slate-200 p-7 shadow-[0_8px_30px_-20px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-[22px] mb-4">{f.icon}</div>
              <h3 className="font-extrabold text-[16px] mb-2">{f.title}</h3>
              <p className="text-[14px] leading-7 text-slate-600 font-medium">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Privacy */}
      <section id="privacy" className="max-w-[1280px] mx-auto px-5 md:px-8 pb-16">
        <div className="rounded-[24px] bg-slate-900 text-white p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">🔒</div>
          <div>
            <h3 className="font-extrabold text-[18px] mb-3">سياسة الخصوصية - شفافية كاملة</h3>
            <p className="text-[14px] leading-8 text-white/70 font-medium max-w-[720px]">
              نحن لا نجمع بيانات شخصية ولا نبيعها. البحث يتم مباشرة عبر OpenAlex (مفتوح المصدر). لا نستخدم كوكيز تتبع. سجل البحث يبقى في متصفحك فقط. نحن نؤمن أن المعرفة يجب أن تكون مفتوحة ومجانية، كما تفعل arXiv و OpenAlex.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#0f172a] text-white mt-8">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-14">
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center">
                  <span className="text-slate-900 font-black text-[18px]">B</span>
                </div>
                <span className="text-[20px] font-extrabold">Buhouth<span className="text-[#60a5fa]">AI</span></span>
              </div>
              <p className="mt-4 text-[13px] leading-7 text-white/60 max-w-[340px] font-medium">
                محرك بحث أكاديمي عربي - يتصل مباشرة بـ OpenAlex. 250 مليون ورقة علمية حقيقية، مفتوحة ومجانية للباحثين العرب.
              </p>
              <a href="mailto:abdmazn55@gmail.com" className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-[13px] font-bold transition-colors">
                <Mail className="w-4 h-4" /> abdmazn55@gmail.com
              </a>
            </div>

            <div className="grid grid-cols-2 gap-10 md:gap-20 text-[13.5px]">
              <div>
                <div className="font-bold text-white mb-4">روابط</div>
                <div className="flex flex-col gap-3 text-white/60 font-medium">
                  <a href="#privacy" className="hover:text-white transition-colors">سياسة الخصوصية</a>
                  <a href="#contact" className="hover:text-white transition-colors">اتصل بنا</a>
                  <a href="#" className="hover:text-white transition-colors">شروط الاستخدام</a>
                  <a href="#" className="hover:text-white transition-colors">خريطة الموقع</a>
                </div>
              </div>
              <div>
                <div className="font-bold text-white mb-4">المصادر</div>
                <div className="flex flex-col gap-3 text-white/60 font-medium">
                  <span>OpenAlex API</span>
                  <span>Crossref</span>
                  <span>arXiv & PubMed</span>
                  <span>Unpaywall PDF</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-[12px] text-white/40 font-medium">
            <span>© {new Date().getFullYear()} BuhouthAI - محرك البحث العلمي العربي. مبني بشفافية لـ 250M ورقة.</span>
            <span>صُنع بكل حب للباحثين • لا إعلانات • مفتوح المصدر</span>
          </div>
        </div>
      </footer>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] px-5 py-3 rounded-full bg-slate-900 text-white text-[13px] font-bold shadow-[0_20px_40px_-12px_rgba(0,0,0,0.4)] flex items-center gap-2 animate-in">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          {toast}
        </div>
      )}
    </div>
  );
}
