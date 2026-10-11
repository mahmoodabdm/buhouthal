// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://buhouthal.vercel.app'),
  title: {
    default: 'BuhouthAI - أكبر مكتبة أكاديمية مفتوحة',
    template: '%s | BuhouthAI'
  },
  description: 'ابحث في أكثر من 250 مليون ورقة علمية مجانا. مكتبة أكاديمية مفتوحة مع استلال وتلخيص بالذكاء الاصطناعي.',
  verification: {
    google: 'ضع كود التحقق من Search Console هنا',
  },
  openGraph: {
    type: 'website',
    locale: 'ar_IQ',
    url: 'https://buhouthal.vercel.app',
    siteName: 'BuhouthAI',
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-[#0a0e27] text-white antialiased">{children}</body>
    </html>
  )
}
