import { articles } from '@/lib/articles';
import Link from 'next/link';
export default function ArticlesPage(){
  return (<main className="max-w-5xl mx-auto px-6 py-10"><h1 className="text-2xl font-bold mb-6">جميع المقالات - 15 مقالة احترافية</h1><div className="grid md:grid-cols-2 gap-4">{articles.map(a=>(<Link key={a.slug} href={`/articles/${a.slug}`} className="p-5 bg-white border rounded-xl hover:shadow"><h3 className="font-bold">{a.title}</h3><p className="text-sm text-slate-500 mt-2 line-clamp-3">{a.excerpt}</p><div className="text-[11px] text-slate-400 mt-3">{a.author} • {a.date} • ~700 كلمة</div></Link>))}</div></main>);
}
