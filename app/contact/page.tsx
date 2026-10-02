"use client"
import { useState } from "react"

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  return (
    <main className="min-h-screen bg-[#05071a] text-white">
      <div style={{maxWidth:'584px', margin:'0 auto', padding:'40px 20px'}}>
        <h1 className="text- font-bold text-center">اتصل بنا</h1>
        <p className="text- text-white/50 text-center mt-2 mb-8">نرد خلال 24 ساعة - BuhouthAI</p>

        <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 mb-6">
          <div className="space-y-3 text-">
            <div className="flex justify-between">
              <span className="text-white/50">البريد الإلكتروني:</span>
              <span className="font-bold">abdmazn55@gmail.com</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/50">الهاتف / واتساب:</span>
              <span dir="ltr" className="font-bold">+964 770 070 0797</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/50">العنوان:</span>
              <span>بغداد - العراق</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/50">ساعات العمل:</span>
              <span>24/7 - كل أيام الأسبوع</span>
            </div>
          </div>
        </div>

        <form onSubmit={(e)=>{e.preventDefault(); setSent(true)}} className="bg-white rounded-2xl p-5 space-y-4">
          <input required placeholder="اسمك" className="w-full h- px-4 rounded-full border border-gray-200 text-black text- outline-none" />
          <input required type="email" placeholder="بريدك الإلكتروني" className="w-full h- px-4 rounded-full border border-gray-200 text-black text- outline-none" />
          <textarea required placeholder="رسالتك..." rows={4} className="w-full p-4 rounded-2xl border border-gray-200 text-black text- outline-none resize-none"></textarea>
          <button type="submit" className="w-full h- bg-[#05071a] text-white rounded-full font-bold text-">إرسال الرسالة</button>
          {sent && <p className="text-center text-green-600 text-">✅ تم الإرسال! سنتواصل معك على abdmazn55@gmail.com قريباً</p>}
          <p className="text-center text- text-gray-500">أو راسلنا مباشرة على abdmazn55@gmail.com</p>
        </form>

        <div className="mt-6 text-center">
          <a href="/privacy" className="text- text-cyan-300 hover:underline">سياسة الخصوصية</a>
          <span className="mx-2 text-white/20">|</span>
          <a href="/" className="text- text-white/50 hover:underline">الرئيسية</a>
        </div>
      </div>
    </main>
  )
}
