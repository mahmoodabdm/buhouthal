"use client"
import { useSearchParams } from "next/navigation"
import { Suspense, useEffect, useState } from "react"
import Link from "next/link"

function SearchContent(){
  const q = useSearchParams().get("q") || ""
  const [data,setData]=useState<any[]>([])
  const [loading,setLoading]=useState(false)

  useEffect(()=>{
    if(!q) return
    setLoading(true)
    fetch(`https://api.openalex.org/works?search=${encodeURIComponent(q)}&per-page=20`)
  .then(r=>r.json())
  .then(d=>{ setData(d.results||[]); setLoading(false) })
  },[q])

  return(
    <>
      <h1 className="text-center text-sm mt-4 mb-6">نتائج البحث عن: <span className="text-cyan-300">{q}</span></h1>
      {loading && <p className="text-center text-white/50 text-xs">جاري البحث في OpenAlex...</p>}
      <div className="max-w-3xl mx-auto space-y-3">
        {data.map((w:any,i:number)=>(
          <div key={i} className="bg-white/5 border border-white/10 p-3 rounded-lg text-">
            <a href={w.doi||w.id} target="_blank" className="text-cyan-300 underline block">{w.display_name}</a>
            <p className="text-white/40 mt-1 text-">{w.authorships?.[0]?.author?.display_name} - {w.publication_year}</p>
          </div>
        ))}
        {!loading && data.length===0 && q && <p className="text-center text-white/30 text-xs">لا توجد نتائج</p>}
      </div>
    </>
  )
}

export default function SearchPage(){
  return(
    <main className="min-h-screen bg-[#05071a] text-white p-6">
      <Link href="/" className="text-cyan-300 text-xs underline">← رجوع للرئيسية</Link>
      <Suspense fallback={<p className="text-center mt-10 text-xs text-white/50">تحميل...</p>}>
        <SearchContent />
      </Suspense>
    </main>
  )
}
