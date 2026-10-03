import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a192f] border-t border-gray-800 mt-10 py-6 text-center" dir="rtl">
      <div className="flex justify-center gap-6 mb-3 text-sm">
        <Link href="/privacy" className="hover:text-white text-gray-300 underline">سياسة الخصوصية</Link>
        <Link href="/contact" className="hover:text-white text-gray-300 underline">اتصل بنا</Link>
        <Link href="/about" className="hover:text-white text-gray-300 underline">من نحن</Link>
      </div>
      <p className="text-xs text-gray-500">
        © 2026 باحث - Bahith | abdmazn55@gmail.com | 07700700797
      </p>
      <p className="text- text-gray-600 mt-1">سيظهر هنا AdSense</p>
    </footer>
  );
}
