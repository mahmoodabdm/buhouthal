import "./globals.css";
import Link from "next/link";
import AdBanner from "../components/AdBanner";

export const metadata = {
  title: "BuhouthAI - باحث علمي جاهز",
  description: "ابحث في 250 مليون ورقة بحثية",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-[#05071a]">
        {children}

        {/* الفوتر الوحيد والصحيح لكل الموقع */}
        <footer className="border-t border-white/10 py-6 text-center px-6 bg-[#05071a]">
          <div className="flex justify-center gap-6 mb-3 text-sm">
            <Link href="/privacy" className="underline hover:text-white text-white/80 font-bold">سياسة الخصوصية</Link>
            <Link href="/contact" className="underline hover:text-white text-white/80 font-bold">اتصل بنا</Link>
            <Link href="/about" className="underline hover:text-white text-white/60">من نحن</Link>
          </div>
          <p className="text-white/40 text-xs">abdmazn55@gmail.com</p>
          <div className="max-w-5xl mx-auto mt-3">
            <AdBanner slotId="footer" label="أسفل" />
          </div>
          <p className="text- text-white/20 mt-3">© 2026 BuhouthAI - جميع الحقوق محفوظة</p>
        </footer>
      </body>
    </html>
  );
}
<Link href="/articles" className="underline text-cyan-300 font-bold">المقالات</Link>
