"use client"
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Link from 'next/link';
import LoginModal from '../components/LoginModal'
import AdBanner from '../components/AdBanner'

export default function Page() {
  const [open, setOpen] = useState(false);
  const services = [
    { slug: "writing", title: "كتابة البحوث", icon: "📚" },
    { slug: "translation", title: "الترجمة", icon: "🌐" },
    { slug: "plagiarism", title: "فحص الاستلال", icon: "✅" },
    { slug: "formatting", title: "التنسيق", icon: "📝" },
    { slug: "sources", title: "المصادر", icon: "📖" },
    { slug: "admission", title: "القبولات", icon: "🎓" },
  ];

  return (
    <main className="min-h-screen bg-[#05071a] text-white flex flex-col">
      <header className="flex items-center justify-between py-4 max-w-7xl mx-auto px-6 w-full">
        <Link href="/" className="font-bold text-lg">Buhouth<span className="text-cyan-400">AI</span></Link>
        <button onClick={() => setOpen(true)} className="text-xs bg-white text-black px-5 py-2 rounded-full font-bold">دخول</button>
      </header>

      <LoginModal isOpen={open} onClose={() => setOpen(false)} />

      <div className="max-w-3xl mx-auto w-full px-6 mt-1">
        <AdBanner slotId="top-banner" label="أعلى" />
      </div>

      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-10">
        <div className="bg-white/5 border border-white/10 text-cyan-300 text- px-3 py-1 rounded-full mb-4">
          بحث مباشر في 250,387,000 ورقة
        </div>

        <h1 className="text-3xl md:text- font-bold leading-tight">
          ابحث في أكبر<br />
          <span className="text-cyan-300">مكتبة أكاديمية مفتوحة</span>
        </h1>

        <div className="w-full max-w- mt-6">
          <div className="bg-white rounded-xl p-2 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
            <SearchBar />
          </div>
          <p className="text- text-white/30 mt-2">OpenAlex API مباشرة - بدون تخزين</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto w-full px-6">
        <AdBanner slotId="middle-feed" label="وسط" />
      </div>

      <section className="max-w-5xl mx-auto px-6 pb-8 w-full">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="bg-white/[0.06] border border-white/10 p-4 rounded-2xl text-center hover:bg-white/[0.10] transition-all">
              <div className="text-xl mb-1">{s.icon}</div>
              <div className="text-">{s.title}</div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 py-4 text-center text- text-white/40 px-6">
        <p>abdmazn55@gmail.com | 07700700797 (عرض فقط)</p>
        <div className="flex gap-4 justify-center mt-2">
          <Link href="/privacy" className="underline">الخصوصية</Link>
          <Link href="/terms" className="underline">الشروط</Link>
          <Link href="/contact" className="underline">اتصل بنا</Link>
        </div>
        <div className="max-w-3xl mx-auto mt-3">
          <AdBanner slotId="footer" label="أسفل" />
        </div>
      </footer>
    </main>
  );
}
