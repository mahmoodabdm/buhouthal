// المسار: components/Header.tsx - انسخ هذا كامل واحذف القديم
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

export default function Header(){
  const [email,setEmail]=useState('');
  const [userEmail,setUserEmail]=useState<string|null>(null);
  const [open,setOpen]=useState(false);
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    if(!isSupabaseConfigured) return;

    // جيب الجلسة الحالية
    supabase.auth.getSession().then(({data})=>{
      setUserEmail(data.session?.user?.email || null)
    });

    // اسمع لتغيير تسجيل الدخول
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      setUserEmail(session?.user?.email || null);
    });

    return () => {
      data.subscription.unsubscribe();
    };
  },[]);

  const login=async(e: React.FormEvent)=>{
    e.preventDefault();
    if(!isSupabaseConfigured){
      alert('وضع Demo: أضف مفاتيح Supabase في Vercel > Settings > Environment Variables');
      return;
    }
    setLoading(true);
    const {error}=await supabase.auth.signInWithOtp({
      email,
      options:{emailRedirectTo: `${window.location.origin}/auth/callback`}
    });
    setLoading(false);
    if(error) alert(error.message);
    else {
      alert('تم إرسال رابط الدخول إلى ايميلك - افحص Spam');
      setOpen(false);
    }
  };

  const logout=async()=>{
    if(!isSupabaseConfigured) return;
    await supabase.auth.signOut();
    setUserEmail(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#070b1f]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h- flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg grid place-items-center text-white font-black">ب</div>
          <span className="font-bold text-white text-">BuhouthAI</span>
          <span className="text- bg-white/10 border border-white/10 px-2 py-0.5 rounded-full text-white/60">250M</span>
        </Link>
        <nav className="hidden md:flex gap-7 text-sm text-white/60">
          <Link href="/" className="hover:text-white transition">الرئيسية</Link>
          <Link href="/articles" className="hover:text-white transition">المقالات</Link>
          <Link href="/services/plagiarism" className="hover:text-white transition">كشف الاستلال</Link>
        </nav>
        <div className="flex items-center gap-2">
          {userEmail? <>
            <span className="text-xs text-white/50 hidden sm:block max-w- truncate">{userEmail}</span>
            <button onClick={logout} className="text-sm px-3 py-1.5 border border-white/10 rounded-full text-white/70 hover:bg-white/10">خروج</button>
          </> :
          <button onClick={()=>setOpen(true)} className="text-sm px-5 py-2 bg-white text-black rounded-full font-bold hover:bg-gray-100 transition">دخول الأعضاء</button>}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm grid place-items-center p-4" onClick={()=>setOpen(false)}>
          <form onSubmit={login} onClick={e=>e.stopPropagation()} className="bg-[#0f1432] border border-white/10 rounded- p-6 w-full max-w-sm shadow-2xl text-right">
            <h3 className="font-bold mb-1 text-white">دخول الأعضاء</h3>
            <p className="text-xs text-white/40 mb-4">{isSupabaseConfigured?'سنرسل لك رابط دخول سحري':'وضع Demo - أضف Supabase لتفعيله'}</p>
            <input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="ايميلك الجامعي" className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm mb-3 text-white outline-none focus:border-blue-500"/>
            <button disabled={loading} className="w-full bg-blue-600 text-white rounded-xl py-2.5 text-sm font-bold hover:bg-blue-700 disabled:opacity-50">{loading?'جاري الإرسال...':'أرسل رابط الدخول'}</button>
            <button type="button" onClick={()=>setOpen(false)} className="w-full mt-3 text-xs text-white/30">إغلاق</button>
          </form>
        </div>
      )}
    </header>
  );
}
