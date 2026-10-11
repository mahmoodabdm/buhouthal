import Link from "next/link";
import { articlesData } from "./articles/articlesData";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a2a] text-white" dir="rtl">
      {/* Header */}
      <header className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <div className="flex gap-2">
          <Link href="/login" className="bg-white/10 px-4 py-1.5 rounded-full text-sm">دخول</Link>
          <Link href="/articles" className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-bold flex gap-1">المقالات 📄</Link>
        </div>
        <div className="font-black text-xl">BuhouthAI</div>
      </header>

      {/* Top Ad */}
      <div className="max-w-3xl mx-auto mt-4 p-4 border border-dashed border-white/20 rounded-xl text-center text-xs text-white/50">
        إعلان أعلى - top<br/>سيظهر AdSense هنا
      </div>

      {/* Hero */}
      <div className="text-center mt-10 px-4">
        <div className="inline-block bg-blue-600/30 border border-blue-400/30 text-xs px-3 py-1 rounded-full mb-6">
          يبحث مباشر في 250,387,000 ورقة
        </div>
        <h1 className="text-4xl md:text-5xl font-black leading-tight">
          ابحث في أكبر<br/>
          <span className="text-cyan-300">مكتبة أكاديمية مفتوحة</span>
        </h1>

        {/* Search Box */}
        <div className="max-w-2xl mx-auto mt-8 relative">
          <input placeholder="ابحث..." className="w-full h-14 rounded-full bg-white text-black pr-6 pl-20 outline-none text-right" />
          <button className="absolute left-1.5 top-1.5 h-11 w-16 bg-[#0a0a2a] text-white rounded-full">بحث</button>
        </div>
        <p className="text-xs text-white/40 mt-3">مدارة بـ OpenAlex API</p>
        <Link href="/guides" className="text-xs text-cyan-300 mt-2 inline-block underline">تصفح 24 دليل للباحث الأكاديمي →</Link>
      </div>

      {/* Middle Ad */}
      <div className="max-w-3xl mx-auto mt-12 p-4 border border-dashed border-white/20 rounded-xl text-center text-xs text-white/50">
        إعلان وسط - middle<br/>سيظهر AdSense هنا
      </div>

      {/* Tools Bar - مثل ما بالصورة */}
      <div className="max-w-5xl mx-auto mt-8 grid grid-cols-3 md:grid-cols-6 gap-3 p-4">
        {[
          {name: "تلخيص", icon: "📄"},
          {name: "فرز المراجع", icon: "🔗"},
          {name: "فحص استلال", icon: "✅"},
          {name: "إعادة صياغة", icon: "✍️"},
          {name: "منظم", icon: "🗂️"},
          {name: "مساعد", icon: "🤖"},
        ].map(t=>(
          <div key={t.name} className="bg-[#1a1a4a] p-4 rounded-xl text-center border border-white/10">
            <div className="text-2xl">{t.icon}</div>
            <div className="text-xs mt-2">{t.name}</div>
            <span className="bg-yellow-400 text-black text- px-2 py-0.5 rounded-full">قريباً</span>
          </div>
        ))}
      </div>

      {/* Articles Preview */}
      <div className="max-w-5xl mx-auto mt-16 p-6">
        <h2 className="font-bold mb-4">أحدث المقالات</h2>
        <div className="grid md:grid-cols-3 gap-3">
          {Object.entries(articlesData).slice(0,6).map(([slug, a])=>(
            <Link key={slug} href={`/articles/${encodeURIComponent(slug)}`} className="bg-white text-black p-4 rounded-xl text-sm leading-6">
              {a.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
