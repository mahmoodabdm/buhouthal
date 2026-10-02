export default function Contact() {
  return (
    <main className="min-h-screen bg-[#05071a] text-white px-6 py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w- h- bg-blue-600/20 rounded-full blur- -z-10" />
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-black mb-10">اتصل بنا</h1>
        <div className="bg-white/[0.06] border border-white/10 backdrop-blur p-8 rounded- space-y-6">
          <div>
            <p className="text-white/40 text-sm">البريد الإلكتروني</p>
            <p className="text-xl font-bold mt-2 text-cyan-300">abdmazn55@gmail.com</p>
          </div>
          <div className="h-px bg-white/10" />
          <div>
            <p className="text-white/40 text-sm">واتساب (عرض فقط)</p>
            <p className="text-2xl font-black mt-2 tracking-widest">07700700797</p>
            <p className="text- text-white/30 mt-2">الرقم للعرض فقط - التواصل عبر الخدمات في الصفحة الرئيسية</p>
          </div>
        </div>
      </div>
    </main>
  )
}
