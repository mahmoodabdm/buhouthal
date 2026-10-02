import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  try {
    // نسمح لكل طلبات الـ Preview تمر بدون فحص
    // حتى لا يوقع الموقع اثناء التجربة
    return NextResponse.next()
  } catch (error) {
    console.error('Middleware error:', error)
    // حتى لو صار خطأ، لا توقع الصفحة
    return NextResponse.next()
  }
}

// نطبق الميدلوير على كل الصفحات ما عدا الملفات الثابتة
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
