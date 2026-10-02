"use client"
import { useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const q = searchParams.get("q") || ""
  const currentPage = parseInt(searchParams.get("page") || "1")
  const [results, setResults] = useState<any[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)

  const perPage = 10
  const totalPages = Math.ceil(total / perPage)

  useEffect(() => {
    if (!q) return
    setLoading(true)
    fetch(`https://api.openalex.org/works?search=${encodeURIComponent(q)}&page=${currentPage}&per_page=${perPage}`)
     .then(r => r.json())
     .then(data => {
        setResults(data.results || [])
        setTotal(data.meta?.count || 0)
        setLoading(false)
      })
  }, [q, currentPage])

  const goPage = (p: number) => {
    router.push(`/search?q=${encodeURIComponent(q)}&page=${p}`)
  }

  return (
    <main className="min-h-screen bg-[#05071a] text-white">
      {/* شريط البحث فوق - نفس قياس كوكل */}
      <header className="border-b border-white/10 p-4">
        <div style={{width:'100%', maxWidth:'584px', margin:'0 auto'}}>
          <div className="flex items-center gap-2">
            <Link href="/" className="font-bold">Buhouth<span className="text-cyan-400">AI</span></Link>
            <div style={{position:'relative', flex:1}}>
              <input
                defaultValue={q}
                id="searchInput"
                onKeyDown={(e:any)=>{ if(e.key==='Enter') router.push(`/search?q=${encodeURIComponent(e.target.value)}&page=1`) }}
                placeholder="ابحث..."
                style={{
                  width:'100%', height:'46px', background:'white', color:'black',
                  fontSize:'14px', textAlign:'center', borderRadius:'9999px',
                  paddingLeft:'70px', paddingRight:'70px', outline:'none'
                }}
                dir="rtl"
              />
              <button
                onClick={()=>{ const v=(document.getElementById('searchInput') as any).value; router.push(`/search?q=${encodeURIComponent(v)}&page=1`) }}
                style={{position:'absolute', left:'5px', top:'5px', bottom:'5px', background:'#05071a', color:'white', fontSize:'12px', fontWeight:'bold', padding:'0 22px', borderRadius:'9999px', border:'none'}}
              >
                بحث
              </button>
            </div>
          </div>
        </div>
      </header>

      <div style={{maxWidth:'584px', margin:'20px auto', padding:'0 16px'}}>
        {loading? <p className="text-center text-white/60">جاري البحث...</p> : (
          <>
            <p className="text- text-white/40 mb-4">حوالي {total.toLocaleString()} نتيجة</p>
            {results.map((work:any, i:number)=>(
              <div key={i} className="mb-5 border-b border-white/10 pb-4">
                <a href={work.doi || work.id} target="_blank" className="text- text-[#8ab4f8] hover:underline line-clamp-2">{work.title}</a>
                <p className="text- text-white/60 mt-1 line-clamp-2">{work.abstract_inverted_index? Object.keys(work.abstract_inverted_index).slice(0,30).join(' ') : 'لا يوجد ملخص'}</p>
                <p className="text- text-white/30 mt-1">{work.authorships?.[0]?.author?.display_name} • {work.publication_year}</p>
              </div>
            ))}

            {/* أرقام الصفحات مثل كوكل */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-1 mt-8 flex-wrap">
                {Array.from({length: Math.min(totalPages, 10)}, (_, i) => {
                  const p = i + 1
                  const isActive = p === currentPage
                  return (
                    <button
                      key={p}
                      onClick={()=>goPage(p)}
                      style={{
                        minWidth:'36px', height:'36px', borderRadius:'50%',
                        background: isActive? 'white' : 'transparent',
                        color: isActive? 'black' : 'white',
                        border: isActive? 'none' : '1px solid rgba(255,255,255,0.2)',
                        fontSize:'13px', fontWeight: isActive? 'bold' : 'normal',
                        cursor:'pointer'
                      }}
                    >
                      {p}
                    </button>
                  )
                })}
                {currentPage < totalPages && (
                  <button onClick={()=>goPage(currentPage+1)} className="mr-2 text- text-[#8ab4f8] hover:underline">التالي ←</button>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </main>
  )
}
