import { articles } from '@/lib/articles';
import { notFound } from 'next/navigation';
export function generateStaticParams(){ return articles.map(a=>({slug:a.slug})); }
export default function ArticlePage({params}:{params:{slug:string}}){
  const art = articles.find(a=>a.slug===params.slug); if(!art) return notFound();
  return (<main className="max-w-3xl mx-auto px-6 py-10"><a href="/articles" className="text-sm text-blue-600">← رجوع للمقالات</a><h1 className="text-3xl font-bold mt-4 leading-tight">{art.title}</h1><div className="text-xs text-slate-500 mt-2">{art.author} • {art.date} • 700 كلمة</div><div className="prose prose-slate mt-8 max-w-none text-[15px] leading-8 whitespace-pre-wrap">{art.content}</div></main>);
}
