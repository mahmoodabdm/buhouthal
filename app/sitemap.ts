import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://buhouthal.vercel.app'
  
  const articles = [
    'فحص-الاستلال-والانتحال',
    'كيفية-كتابة-بحث-التخرج',
    'كيف-تختار-عنوان-البحث',
    'منهجية-البحث-العلمي',
    'كيف-تكتب-الاطار-النظري',
    'توثيق-المراجع-APA',
    'افضل-محركات-البحث-الاكاديمي',
    'كيف-تتجنب-الاستلال',
    'اعادة-الصياغة-الاكاديمية',
    'ملخص-البحوث-بالذكاء-الاصطناعي',
    'الخاتمة-والتوصيات',
    'خطة-البحث',
    'الاستبيان',
    'مقدمة-البحث',
  ]

  const staticPages = ['', '/about', '/privacy', '/contact', '/articles']

  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1 : 0.8,
  }))

  const articleUrls = articles.map((slug) => ({
    url: `${baseUrl}/articles/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [...staticUrls, ...articleUrls]
}
