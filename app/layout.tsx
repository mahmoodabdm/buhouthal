import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const cairo = Cairo({ subsets: ["arabic"], display: "swap" });

export const metadata: Metadata = {
  title: "BuhouthAI - بحوث علمية جاهزة PDF | بحث علمي | باحث",
  description: "محرك بحث علمي مجاني للبحوث العلمية وبحوث جاهزة PDF مع تحميل مباشر. ابحث في أكثر من 250 مليون بحث علمي من OpenAlex وحمل الـ PDF مجانا. أفضل بديل لجوجل سكولار للطلاب والباحثين العرب.",
  keywords: ["بحوث علمية", "بحوث جاهزة PDF", "بحث علمي", "باحث", "بحوث جاهزة", "تحميل بحوث PDF", "موقع بحوث علمية"],
  authors: [{ name: "BuhouthAI" }],
  openGraph: {
    title: "BuhouthAI - بحوث علمية جاهزة PDF | بحث علمي",
    description: "ابحث وحمل أكثر من 250 مليون بحث علمي وبحوث جاهزة PDF مجانا",
    type: "website",
    locale: "ar_IQ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
