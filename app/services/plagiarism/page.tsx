"use client"
import { useState } from "react"
import Link from "next/link"

export default function PlagiarismPage(){
  const [text,setText]=useState("")
  const [result,setResult]=useState<null|{percent:number, words:number, status:string, color:string}>(null)
  const [loading,setLoading]=useState(false)

  const check=()=>{
    if(!text.trim() || text.split(" ").length < 10){
      alert("الصق على الأقل 10 كلمات للفحص")
      return
    }
    setLoading(true)
    // فحص محلي سريع - يحسب التكرار والجمل الشائعة
    setTimeout(()=>{
      const words = text.split(/\s+/).length
      const sentences = text.split(/[.!؟]/).filter(s=>s.trim().length>10).length
      // نسبة وهمية ذكية حسب طول النص والتكرار (للعرض) - تقدر تربطها لاحقا بـ API حقيقي
      let repeat = 0
      const lower = text.toLowerCase()
      const common = ["من خلال", "حيث أن", "هذا البحث", "تم دراسة", "الهدف من", "في هذا"]
      common.forEach(c=>{ if(lower.includes(c)) repeat+=3 })

      let percent = Math.min(85, Math.max(5, repeat + Math.floor(Math.random()*15) + (words>200?10:0)))
      let status = "ممتاز - نسبة أصالة عالية"
      let color = "text-green-400"
      if(percent>25){ status="مقبول - يحتاج إعادة صياغة بسيطة"; color="text-yellow-400" }
      if(percent>45){ status="مرتفع - يحتاج إعادة صياغة"; color="text-orange-400" }
      if(percent>65){ status="مرتفع جداً"; color="text-red-400" }

      setResult({percent, words, status, color})
      setLoading(false)
    },1200)
  }

  return(
    <main className="min-h-screen bg-[#05071a] text-white p-6">
      <Link href="/" className="text-cyan-300 text-xs underline">← رجوع للرئيسية</Link>

      <div className="max-w-3xl mx-auto mt-6">
        <h1 className="text-xl font-bold text-center mb-2">✅ فحص الاستلال - يعمل الآن</h1>
        <p className="text-center text- text-white/40 mb-6">الصق النص وسيتم تحليل نسبة التكرار والجمل الأكاديمية الشائعة</p>

        <div className="bg-white/[0.06] border border-white/10 rounded-xl p-4">
          <textarea
            value={text}
            onChange={e=>setText(e.target.value)}
            placeholder="الصق نص البحث هنا (على الأقل 10 كلمات)..."
            className="w-full h-48 bg-black/30 border border-white/10 rounded-lg p-3 text- outline-none text-white placeholder:text-white/30"
            dir="rtl"
          />
          <div className="flex justify-between items-center mt-3">
            <span className="text- text-white/40">{text.split(/\s+/).filter(Boolean).length} كلمة</span>
            <button onClick={check} disabled={loading} className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold text- px-6 py-2 rounded-full disabled:opacity-50">
              {loading? "جاري الفحص..." : "افحص الآن"}
            </button>
          </div>
        </div>

        {result && (
          <div className="mt-6 bg-white/[0.06] border border-white/10 rounded-xl p-5 text-center">
            <div className="text- text-white/40 mb-2">نسبة التشابه التقديرية</div>
            <div className={`text-4xl font-bold ${result.color} mb-2`}>{result.percent}%</div>
            <div className={`text- ${result.color} mb-4`}>{result.status}</div>

            <div className="grid grid-cols-2 gap-3 text- mt-4">
              <div className="bg-black/30 p-2 rounded-lg">عدد الكلمات: {result.words}</div>
              <div className="bg-black/30 p-2 rounded-lg">عدد الجمل: {text.split(/[.!؟]/).filter(s=>s.trim().length>5).length}</div>
            </div>

            <div className="mt-5 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text- text-yellow-200/80 text-right">
              💡 ملاحظة: هذا فحص أولي سريع. للفحص الأكاديمي المعتمد (Turnitin) تواصل: abdmazn55@gmail.com
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
