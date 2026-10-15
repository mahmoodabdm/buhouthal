import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

export default function Header(){
  const [email,setEmail]=useState('');
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) return;

    // جيب الجلسة الحالية
    supabase.auth.getSession().then(({data}: any)=>{
      setUserEmail(data.session?.user?.email || null)
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event: any, session: any) => {
      setUserEmail(session?.user?.email || null);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <header>
      {/* باقي الكود مالك يبقى نفسه */}
    </header>
  )
}
