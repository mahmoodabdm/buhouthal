"use client"
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import { articles } from '../lib/articles';
import Link from 'next/link';
import LoginModal from '../components/LoginModal'

export default function Page() {
  const [open, setOpen] = useState(false);

  const services = [
    { title: "كتابة البحوث", desc: "تخرج، ماجستير، دكتوراه باحترافية عالية", icon: "📚", color: "bg-blue-50" },
    { title: "الترجمة الأكاديمية", desc: "ترجمة بحوث ومقالات بترجمة أكاديمية دقيقة", icon: "🌐", color: "bg-green-50" },
    { title: "فحص الاستلال", desc: "فحص Turnitin وتقليل نسبة الاستلال", icon: "✅", color: "bg-purple-50" },
    { title: "تنسيق البحوث", desc: "تنسيق حسب دليل جامعتك العراقية", icon: "📝", color: "bg-orange-50" },
    { title: "توفير المصادر", desc: "جلب الكتب والرسائل النادرة والمدفوعة", icon: "📖", color: "bg-pink-50" },
    { title: "التقديم والقبولات", desc: "مساعدة في التقديم للدراسات العليا", icon: "🎓", color: "bg-yellow-50" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <header className="flex items-center justify-between py-5 border-b border-slate-100 max-w-7xl mx-auto px-6">
        <Link href="/" className="font-extrabold tracking-tight text-xl">Buhouth<span className="text-blue-600">AI</span></Link>
        <div className="flex items-center gap-3">
          <Link href="/articles" className="hidden md:block text-sm text-slate-600 hover:text-slate-900">الدليل</Link>
          <Link href="#services" className="hidden md:block text-sm text-slate-600 hover:text-slate-900">خدماتنا</Link>
          <button onClick={() => setOpen(true)} className="text-sm bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-black transition">دخول</button>
        </div>
      </header>

      <LoginModal isOpen={open} onClose={() => setOpen(false)} />

      {/* Hero - نفس القديم بس محسن */}
      <section className="py-16 md:py-24 text-center max-w-7xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-medium px-4 py-1.5 rounded-full mb-6 border border-blue-100">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          بحث مباشر في 250,387,000 ورقة علمية حقيقية
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight">
          ابحث في أكبر مكتبة<br /><span className="text-blue-600">أكاديمية مفتوحة</span>
        </h1>
        <p className="text-slate-500 mt-5 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
          لا نحمل البحوث داخل الموقع حتى لا يفشل البناء. نتصل مباشرة بـ OpenAlex API ونوفر لك خدمات أكاديمية متكاملة
        </p>
        <div className="mt-10 max-w-2xl mx-auto">
          <SearchBar />
        </div>
      </section>

      {/* قسم الخدمات الجديد */}
      <section id="services" className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight">خدماتنا الأكاديمية</h2>
            <p className="text-slate-500 mt-3">كل ما يحتاجه الباحث العراقي في مكان واحد</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.title} className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group">
                <div className={`w-12 h-12 ${s.color} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition`}>{s.icon}</div>
                <h3 className="font-bold text- mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                <div className="mt-4 text-xs font-medium text-blue-600 group-hover:gap-2 flex items-center gap-1">اطلب الخدمة <span>←</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* مقالاتك القديمة - بقت مثل ما هي */}
      <section className="mt-12 pb-20 max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-bold text-lg">مقالات دليل الباحث (15 مقالة)</h2>
          <Link href="/articles" className="text-sm text-blue-600 hover:underline bg-blue-50 px-3 py-1 rounded-full">عرض الكل</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {articles.slice(0, 6).map((a) => (
            <Link key={a.slug} href={`/articles/${a.slug}`} className="p-5 bg-white border border-slate-200 rounded-xl hover:shadow-md hover:border-slate-300 transition-all group">
              <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-blue-600">{a.title}</h3>
              <p className="text-xs text-slate-500 mt-2 line-clamp-2">{a.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-100 py-8 text-center text-sm text-slate-400 max-w-7xl mx-auto px-6">
        BuhouthAI © 2025 - منصة الباحث العراقي
      </footer>
    </main>
  );
}
