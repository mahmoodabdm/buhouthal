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
      <header className="flex items-center justify-between py-3 max-w-7xl mx-auto px-6 w-full">
        <Link href="/" className="font-bold text-">Buhouth<span className="text-cyan-400">AI</span></Link>
        <button onClick={() => setOpen(true)} className="text- bg-white text-black px-4 py-1.5 rounded-full font-bold">دخول</button>
      </header>
      <LoginModal isOpen={open} onClose={() => setOpen(false)} />
      <div className="max-w- mx-auto w-full px-6 mt-1"><AdBanner slotId="top" label="أعلى" /></div>
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-8">
        <div className="bg-white/5 border border-white/10 text-cyan-300 text- px-2.5 py-1 rounded-full mb-3">بحث مباشر في 250,387,000 ورقة</div>
        <h1 className="text- md:text- font-bold leading-tight">ابحث في أكبر<br /><span className="text-cyan-300">مكتبة أكاديمية مفتوحة</span></h1>
        <div className="w-full max-w- mt-4"><div className="bg-white rounded-lg p-1 shadow"><SearchBar /></div></div>
      </section>
      <div className="max-w- mx-auto w-full px-6"><AdBanner slotId="middle" label="وسط" /></div>
      <section className="max-w-4xl mx-auto px-6 pb-6 w-full"><div className="grid grid-cols-3 md:grid-cols-6 gap-2.5">{services.map((s) => (<Link key={s.slug} href={`/services/${s.slug}`} className="bg-white/[0.06] border border-white/10 p-3 rounded-xl text-center"><div className="text- mb-1">{s.icon}</div><div className="text-">{s.title}</div></Link>))}</div></section>
      <footer className="border-t border-white/10 py-3 text-center text- text-white/40 px-6">abdmazn55@gmail.com | 07700700797<div className="max-w- mx-auto mt-2"><AdBanner slotId="footer" label="أسفل" /></div></footer>
    </main>
  );
}
