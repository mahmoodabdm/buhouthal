import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://buhouthal.vercel.app'

  const articles = [
    'تكون-الثقاف-النفسي',
    'الصحة-النفسية-الاكاديمية',
    'الضغط-النفسي-القلب',
    'التوتر-النفسي-وكورونا',
    'تحويل-Word-الى-PDF',
    'انشاء-السيرة-الذاتية-APA',
    'اهمية-البحث-الوثائقي',
    'خاتمة-بحث-الاستطلاع',
    'كيف-اعرف-مقبول-بحثي',
    'كيف-اكتب-بحث-الدكتوراه',
    'كيف-اتحقق-من-صدق-بحثي',
    'كيفية-كتابة-بحث-التخرج',
    'منهجية-البحث-المسحي-والوصفي',
    'مقدمة-بحث-الاستقصاء',
    'مفهوم-التوثيق-الجامعي',
  ]

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...articles.map((slug) => ({
      url: `${baseUrl}/articles/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ]
}
