"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SearchBar() {
  const [q, setQ] = useState("")
  const router = useRouter()

  const doSearch = () => {
    if (!q.trim()) return
    router.push(`/search?q=${encodeURIComponent(q.trim())}`)
  }

  return (
    <div className="flex items-center gap-1.5">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter') doSearch() }}
        placeholder="ابحث... مثال: artificial intelligence"
        className="flex-1 bg-transparent text- text-black placeholder:text-gray-400 placeholder:text-center text-center outline-none py-1.5 px-2"
        dir="rtl"
      />
      <button
        onClick={doSearch}
        className="bg-[#05071a] text-white text- px-4 py-2 rounded-md hover:bg-black transition-colors"
      >
        بحث
      </button>
    </div>
  )
}
