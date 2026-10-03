import Link from "next/link";
export default function AboutPage(){
 return (
  <main className="min-h-screen bg-[#05071a] text-white p-6" dir="rtl">
   <div className="max-w-4xl mx-auto bg-white/[0.06] border border-white/10 p-8 rounded-2xl leading-8 text-gray-300">
    <h1 className="text-3xl font-bold text-white mb-6 text-center">من نحن - BuhouthAI</h1>
    <p><b className="text-white">BuhouthAI - باحث</b> هو أول محرك بحث أكاديمي عراقي مجاني، يبحث مباشرة في أكثر من 250 مليون ورقة بحثية مفتوحة عبر OpenAlex API.</p>
    <p className="mt-4"><b className="text-white">رسالتنا:</b> تسهيل وصول الطلبة والباحثين العرب للمصادر العلمية مجاناً.</p>
    <p className="mt-4"><b className="text-white">ماذا نقدم؟</b> بحث سريع، تحميل PDF، فحص الاستلال، إعادة الصياغة، ملخص البحوث، ومنشئ المراجع.</p>
    <p className="mt-4">للتواصل: abdmazn55@gmail.com</p>
    <Link href="/" className="inline-block mt-6 bg-cyan-500 text-black px-6 py-2 rounded-full font-bold">العودة للرئيسية</Link>
   </div>
  </main>
 )
}
