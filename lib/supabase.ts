// المسار: lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const isSupabaseConfigured = !!url && !!key

// حتى لو ماكو مفاتيح لا تكرش الصفحة
export const supabase = isSupabaseConfigured
  ? createClient(url!, key!)
  : (null as any)
