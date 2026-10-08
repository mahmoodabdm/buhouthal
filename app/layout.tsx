import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "بحوثي - منصة البحوث الأكاديمية",
    template: "%s | بحوثي",
  },
  description: "منصة بحوثي لمساعدتك في كتابة البحوث العلمية وتنظيمها باستخدام الذكاء الاصطناعي، لبحث، اكتب، ونظم مراجعك بسهولة",
  keywords: ["بحوث", "بحث تخرج", "بحوث جامعية", "ذكاء اصطناعي", "BuhouthAI", "ملخص بحوث"],
  metadataBase: new URL('https://buhouthal.vercel.app'),
  openGraph: {
    url: 'https://buhouthal.vercel.app',
    siteName: 'بحوثي',
    locale: 'ar_AR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen bg-[#f8fafc] text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
