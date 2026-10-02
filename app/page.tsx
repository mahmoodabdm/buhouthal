"use client"
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import { articles } from '../lib/articles';
import Link from 'next/link';
import LoginModal from '../components/LoginModal'

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
    <main className="min-h-screen bg-[#05071a] text-white relative overflow-hidden flex flex-col">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e2e] via-[#11164a] to-[#05071a]" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]" />
      </div>

      <header className="flex items-center justify-between py-4 max-w-7xl mx-auto px-6 w-full">
        <Link href="/" className="font-bold text-lg">Buhouth<span className="text-cyan-400">AI</span></Link>
        <button onClick={() => setOpen(true)} className="text-xs bg-white text-black px-5 py-2 rounded-full font-bold">دخول</button>
      </header>

      <LoginModal isOpen={open} onClose={() => setOpen(false)} />

      {/* الهيرو مصغر وشريط البحث بالنص */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-10 relative">
        <img src="/robot.png" alt="robot" className="absolute right-[10%] top-[15%] w-[280px] hidden lg:block animate-[float_6s_ease-in-out_infinite] drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]" />

        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-cyan-300 text-[10px] px-3 py-1 rounded-full mb-4">
          بحث مباشر في 250,387,000 ورقة
        </div>

        {/* كتابة صغيرة */}
        <h1 className="text-3xl md:text-[42px] font-bold leading-tight">
          ابحث في أكبر<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">مكتبة أكاديمية مفتوحة</span>
        </h1>

        {/* شريط البحث بالنص تماما */}
        <div className="w-full max-w-xl mt-8">
          <div className="bg-white rounded-xl p-1.5 shadow-[0_0_40px_rgba(59,130,246,0.3)]">
            <SearchBar />
          </div>
          <p className="text-[11px] text-white/30 mt-3">OpenAlex API مباشرة - بدون تخزين</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-8 w-full">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="bg-white/[0.06] border border-white/10 p-4 rounded-2xl text-center hover:bg-white/[0.12] hover:-translate-y-1 transition-all">
              <div className="text-xl mb-1">{s.icon}</div>
              <div className="text-[12px] font-medium">{s.title}</div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 py-4 text-center text-[11px] text-white/30 px-6">
        abdmazn55@gmail.com | 07700700797 (عرض فقط) | <Link href="/privacy" className="underline">الخصوصية</Link> - <Link href="/contact" className="underline">اتصل بنا</Link>
      </footer>

      <style>{`@keyframes float {0%,100%{transform:translateY(0)}50%{transform:translateY(-18px)}}`}</style>
    </main>
  );
}
