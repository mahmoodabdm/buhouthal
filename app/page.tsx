"use client";
import { useState } from "react";

export default function Page() {
  const [query, setQuery] = useState("");

  return (
    <div dir="rtl" style={{fontFamily: "Cairo, sans-serif"}} className="min-h-screen bg-[#fcfcfb] text-slate-900">
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-5 h-[70px] flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="text-[22px] font-black"><span className="text-slate-900">Buhouth</span><span className="text-blue-600">AI</span></span>
            <nav className="hidden md:flex gap-6 text-[14px] font-bold text-slate-600">
              <a href="#home">الرئيسية</a>
              <a href="#privacy">سياسة الخصوصية</a>
              <a href="#contact">اتصل بنا</a>
            </nav>
          </div>
          <div className="flex gap-3">
            <button className="h-10 px-5 rounded-full border border-slate-200 bg-white text-[14px] font-bold">تسجيل الدخول</button>
            <button className="h-10 px-5 rounded-full bg-blue-600 text-white text-[14px] font-bold">ابدأ مجانا</button>
          </div>
        </div>
      </header>

      <section className="max-w-[1280px] mx-auto px-5 pt-16 pb-10 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[12px] font-bold text-blue-600">بحث مباشر في 250,387,000 ورقة علمية</div>
          <h1 className="mt-5 text-[40px] md:text-[52px] font-black leading-[1.1]">ابحث في أكبر مكتبة<br/>أكاديمية مفتوحة</h1>
          <p className="mt-4 text-[16px] leading-8 text-slate-600 max-w-[560px]">لا نحمل البحوث داخل الموقع. نتصل مباشرة بـ OpenAlex API - نفس قاعدة بيانات Microsoft Academic</p>
          
          <div className="mt-8 max-w-[640px]">
            <div className="flex items-center bg-white rounded-[18px] border border-slate-200 shadow-lg p-2">
              <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="مثال: artificial intelligence in education..." className="flex-1 h-[50px] px-4 outline-none text-[14px]" />
              <button className="h-[50px] px-7 rounded-[12px] bg-blue-600 text-white font-bold">بحث</button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-full bg-white border text-[12px]">quantum computing</span>
              <span className="px-3 py-1.5 rounded-full bg-white border text-[12px]">machine learning</span>
              <span className="px-3 py-1.5 rounded-full bg-white border text-[12px]">CRISPR</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-[320px] h-[320px] bg-gradient-to-br from-blue-50 to-violet-50 rounded-[40px] border border-slate-200 flex flex-col items-center justify-center shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]">
            <div className="text-[80px]">🤖</div>
            <div className="mt-4 px-4 py-2 rounded-full bg-slate-900 text-white text-[12px] font-bold">مرحبا! أنا مساعدك البحثي</div>
            <div className="mt-3 text-[13px] text-slate-500">روبوت ترحيب 3D</div>
            <div className="mt-4 flex gap-2">
              <div className="w-10 h-10 rounded-xl bg-white border flex items-center justify-center">📚</div>
              <div className="w-10 h-10 rounded-xl bg-white border flex items-center justify-center">🎓</div>
              <div className="w-10 h-10 rounded-xl bg-white border flex items-center justify-center">📄</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-5 pb-10">
        <div className="rounded-[20px] bg-white border shadow-sm grid grid-cols-2 md:grid-cols-4 divide-x divide-x-reverse">
          <div className="p-6"><div className="font-black text-[20px]">250M+</div><div className="text-[13px] font-bold">بحث علمي</div></div>
          <div className="p-6"><div className="font-black text-[20px]">50K+</div><div className="text-[13px] font-bold">جامعة</div></div>
          <div className="p-6"><div className="font-black text-[20px]">PDF مباشر</div><div className="text-[13px] font-bold">تحميل فوري</div></div>
          <div className="p-6"><div className="font-black text-[20px]">مجاني 100%</div><div className="text-[13px] font-bold">للجميع</div></div>
        </div>
      </div>

      <section id="privacy" className="max-w-[1280px] mx-auto px-5 pb-16">
        <div className="rounded-[20px] bg-slate-900 text-white p-8">
          <h3 className="font-black text-[16px] mb-2">🔒 سياسة الخصوصية</h3>
          <p className="text-[13px] leading-7 text-white/70">نحن لا نجمع بيانات شخصية ولا نبيعها. البحث يتم مباشرة عبر OpenAlex. لا كوكيز تتبع.</p>
        </div>
      </section>

      <footer id="contact" className="bg-[#0f172a] text-white py-12">
        <div className="max-w-[1280px] mx-auto px-5 flex justify-between">
          <div>
            <div className="font-black text-[18px]">BuhouthAI</div>
            <p className="mt-2 text-[12px] text-white/60">محرك بحث أكاديمي عربي - 250 مليون ورقة علمية</p>
            <p className="mt-3 text-[12px]">📧 abdmazn55@gmail.com</p>
          </div>
          <div className="text-[12px] text-white/60">
            <div>سياسة الخصوصية</div>
            <div>اتصل بنا</div>
            <div>شروط الاستخدام</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
