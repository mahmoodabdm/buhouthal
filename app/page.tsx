// app/page.tsx
'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [query, setQuery] = useState('')

  const handleSearch = (e: any) => {
    e.preventDefault()
    if(query.trim()) window.location.href = `/search?q=${encodeURIComponent(query)}`
  }

  return (
    <main className="min-h-screen bg-[#070b1f] relative overflow-hidden flex flex-col">
      {/* خلفية متحركة */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e2a8a]/40 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w- h- bg-blue-600/20 rounded-full blur-" />

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-6 max-w-7xl mx-auto w-full">
        <Link href="/" className="text-2xl font-black tracking-tight">BuhouthAI</Link>
        <div className="flex gap-3">
          <Link href="/articles" className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-sm">المقالات</Link>
          <Link href="/auth/callback" className="px-5 py-2 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-200">دخول</Link>
        </div>
      </header>

      {/* Hero */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 text-center mt-10">

        <div className="mb-6 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs">
          يبحث حاليا في 250,387,000 ورقة
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
          ابحث في أكبر<br/>
          <span className="bg-gradient-to-l from-cyan-300 to-blue-400 bg-clip-text text-transparent">مكتبة أكاديمية مفتوحة</span>
        </h1>

        {/* شريط البحث - هذا اللي كان عاطل */}
        <form onSubmit={handleSearch} className="w-full max-w-2xl relative group">
          <input
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            placeholder="ابحث عن ورقة علمية، موضوع، مؤلف..."
            className="w-full h- rounded-full bg-white text-black pr-6 pl-28 text-lg outline-none focus:ring-4 focus:ring-blue-500/30 shadow-2xl"
          />
          <button type="submit" className="absolute left-2 top-2 h- px-8 rounded-full bg-[#0a0e27] text-white font-bold hover:bg-black transition">
            بحث
          </button>
        </form>

        <p className="mt-4 text-white/50 text-sm">مدعوم بـ OpenAlex API • نتصفح 24 ألف مصدر أكاديمي</p>

        {/* إعلان - لا تخليه يغطي البحث */}
        <div className="mt-16 w-full max-w-4xl h- rounded-xl border border-dashed border-white/10 flex items-center justify-center text-white/20 text-xs">
          إعلان وسط - middle - سيظهر AdSense هنا
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 p-6 text-center text-white/30 text-xs mt-10">
        <div className="flex justify-center gap-6 mb-2">
          <Link href="/about">عن المنصة</Link>
          <Link href="/privacy">الخصوصية</Link>
          <Link href="/contact">اتصل بنا</Link>
        </div>
        © 2026 BuhouthAI
      </footer>
    </main>
  )
}
