'use client';
import { useState, useEffect } from 'react';
interface Work{ id:string; title:string; authors:string[]; year?:number; cited_by_count:number; doi?:string; }
export default function SearchBar(){
  const [q,setQ]=useState(''); const [results,setResults]=useState<Work[]>([]); const [loading,setLoading]=useState(false); const [error,setError]=useState('');
  useEffect(()=>{ if(q.length<3){ setResults([]); return;} const t=setTimeout(async()=>{ setLoading(true); setError(''); try{ const r=await fetch(`/api/search?q=${encodeURIComponent(q)}`); if(!r.ok) throw new Error('فشل البحث'); const d=await r.json(); setResults(d.results||[]);}catch(e:any){ setError(e.message);} finally{ setLoading(false);} },600); return ()=>clearTimeout(t); },[q]);
  return (<div className="w-full max-w-3xl mx-auto">
    <div className="relative"><input value={q} onChange={e=>setQ(e.target.value)} placeholder="ابحث في 250 مليون بحث علمي... مثل: artificial intelligence in education" className="w-full h-14 pl-12 pr-4 rounded-2xl border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-[15px]" dir="ltr"/><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">⌕</span></div>
    <div className="mt-6 space-y-3">
      {loading && <div className="space-y-2">{[1,2,3].map(i=><div key={i} className="h-20 bg-slate-100 rounded-xl animate-pulse"/> )}</div>}
      {error && <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">{error}</div>}
      {!loading && q.length>=3 && results.length===0 && !error && <div className="text-center text-slate-500 text-sm py-8">لا توجد نتائج لـ "{q}" - جرب كلمة أخرى بالإنجليزية</div>}
      {results.map(r=>(<div key={r.id} className="p-4 bg-white border border-slate-200 rounded-xl hover:shadow-sm transition"><a href={r.doi||`https://openalex.org/${r.id}`} target="_blank" className="font-semibold text-slate-900 line-clamp-2 hover:text-blue-600">{r.title}</a><div className="text-xs text-slate-500 mt-1 flex flex-wrap gap-2"><span>{r.authors.join(', ')||'مؤلف غير معروف'}</span>{r.year && <span>• {r.year}</span>}<span>• اقتباسات: {r.cited_by_count}</span></div>{r.doi && <a href={r.doi} target="_blank" className="text-[11px] text-blue-600 mt-2 inline-block">DOI: {r.doi}</a>}</div>))}
    </div>
    {q==='' && <div className="mt-8 text-center"><p className="text-xs text-slate-400">مثال: quantum computing, machine learning, renewable energy, CRISPR</p><p className="text-[11px] text-slate-400 mt-2">مدعوم من OpenAlex - 250M+ ورقة علمية حقيقية</p></div>}
  </div>);
}
