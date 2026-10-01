import SearchBar from '@/components/SearchBar';
import { articles } from '@/lib/articles';
import Link from 'next/link';
export default function Page(){
  return (<main className="max-w-7xl mx-auto px-6">
    <section className="py-16 md:py-24 text-center">
      <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full mb-4">● بحث مباشر في 250,387,000 ورقة علمية حقيقية</div>
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">ابحث في أكبر مكتبة<br/>أكاديمية مفتوحة</h1>
      <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-[15px]">لا نحمل البحوث داخل الموقع حتى لا يفشل البناء. نتصل مباشرة بـ OpenAlex API - نفس قاعدة بيانات Microsoft Academic.</p>
      <div className="mt-10"><SearchBar/></div>
    </section>
    <section className="mt-10"><div className="flex items-center justify-between mb-4"><h2 className="font-bold text-lg">مقالات دليل الباحث (15 مقالة)</h2><Link href="/articles" className="text-sm text-blue-600">عرض الكل</Link></div><div className="grid md:grid-cols-3 gap-4">{articles.slice(0,6).map(a=>(<Link key={a.slug} href={`/articles/${a.slug}`} className="p-4 bg-white border rounded-xl hover:shadow-sm"><h3 className="font-semibold text-sm line-clamp-2">{a.title}</h3><p className="text-xs text-slate-500 mt-2 line-clamp-2">{a.excerpt}</p><span className="text-[11px] text-slate-400 mt-2 block">{a.date}</span></Link>))}</div></section>
  </main>);
}
