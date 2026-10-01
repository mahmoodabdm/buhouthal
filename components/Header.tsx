'use client';
import { useState, useEffect } from 'react';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
export default function Header(){
  const [email,setEmail]=useState(''); const [userEmail,setUserEmail]=useState<string|null>(null); const [open,setOpen]=useState(false); const [loading,setLoading]=useState(false);
  useEffect(()=>{ if(!isSupabaseConfigured) return; supabase.auth.getSession().then(({data})=>setUserEmail(data.session?.user?.email||null)); const {data:listener}=supabase.auth.onAuthStateChange((_,s)=>setUserEmail(s?.user?.email||null)); return ()=>listener.subscription.unsubscribe(); },[]);
  const login=async(e:any)=>{ e.preventDefault(); if(!isSupabaseConfigured){ alert('وضع Demo: أضف مفاتيح Supabase لتفعيل الدخول'); return;} setLoading(true); const {error}=await supabase.auth.signInWithOtp({email, options:{emailRedirectTo: window.location.origin}}); setLoading(false); if(error) alert(error.message); else { alert('تم إرسال رابط الدخول إلى ايميلك'); setOpen(false);} };
  const logout=async()=>{ if(!isSupabaseConfigured) return; await supabase.auth.signOut(); };
  return (<header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="/" className="flex items-center gap-2"><div className="w-8 h-8 bg-blue-600 rounded-lg grid place-items-center text-white font-bold">ب</div><span className="font-bold text-slate-900">باحث</span><span className="text-xs bg-slate-100 px-2 py-0.5 rounded-full">250M</span></a>
      <nav className="hidden md:flex gap-6 text-sm text-slate-600"><a href="/" className="hover:text-slate-900">الرئيسية</a><a href="/articles" className="hover:text-slate-900">المقالات</a></nav>
      <div className="flex items-center gap-2">
        {userEmail? <><span className="text-xs text-slate-600 hidden sm:block">{userEmail}</span><button onClick={logout} className="text-sm px-3 py-1.5 border rounded-lg">خروج</button></> :
        <button onClick={()=>setOpen(true)} className="text-sm px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-black">دخول الأعضاء</button>}
      </div>
    </div>
    {open && <div className="fixed inset-0 z-[60] bg-black/30 grid place-items-center p-4" onClick={()=>setOpen(false)}><form onSubmit={login} onClick={e=>e.stopPropagation()} className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl"><h3 className="font-bold mb-1">دخول الأعضاء</h3><p className="text-xs text-slate-500 mb-4">{isSupabaseConfigured?'سنرسل لك رابط دخول سحري':'وضع Demo - أضف Supabase لتفعيله'}</p><input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="ايميلك الجامعي" className="w-full border rounded-lg px-3 py-2 text-sm mb-3"/><button disabled={loading} className="w-full bg-blue-600 text-white rounded-lg py-2 text-sm">{loading?'جاري الإرسال...':'أرسل رابط الدخول'}</button><button type="button" onClick={()=>setOpen(false)} className="w-full mt-2 text-xs text-slate-500">إغلاق</button></form></div>}
  </header>);
}
