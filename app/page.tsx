"use client"
import { useState } from 'react';
import { useRouter } from "next/navigation"
import Link from 'next/link';
import LoginModal from '../components/LoginModal'
import AdBanner from '../components/AdBanner'

function SearchBarGoogle(){
  const [q,setQ]=useState("")
  const router=useRouter()
  const go=()=>{ if(q.trim()) router.push(`/search?q=${encodeURIComponent(q.trim())}`) }
  return(
    <div style={{position:'relative', width:'100%'}}>
      <input
        value={q}
        onChange={e=>setQ(e.target.value)}
        onKeyDown={e=>e.key==='Enter'&&go()}
        placeholder="ابحث..."
        style={{
          width:'100%',
          height:'46px',
          background:'white',
          color:'black',
          fontSize:'14px',
          textAlign:'center',
          borderRadius:'9999px',
          paddingLeft:'70px',
          paddingRight:'70px',
          border:'1px solid #e5e7eb',
          boxShadow:'0 1px 6px rgba(32,33,36,0.28)',
          outline:'none'
        }}
        dir="rtl"
      />
      <button
        onClick={go}
        style={{
          position:'absolute',
          left:'5px',
          top:'5px',
          bottom:'5px',
          background:'#05071a',
          color:'white',
          fontSize:'12px',
          fontWeight:'bold',
          padding:'0 22px',
          borderRadius:'9999px',
          border:'none',
          cursor:'pointer'
        }}
      >
        بحث
      </button>
    </div>
  )
}

export default function Page() {
  const [open, setOpen] = useState(false);
  const services = [
    { slug: "plagiarism", title: "فحص الاستلال", icon: "✅", active: true },
    { slug: "paraphrase", title: "إعادة الصياغة", icon: "✍️", active: false },
    { slug: "summarizer", title: "ملخص البحوث", icon: "📄", active: false },
    { slug: "citation", title: "منشئ المراجع", icon: "🔗", active: false },
    { slug: "converter", title: "محول PDF", icon: "🔄", active: false },
    { slug: "grammar", title: "مدقق لغوي", icon: "🧠", active: false },
  ];

  return (
    <main className="min-h-screen bg-[#05071a] text-white flex flex-col">
      <header className="flex items-center justify-between py-3 max-w-7xl mx-auto px-6 w-full">
        <Link href="/" className="font-bold text-">Buhouth<span className="text-cyan-400">AI</span></Link>
        <button onClick={() => setOpen(true)} className="text- bg-white text-black px-4 py-1.5 rounded-full font-bold">دخول</button>
      </header>
      <LoginModal isOpen={open} onClose={() => setOpen(false)} />
      <div className="max-w- mx-auto w-full px-6 mt-1"><AdBanner slotId="top" label="أعلى" /></div>

      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-10">
        <div className="bg-white/5 border border-white/10 text-cyan-300 text- px-2.5 py-1 rounded-full mb-3">بحث مباشر في 250,387,000 ورقة</div>
        <h1 className="text- md:text- font-bold leading-tight">ابحث في أكبر<br /><span className="text-cyan-300">مكتبة أكاديمية مفتوحة</span></h1>

        {/* هذا هو قياس كوكل الحقيقي 584px */}
        <div style={{width:'100%', maxWidth:'584px', margin:'24px auto 0 auto'}}>
          <SearchBarGoogle />
        </div>

        <p className="text- text-white/30 mt-2">OpenAlex API مباشرة</p>
      </section>

      <div className="max-w- mx-auto w-full px-6"><AdBanner slotId="middle" label="وسط" /></div>
      <section className="max-w-4xl mx-auto px-6 pb-6 w-full">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2.5">
          {services.map((s) => {
            const Card = (<div className={`relative bg-white/[0.06] border border-white/10 p-3 rounded-xl text-center ${s.active? 'hover:bg-white/[0.10]' : 'opacity-60'}`}><div className="text- mb-1">{s.icon}</div><div className="text-">{s.title}</div>{!s.active && <div className="absolute -top-1.5 -right-1.5 bg-yellow-500 text-black text- px-1.5 py-0.5 rounded-full font-bold">قريباً</div>}{s.active && <div className="absolute -top-1.5 -right-1.5 bg-green-500 text-white text- px-1.5 py-0.5 rounded-full">يعمل</div>}</div>);
            return s.active? (<Link key={s.slug} href={`/services/${s.slug}`}>{Card}</Link>) : (<div key={s.slug} className="cursor-not-allowed">{Card}</div>);
          })}
        </div>
      </section>
      <footer className="border-t border-white/10 py-3 text-center text- text-white/40 px-6"><p>abdmazn55@gmail.com | 077007707777</p><div className="max-w- mx-auto mt-2"><AdBanner slotId="footer" label="أسفل" /></div></footer>
    </main>
  );
}
 
