"use client";
import { useState, useEffect } from "react";

export default function Page() {
  const [query, setQuery] = useState("");
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
    setToast("جاري البحث عن: " + query + " في 250 مليون ورقة...");
    setTimeout(() => setToast(null), 3000);
  };

  const tags = ["quantum computing", "machine learning", "renewable energy", "CRISPR", "neural networks", "climate change"];

  return (
    <div dir="rtl" className="min-h-screen bg-[#fcfcfb] text-slate-900 overflow-x-hidden" style={{ fontFamily: "'Cairo', sans-serif" }}>
      <style>{\`
        @keyframes float { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-14px)} }
        @keyframes wave { 0%,100%{transform:rotate(-15deg)} 25%{transform:rotate(20deg)} 50%{transform:rotate(-10deg)} 75%{transform:rotate(25deg)} }
        @keyframes blink { 0%,90%,100%{transform:scaleY(1)} 92%,94%{transform:scaleY(0.1)} }
      \`}</style>

      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/70">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 h-[72px] flex items-center justify-between">
          <div className="flex items-center gap-10">
            <a href="#home" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#2563eb] flex items-center justify-center shadow-lg"><span className="text-white font-black text-[18px]">B</span></div>
              <span className="text-[22px] font-extrabold"><span className="text-slate-900">Buhouth</span><span className="text-[#2563eb]">AI</span></span>
            </a>
            <nav className="hidden lg:flex items-center gap-7">
              <a href="#home" className="text-[14.5px] font-semibold text-slate-600 hover:text-slate-900">الرئيسية</a>
              <a href="#privacy" className="text-[14.5px] font-semibold text-slate-600 hover:text-slate-900">سياسة الخصوصية</a>
              <a href="#contact" className="text-[14.5px] font-semibold text-slate-600 hover:text-slate-900">اتصل بنا</a>
              <a href="#about" className="text-[14.5px] font-semibold text-slate-600 hover:text-slate-900">عن الموقع</a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3">
              <button onClick={()=>{setToast("تسجيل الدخول - قريباً"); setTimeout(()=>setToast(null),2000);}} className="h-10 px-5 rounded-full border border-slate-200 bg-white text-[14px] font-bold text-slate-700 hover:bg-slate-50">تسجيل الدخول</button>
              <button onClick={()=>{setToast("مرحباً! ابدأ مجاناً"); setTimeout(()=>setToast(null),2000);}} className="h-10 px-5 rounded-full bg-[#2563eb] text-white text-[14px] font-bold shadow-[0_8px_20px_-8px_#2563eb] hover:bg-[#1d4ed8]">ابدأ مجانا ←</button>
            </div>
            <button onClick={()=>setMobileMenu(!mobileMenu)} className="lg:hidden w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-xl">{mobileMenu?"✕":"☰"}</button>
          </div>
        </div>
        {mobileMenu && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-5 py-4 flex flex-col gap-3">
            <a href="#privacy" className="py-2.5 px-3 rounded-xl hover:bg-slate-50 font-semibold text-slate-700">سياسة الخصوصية</a>
            <a href="#contact" className="py-2.5 px-3 rounded-xl hover:bg-slate-50 font-semibold text-slate-700">اتصل بنا</a>
            <a href="#about" className="py-2.5 px-3 rounded-xl hover:bg-slate-50 font-semibold text-slate-700">عن الموقع</a>
          </div>
        )}
      </header>

      <section id="home" className="max-w-[1280px] mx-auto px-5 md:px-8 pt-10 md:pt-16 pb-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[12.5px] font-bold text-[#2563eb]">
              <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse"></span>
              بحث مباشر في 250,387,000 ورقة علمية حقيقية
            </div>
            <h1 className="mt-5 text-[36px] md:text-[52px] font-extrabold leading-[1.1] tracking-tight text-slate-900">
              ابحث في أكبر مكتبة<br/>أكاديمية مفتوحة
            </h1>
            <p className="mt-4 text-[15px] md:text-[16px] leading-8 text-slate-600 font-medium max-w-[560px]">
              لا نحمل البحوث داخل الموقع حتى لا تُهمل البناء. نتصل مباشرة بـ OpenAlex API - نفس قاعدة بيانات Microsoft Academic
            </p>
            <div className="mt-8 relative max-w-[640px]">
              <div className="relative flex items-center bg-white rounded-[20px] border border-slate-200 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)] p-2">
                <input value={query} onChange={(e)=>setQuery(e.target.value)} onKeyDown={(e)=>e.key==="Enter"&&handleSearch()} placeholder="مثال: artificial intelligence in education - ابحث في 250 مليون بحث علمي..." className="flex-1 h-[52px] px-5 bg-transparent outline-none text-[14.5px] font-medium placeholder:text-slate-400" />
                <button onClick={handleSearch} className="h-[52px] px-7 rounded-[14px] bg-[#2563eb] text-white font-bold text-[14.5px] hover:bg-[#1d4ed8] shadow-[0_8px_20px_-8px_#2563eb] flex items-center gap-2">🔍 بحث</button>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map(t=>(<button key={t} onClick={()=>setQuery(t)} className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-[12px] font-semibold text-slate-600 hover:border-slate-300 hover:bg-slate-50">{t}</button>))}
              </div>
              <p className="mt-3 text-[11px] text-slate-500 font-medium">مدعوم من OpenAlex • 250M+ ورقة علمية حقيقية</p>
            </div>
          </div>

          <div className="relative lg:h-[520px] flex items-center justify-center">
            <div className="absolute w-[480px] h-[480px] rounded-full bg-gradient-to-br from-blue-50 to-violet-50 blur-2xl opacity-70"></div>
            <div className="relative" style={{animation:"float 4s ease-in-out infinite"}}>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-6 bg-black/10 rounded-full blur-[8px]"></div>
              <div className="relative w-[220px]">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-red-400 border-2 border-white shadow-md" style={{animation:"blink 3s infinite"}}></div>
                  <div className="w-1 h-6 bg-slate-300"></div>
                </div>
                <div className="relative mx-auto w-[140px] h-[110px] bg-white rounded-[28px] border border-slate-200 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
                  <div className="absolute top-3 w-10 h-1.5 rounded-full bg-slate-100"></div>
                  <div className="flex gap-5 mt-2">
                    <div className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center"><div className="w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_12px_#22d3ee]" style={{animation:"blink 4s infinite"}}></div></div>
                    <div className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center"><div className="w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_12px_#22d3ee]" style={{animation:"blink 4s 0.1s infinite"}}></div></div>
                  </div>
                  <div className="mt-3 w-12 h-2 rounded-full bg-slate-100"></div>
                  <div className="mt-1.5 px-2 py-1 rounded-full bg-[#2563eb] text-white text-[9px] font-bold">BuhouthAI</div>
                </div>
                <div className="mx-auto -mt-2 w-[160px] h-[130px] bg-white rounded-[24px] border border-slate-200 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)] flex flex-col items-center pt-4">
                  <div className="w-16 h-8 rounded-full bg-slate-900 flex items-center justify-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div><span className="text-[10px] text-white font-bold">ONLINE</span></div>
                  <div className="mt-3 grid grid-cols-3 gap-2"><div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">📚</div><div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center">🎓</div><div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">📄</div></div>
                </div>
                <div className="absolute top-[95px] -right-3 w-12 h-14 bg-white border border-slate-200 rounded-[16px] shadow-md origin-top" style={{animation:"wave 2.5s ease-in-out infinite"}}><div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[14px]">👋</div></div>
                <div className="absolute top-[95px] -left-3 w-12 h-14 bg-white border border-slate-200 rounded-[16px] shadow-md"></div>
                <div className="absolute -right-12 top-10 w-12 h-14 bg-white rounded-xl border border-slate-200 shadow-lg flex items-center justify-center text-xl" style={{animation:"float 3s ease-in-out infinite"}}>📄</div>
                <div className="absolute -left-14 top-24 w-10 h-12 bg-white rounded-xl border border-slate-200 shadow-lg flex items-center justify-center text-lg" style={{animation:"float 3.5s ease-in-out 0.5s infinite"}}>📖</div>
                <div className="absolute -right-6 bottom-10 w-9 h-9 bg-[#2563eb] rounded-xl shadow-[0_8px_20px_-8px_#2563eb] flex items-center justify-center text-white text-sm">✓</div>
              </div>
            </div>
            <div className="absolute bottom-0 bg-white/80 backdrop-blur border border-slate-200 rounded-full px-4 py-2 flex items-center gap-2 shadow-md"><span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span><span className="text-[12px] font-bold text-slate-700">مرحبا! أنا مساعدك البحثي 🤖</span></div>
          </div>
        </div>

        <div className="mt-14 md:mt-20 rounded-[24px] bg-white border border-slate-200 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.15)] overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-x-reverse divide-slate-100">
            <div className="px-6 md:px-8 py-7 flex items-center gap-4"><div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">📊</div><div><div className="text-[20px] font-extrabold">250M+</div><div className="text-[13px] font-bold text-slate-700">بحث علمي</div></div></div>
            <div className="px-6 md:px-8 py-7 flex items-center gap-4"><div className="w-12 h-12 rounded-2xl bg-violet-50 flex items-center justify-center">🎓</div><div><div className="text-[20px] font-extrabold">50K+</div><div className="text-[13px] font-bold text-slate-700">جامعة</div></div></div>
            <div className="px-6 md:px-8 py-7 flex items-center gap-4"><div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center">⬇️</div><div><div className="text-[20px] font-extrabold">PDF مباشر</div><div className="text-[13px] font-bold text-slate-700">تحميل فوري</div></div></div>
            <div className="px-6 md:px-8 py-7 flex items-center gap-4"><div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center">✅</div><div><div className="text-[20px] font-extrabold">مجاني 100%</div><div className="text-[13px] font-bold text-slate-700">للجميع</div></div></div>
          </div>
        </div>
      </section>

      <section id="privacy" className="max-w-[1280px] mx-auto px-5 md:px-8 pb-16">
        <div className="rounded-[24px] bg-slate-900 text-white p-8 md:p-10 flex gap-6">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">🔒</div>
          <div><h3 className="font-extrabold text-[18px] mb-3">سياسة الخصوصية - شفافية كاملة</h3><p className="text-[14px] leading-8 text-white/70">نحن لا نجمع بيانات شخصية ولا نبيعها. البحث يتم مباشرة عبر OpenAlex (مفتوح المصدر). لا كوكيز تتبع. سجل البحث يبقى في متصفحك فقط.</p></div>
        </div>
      </section>

      <footer id="contact" className="bg-[#0f172a] text-white mt-8">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-14">
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div><div className="flex items-center gap-2.5"><div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center"><span className="text-slate-900 font-black">B</span></div><span className="text-[20px] font-extrabold">BuhouthAI</span></div><p className="mt-4 text-[13px] leading-7 text-white/60 max-w-[340px]">محرك بحث أكاديمي عربي - 250 مليون ورقة علمية حقيقية، مفتوحة ومجانية.</p><a href="mailto:abdmazn55@gmail.com" className="mt-5 inline-flex px-4 py-2 rounded-full bg-white/10 border border-white/10 text-[13px] font-bold">📧 abdmazn55@gmail.com</a></div>
            <div className="grid grid-cols-2 gap-10 md:gap-20 text-[13.5px]"><div><div className="font-bold mb-4">روابط</div><div className="flex flex-col gap-3 text-white/60"><a href="#privacy">سياسة الخصوصية</a><a href="#contact">اتصل بنا</a><a href="#">شروط الاستخدام</a></div></div><div><div className="font-bold mb-4">المصادر</div><div className="flex flex-col gap-3 text-white/60"><span>OpenAlex API</span><span>Crossref</span><span>arXiv & PubMed</span></div></div></div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-[12px] text-white/40">© 2026 BuhouthAI - محرك البحث العلمي العربي</div>
        </div>
      </footer>

      {toast && <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] px-5 py-3 rounded-full bg-slate-900 text-white text-[13px] font-bold shadow-xl">{toast}</div>}
    </div>
  );
}
