"use client"
import { useState } from "react"

export default function SearchBar() {
  const [q, setQ] = useState("")
  return (
    <div className="flex items-center gap-2">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="ابحث في 250 مليون بحث علمي... مثال: artificial intelligence in education"
        className="flex-1 bg-transparent text-sm text-black placeholder:text-gray-400 placeholder:text-center text-center outline-none py-2 px-3"
        dir="rtl"
      />
      <button className="bg-[#05071a] text-white text-xs px-4 py-2 rounded-lg">بحث</button>
    </div>
  )
}
