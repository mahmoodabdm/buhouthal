import { notFound } from "next/navigation";

const articlesData: Record<string, { title: string; content: string }> = {
  "فحص-الاستلال-والانتحال": {
    title: "فحص الاستلال والانتحال العلمي - الدليل الشامل 2026",
    content: `## ما هو فحص الاستلال؟\nفحص الاستلال هو عملية التأكد من أصالة البحث...\nضع هنا محتوى 800+ كلمة...`,
  },
  "كيفية-كتابة-بحث-التخرج": {
    title: "كيفية كتابة بحث التخرج خطوة بخطوة 2026",
    content: `## مقدمة\nكتابة بحث التخرج تتطلب...`,
  },
  "كيف-تختار-عنوان-البحث": {
    title: "كيف تختار عنوان البحث العلمي باحترافية",
    content: `محتوى المقال...`,
  },
  // كمل باقي الـ 14 مقال بنفس الطريقة
  "منهجية-البحث-العلمي": { title: "منهجية البحث العلمي - شرح كامل للمناهج", content: "..." },
  "كيف-تكتب-الاطار-النظري": { title: "كيف تكتب الإطار النظري والدراسات السابقة", content: "..." },
  "توثيق-المراجع-APA": { title: "توثيق المراجع بنظام APA7 - الدليل الكامل", content: "..." },
  "افضل-محركات-البحث-الاكاديمي": { title: "أفضل 10 محركات بحث أكاديمي مجانية للباحثين", content: "..." },
  "كيف-تتجنب-الاستلال": { title: "كيف تتجنب الاستلال والانتحال في بحثك", content: "..." },
  "اعادة-الصياغة-الاكاديمية": { title: "إعادة الصياغة الأكاديمية باحترافية - دليل الطالب", content: "..." },
  "ملخص-البحوث-بالذكاء-الاصطناعي": { title: "تلخيص البحوث بالذكاء الاصطناعي - أسرع طريقة", content: "..." },
  "كيف-تنشر-بحثك-في-مجلة": { title: "كيف تنشر بحثك في مجلة علمية محكمة", content: "..." },
  "الفرق-بين-البحث-والرسالة": { title: "الفرق بين البحث والرسالة والأطروحة", content: "..." },
  "ادوات-الطالب-الجامعي": { title: "أهم أدوات الطالب الجامعي للبحث والكتابة 2026", content: "..." },
  "تحويل-PDF-الى-Word": { title: "تحويل PDF إلى Word للبحوث - أفضل الطرق المجانية", content: "..." },
};

export function generateStaticParams() {
  return Object.keys(articlesData).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = articlesData[params.slug];
  if (!article) return { title: "غير موجود" };
  return { title: article.title };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articlesData[params.slug];
  if (!article) notFound();

  return (
    <main className="min-h-screen bg-[#05071a] text-white p-6" dir="rtl">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">{article.title}</h1>
        <article className="prose prose-invert prose-lg whitespace-pre-line leading-8">
          {article.content}
        </article>
      </div>
    </main>
  );
}
