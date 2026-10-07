export default function ArticlesPage() {
  const articles = [
    "احصاء-طلبة-في-البحوث",
    "ادوات-الطالب-الجامعي",
    "اعادة-الصياغة-الاكاديمية",
    "افضل-محركات-البحث-الاكاديمي",
    "الفرق-بين-الاستبيان-والمقابلة",
    "الفرق-بين-البحث-والرسالة",
    "تحويل-PDF-الى-Word",
    "توثيق-المراجع-APA",
    "خطوات-كتابة-بحث-التخرج"
  ];

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-8">المقالات</h1>
      <ul className="space-y-3">
        {articles.map(slug => (
          <li key={slug}>
            <a href={`/articles/${slug}`} className="text-blue-600 hover:underline">
              {slug.replace(/-/g, ' ')}
            </a>
          </li>
        ))}
      </ul>
    </main>
  )
}
