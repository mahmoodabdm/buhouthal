"use client"
import { createClient } from '../lib/supabase/client'

export default function LoginModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null

  const handleGoogleLogin = async () => {
    const supabase = createClient()
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    })
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 w-[90%] max-w-md text-center">
        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">B</div>
        <h2 className="text-xl font-bold mb-2">مرحبا بك في BuhouthAI</h2>
        <p className="text-gray-500 text-sm mb-6">سجل دخولك بالايميل ليصلك دخولك والمنصة</p>
        
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-full hover:bg-gray-50 font-medium"
        >
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" />
          تسجيل الدخول بواسطة Google
        </button>

        <button onClick={onClose} className="mt-4 text-sm text-gray-400">اغلاق</button>
      </div>
    </div>
  )
}
