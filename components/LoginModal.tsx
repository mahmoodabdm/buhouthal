'use client';
import { useState } from 'react';

export default function LoginModal({ onClose, onLogin }: { onClose: () => void, onLogin: (email: string) => void }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) return alert('اكتب ايميل صحيح');

    setLoading(true);
    // هنا تربطها مع Supabase / NextAuth / API مالك بعدين
    await new Promise(r => setTimeout(r, 1200)); // محاكاة ارسال
    setLoading(false);
    setSent(true);
    setTimeout(() => onLogin(email), 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose}></div>

      <div className="relative bg-white w-full max-w- rounded- p-8 shadow-2xl">
        <button onClick={onClose} className="absolute left-4 top-4 w-8 h-8 grid place-items-center rounded-full bg-slate-100">✕</button>

        <div className="text-center">
          <div className="w-12 h-12 bg-blue-600 rounded-2xl grid place-items-center mx-auto text-white font-bold text-xl">B</div>
          <h2 className="font-bold text- mt-4">مرحبا بك في BuhouthAI</h2>
          <p className="text-sm text-slate-500 mt-2">سجل دخولك بالايميل لحفظ بحوثك والمفضلة</p>
        </div>

        {!sent? (
          <form onSubmit={handleLogin} className="mt-8 space-y-4">
            <div>
              <label className="text- font-medium text-slate-700">البريد الإلكتروني</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@university.edu"
                className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-slate-900 text-white rounded-xl text-sm font-medium hover:bg-black disabled:opacity-50 transition"
            >
              {loading? 'جاري الارسال...' : 'ارسال رابط الدخول'}
            </button>

            <p className="text- text-center text-slate-400 leading-relaxed">
              بالتسجيل انت توافق على شروط الاستخدام وسياسة الخصوصية. سنرسل لك رابط سحري بدون باسورد.
            </p>
          </form>
        ) : (
          <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-4 text-center">
            <p className="text-sm font-medium text-green-800">تم ارسال الرابط!</p>
            <p className="text-xs text-green-600 mt-1">تفقد ايميلك {email}</p>
          </div>
        )}
      </div>
    </div>
  );
}
