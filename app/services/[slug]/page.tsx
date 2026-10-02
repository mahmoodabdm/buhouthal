export default function ServicePage({ params }: { params: { slug: string } }) {
  const titles: any = {
    "writing": "كتابة البحوث",
    "translation": "الترجمة الأكاديمية",
    "plagiarism": "فحص الاستلال",
    "formatting": "تنسيق البحوث",
    "sources": "توفير المصادر",
    "admission": "التقديم والقبولات"
  }
  const title = titles[params.slug] || "خدمة أكاديمية"

  return (
    <main className="min-h-screen bg-[#05071a] text-white p-6">
      <div className="max-w-2xl mx-auto bg-white/[0.06] border border-white/10 p-8 rounded-[24px] mt-20">
        <h1 className="text-3xl font-black mb-2">{title}</h1>
        <p className="text-white/50 text-sm mb-8">اطلب الخدمة داخل الموقع، سيصلك الرد على abdmazn55@gmail.com</p>

        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('تم استلام طلبك! سنتواصل عبر الإيميل'); }}>
          <input required placeholder="اسمك الكامل" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-cyan-400" />
          <input required placeholder="رقم الواتساب" defaultValue="07700700797" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none" />
          <textarea required placeholder="تفاصيل الطلب" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none" />
          <button type="submit" className="w-full bg-white text-[#05071a] font-bold py-3 rounded-xl hover:bg-cyan-300 transition">إرسال الطلب داخلياً</button>
        </form>

        <div className="mt-6 text-[11px] text-white/30 text-center">
          البريد: abdmazn55@gmail.com | واتساب للعرض: 07700700797
        </div>
      </div>
    </main>
  )
}
