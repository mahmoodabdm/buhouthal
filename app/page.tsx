import SearchBar from '@/components/SearchBar';
import { articles } from '@/lib/articles';
import Link from 'next/link';
import AuthButton from '@/components/AuthButton';

export default function Page() {
  return (
    <main className="max-w-7xl mx-auto px-6">
      {/* Header جديد */}
      <header className="flex items-center justify-between py-5 border-b border-slate-100">
        <Link href="/" className="font-extrabold text- tracking-tight">Buhouth<span className="text-blue-600">AI</span></Link>
        <div className="flex items-center gap-3">
          <Link href="/articles" className="hidden md:block text-sm text-slate-600 hover:text-slate-900">الدليل</Link>
          <AuthButton />
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 md:py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full mb-4">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          بحث مباشر في 250,387,000 ورقة علمية حقيقية
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
          ابحث في أكبر مكتبة
          <br />
          أكاديمية مفتوحة
        </h1>

        <p className="text-slate-500 mt-4 max-w-2xl mx-auto text- leading-relaxed">
          لا نحمل البحوث داخل الموقع حتى لا يفشل البناء. نتصل مباشرة بـ OpenAlex API - نفس قاعدة بيانات Microsoft Academic.
        </p>

        <div className="mt-10 max-w-2xl mx-auto">
          <SearchBar />
        </div>
      </section>

      {/* Articles */}
      <section className="mt-10 pb-16">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-lg">مقالات دليل الباحث (15 مقالة)</h2>
          <Link href="/articles" className="text-sm text-blue-600 hover:underline">
            عرض الكل
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {articles.slice(0, 6).map((a) => (
            <Link
              key={a.slug}
              href={`/articles/${a.slug}`}
              className="p-5 bg-white border border-slate-200 rounded-xl hover:shadow-md hover:border-slate-300 transition-all"
            >
              <h3 className="font-semibold text-sm line-clamp-2 leading-snug">{a.title}</h3>
              <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">{a.excerpt}</p>
              <span className="text- text-slate-400 mt-3 block">{a.date}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
