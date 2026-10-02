"use client"
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import { articles } from '../lib/articles';
import Link from 'next/link';
import LoginModal from '../components/LoginModal'

export default function Page() {
  const [open, setOpen] = useState(false);
  const whatsappNumber = "9647700700797"

  const orderService = (title: string) => {
    const msg = `مرحبا BuhouthAI، أريد خدمة: ${title}`
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const services = [
    { title: "كتابة البحوث", desc: "تخرج، ماجستير، دكتوراه", icon: "📚" },
    { title: "الترجمة الأكاديمية", desc: "ترجمة دقيقة ومعتمدة", icon: "🌐" },
    { title: "فحص الاستلال", desc: "Turnitin وتقليل النسبة", icon: "✅" },
    { title: "تنسيق البحوث", desc: "حسب دليل جامعتك", icon: "📝" },
    { title: "توفير المصادر", desc: "كتب ورسائل نادرة", icon: "📖" },
    { title: "القبولات", desc: "مساعدة في التقديم", icon: "🎓" },
  ];

  return (
    <main className="min-h-screen bg-[#05071a] text-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e2e] via-[#11164a] to-[#05071a]" />
        <div className="absolute top-[-20%] left-[-10%] w- h- bg-blue-600/30 rounded-full blur- animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w- h- bg-purple-600/25 rounded-full blur- animate-pulse" />
      </div>

      <div className="hidden lg:block absolute top-[18%] right-[8%] -z-5 pointer-events-none">
        <div className="relative animate-[float_6s_ease-in-out_infinite]">
          <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-24 h-4 bg-black/40 blur- rounded-full" />
          <div className="w-28 h-36 bg-gradient-to-b from-slate-100 to-slate-300 rounded- shadow-[0_20px_40px_rgba(0,0,0,0.5)] relative border border-white/50">
            <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-3">
              <div className="w-4 h-4 bg-[#05071a] rounded-full relative"><div className="absolute top-0.5 left-0.5 w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_#22d3ee]" /></div>
              <div className="w-4 h-4 bg-[#05071a] rounded-full relative"><div className="absolute top-0.5 left-0.5 w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_#22d3ee]" /></div>
            </div>
            <div className="absolute top- left-1/2 -translate-x-1/2 w-14 h-8 bg-[#05071a] rounded-lg border border-cyan-400/30 flex items-center justify-center">
              <div className="w-8 h-1 bg-cyan-400/60 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
            </div>
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-1 h-6 bg-slate-300" />
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-b from-cyan-300 to-blue-500 rounded-full shadow-[0_0_12px_#22d3ee] animate-pulse" />
          </div>
        </div>
      </div>

      <header className="flex items-center justify-between py-5 max-w-7xl mx-auto px-6 relative z-10">
        <Link href="/" className="font-extrabold tracking-tight text-xl">Buhouth<span className="text-cyan-400">AI</span></Link>
        <div className="flex items-center gap-4">
          <Link href="#services" className="hidden md:block text-sm text-white/60 hover:text-white">خدماتنا</Link>
          <Link href="/contact" className="hidden md:block text-sm text-white/60 hover:text-white">اتصل بنا</Link>
          <button onClick={() => setOpen(true)} className="text-sm bg-white text-[#05071a] px-6 py-2.5 rounded-full font-bold hover:bg-cyan-300 transition">دخول</button>
        </div>
      </header>

      <LoginModal isOpen={open} onClose={() => setOpen(false)} />

      <section className="py-20 md:py-32 text-center max-w-7xl mx-auto px-6 relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur text-cyan-300 text-xs font-medium px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          بحث مباشر في 250,387,000 ورقة علمية حقيقية
        </div>
        <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight">
          ابحث في أكبر<br />
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">مكتبة أكاديمية</span><br />
          مفتوحة
        </h1>
        <p className="text-white/50 mt-6 max-w-2xl mx-auto">لا نحمل البحوث داخل الموقع حتى لا يفشل البناء. نتصل مباشرة بـ OpenAlex API</p>
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-2 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
            <SearchBar />
          </div>
        </div>
      </section>

      <section id="services" className="py-16 max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="font-bold text-xl mb-6 text-white/90">خدماتنا الأكاديمية - اضغط للطلب</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {services.map((s) => (
            <div key={s.title} onClick={() => orderService(s.title)} className="group bg-white/[0.06] backdrop-blur-xl border border-white/10 p-6 rounded- hover:bg-white/[0.1] hover:border-cyan-400/30 hover:-translate-y-1 transition-all cursor-pointer">
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className="font-bold text-">{s.title}</h3>
              <p className="text-sm text-white/40 mt-1">{s.desc}</p>
              <div className="mt-4 text-xs text-cyan-300">اطلب الآن ←</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 mt-10 py-10 max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <p className="font-bold">BuhouthAI © 2025</p>
            <p className="text-xs text-white/40 mt-2">abdmazn55@gmail.com | واتساب: 07700700797 (عرض فقط)</p>
          </div>
          <div className="flex gap-6 text-sm text-white/50">
            <Link href="/privacy" className="hover:text-white">سياسة الخصوصية</Link>
            <Link href="/terms" className="hover:text-white">شروط الاستخدام</Link>
            <Link href="/contact" className="hover:text-white">اتصل بنا</Link>
          </div>
        </div>
      </footer>

      <style>{`@keyframes float {0%,100%{transform:translateY(0px) rotate(-1deg)}50%{transform:translateY(-20px) rotate(1deg)}}`}</style>
    </main>
  );
}
