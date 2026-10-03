
import Link from "next/link";
export const metadata = { title: "مقالات وأدلة أكاديمية | BuhouthAI", description: "17 دليل أكاديمي شامل أكثر من 800 كلمة لكل طالب وباحث" };
const list = [
  { slug: "فحص-الاستلال-والانتحال", title: "فحص الاستلال والانتحال العلمي - الدليل الشامل 2026" },
  { slug: "كيفية-كتابة-بحث-التخرج", title: "كيفية كتابة بحث التخرج خطوة بخطوة 2026" },
  { slug: "كيف-تختار-عنوان-البحث", title: "كيف تختار عنوان البحث العلمي باحترافية" },
  { slug: "منهجية-البحث-العلمي", title: "منهجية البحث العلمي - شرح كامل للمناهج" },
  { slug: "كيف-تكتب-الاطار-النظري", title: "كيف تكتب الإطار النظري والدراسات السابقة" },
  { slug: "توثيق-المراجع-APA", title: "توثيق المراجع بنظام APA7 - الدليل الكامل" },
  { slug: "افضل-محركات-البحث-الاكاديمي", title: "أفضل 10 محركات بحث أكاديمي مجانية للباحثين" },
  { slug: "كيف-تتجنب-الاستلال", title: "كيف تتجنب الاستلال والانتحال في بحثك" },
  { slug: "اعادة-الصياغة-الاكاديمية", title: "إعادة الصياغة الأكاديمية باحترافية - دليل الطالب" },
  { slug: "ملخص-البحوث-بالذكاء-الاصطناعي", title: "تلخيص البحوث بالذكاء الاصطناعي - أسرع طريقة" },
  { slug: "كيف-تنشر-بحثك-في-مجلة", title: "كيف تنشر بحثك في مجلة علمية محكمة" },
  { slug: "الفرق-بين-البحث-والرسالة", title: "الفرق بين البحث والرسالة والأطروحة" },
  { slug: "ادوات-الطالب-الجامعي", title: "أهم أدوات الطالب الجامعي للبحث والكتابة 2026" },
  { slug: "تحويل-PDF-الى-Word", title: "تحويل PDF إلى Word للبحوث - أفضل الطرق المجانية" }
];
export default function ArticlesPage(){
 return (
  <main className="min-h-screen bg-[#05071a] text-white p-6" dir="rtl">
   <div className="max-w-5xl mx-auto">
    <h1 className="text-4xl font-bold text-center mb-8">مكتبة أدلة BuhouthAI - 17 دليل يتصدر جوجل</h1>
    <div className="grid md:grid-cols-2 gap-4">
     {list.map(a=>(
      <Link key={a.slug} href={`/articles/${a.slug}`} className="bg-white/[0.06] border border-white/10 p-5 rounded-xl hover:bg-white/[0.10]">
       <h2 className="font-bold text-white">{a.title}</h2>
       <p className="text-xs text-white/40 mt-2">800+ كلمة | دليل شامل</p>
      </Link>
     ))}
    </div>
   </div>
  </main>
 )
}
