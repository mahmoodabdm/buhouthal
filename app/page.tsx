"use client"
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import { articles } from '../lib/articles';
import Link from 'next/link';
import LoginModal from '../components/LoginModal'

export default function Page() {
  const [open, setOpen] = useState(false);
  return (
    <main className="max-w-7xl mx-auto px-6">
      <header className="flex items-center justify-between py-5 border-b border-slate-100">
        <Link href="/" className="font-extrabold tracking-tight">Buhouth<span className="text-blue-600">AI</span></Link>
        <div className="flex items-center gap-3">
          <Link href="/articles" className="hidden md:block text-sm text-slate-600 hover:text-slate-900">الدليل</Link>
          <button onClick={() => setOpen(true)} className="text-sm bg-slate-900 text-white px-4 py-2 rounded-lg">دخول</button>
        </div>
      </header>
      <LoginModal isOpen={open} onClose={() => setOpen(false)} />
      <section className="py-16 md:py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full mb-4">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          بحث مباشر في 250,387,000 ورقة علمية حقيقية
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
          ابحث في أكبر مكتبة<br />أكاديمية مفتوحة
        </h1>
        <p className="text-slate-500 mt-4 max-w-2xl mx-auto leading-relaxed">
          لا نحمل البحوث داخل الموقع حتى لا يفشل البناء. نتصل مباشرة بـ OpenAlex API
        </p>
        <div className="mt-10 max-w-2xl mx-auto">
          <SearchBar />
        </div>
      </section>
      <section className="mt-10 pb-16">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-lg">مقالات دليل الباحث (15 مقالة)</h2>
          <Link href="/articles" className="text-sm text-blue-600 hover:underline">عرض الكل</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {articles.slice(0, 6).map((a) => (
            <Link key={a.slug} href={`/articles/${a.slug}`} className="p-5 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-all">
              <h3 className="font-semibold text-sm line-clamp-2">{a.title}</h3>
              <p className="text-xs text-slate-500 mt-2 line-clamp-2">{a.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
