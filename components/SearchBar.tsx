"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SearchBar(){
  const [q,setQ]=useState("")
  const router=useRouter()
  const go=()=>{ if(q.trim()) router.push(`/search?q=${encodeURIComponent(q.trim())}`) }

  return(
    <div className="relative w-full">
      <input
        value={q}
        onChange={e=>setQ(e.target.value)}
        onKeyDown={e=>e.key==='Enter'&&go()}
        placeholder="ابحث..."
        className="w-full bg-transparent text-black text- text-center placeholder:text-center placeholder:text-gray-400 outline-none py- pr-2 pl-"
        dir="rtl"
      />
      <button
        onClick={go}
        className="absolute left- top- bottom- bg-[#05071a] text-white text- font-bold px-4 rounded- hover:bg-black transition"
      >
        بحث
      </button>
    </div>
  )
}
