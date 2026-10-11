// المسار: middleware.ts - في الجذر
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  // اذا ماكو مفاتيح سوبربيز لا تكرش الموقع
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return NextResponse.next()
  }
  try {
    const { createServerClient } = await import('@supabase/ssr')
    const res = NextResponse.next()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      {
        cookies: {
          get: (name) => req.cookies.get(name)?.value,
          set: (name, value, options) => { res.cookies.set({ name, value, ...options }) },
          remove: (name, options) => { res.cookies.set({ name, value: '', ...options }) },
        },
      }
    )
    await supabase.auth.getSession()
    return res
  } catch {
    return NextResponse.next()
  }
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)'],
}
