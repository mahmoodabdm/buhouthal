'use client';
import { useState } from 'react';
import LoginModal from './LoginModal';

export default function AuthButton() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<string | null>(null);

  if (user) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm bg-slate-100 px-3 py-1.5 rounded-full">{user}</span>
        <button onClick={() => setUser(null)} className="text-xs text-slate-500">خروج</button>
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-5 py-2.5 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-black transition"
      >
        تسجيل الدخول
      </button>
      {open && <LoginModal onClose={() => setOpen(false)} onLogin={(email) => { setUser(email); setOpen(false); }} />}
    </>
  );
}
