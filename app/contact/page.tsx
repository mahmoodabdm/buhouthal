export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a1931] text-white p-6" dir="rtl">
      <div className="max-w-2xl mx-auto bg-[#112240] p-8 rounded-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">اتصل بنا</h1>
        <p className="text-gray-300 text-center mb-8">نحن سعداء بتواصلك، نرد خلال 24 ساعة</p>
        
        <div className="space-y-4 bg-[#0a1931] p-6 rounded-xl">
          <p>📧 البريد: <span className="text-white font-mono">abdmazn55@gmail.com</span></p>
          <p>📱 هاتف / واتساب: <span className="text-white font-mono">077007707977</span></p>
          <p>🌍 الموقع: buhouthal.vercel.app</p>
        </div>

        <form className="mt-8 space-y-4">
          <input type="text" placeholder="اسمك" className="w-full p-3 rounded-lg bg-[#0a1931] border border-gray-700" />
          <input type="email" placeholder="بريدك الإلكتروني" className="w-full p-3 rounded-lg bg-[#0a1931] border border-gray-700" />
          <textarea placeholder="رسالتك..." rows={4} className="w-full p-3 rounded-lg bg-[#0a1931] border border-gray-700"></textarea>
          <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg font-bold">إرسال</button>
        </form>
      </div>
    </main>
  );
}
