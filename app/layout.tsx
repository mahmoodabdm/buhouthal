import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "بحوثاي - منصة البحوث الأكاديمية",
  description: "منصة بحوثاي لمساعدتك في كتابة البحوث الجامعية والتخرج باستخدام الذكاء الاصطناعي. ابحث، اكتب، ونظم مراجعك بسهولة.",
  keywords: ["بحوث", "بحث تخرج", "بحوث جامعية", "ذكاء اصطناعي", "BuhouthAI"],
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
