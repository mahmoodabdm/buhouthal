import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://buhouthal.vercel.app'
  const articlesPath = path.join(process.cwd(), 'app', 'articles')

  // اقرا كل المجلدات الحقيقية ما عدا [slug] و page.tsx
  const slugs = fs.readdirSync(articlesPath).filter((name) => {
    const fullPath = path.join(articlesPath, name)
    return (
      fs.statSync(fullPath).isDirectory() &&
      name!== '[slug]'
    )
  })

  const articleUrls = slugs.map((slug) => ({
    url: `${baseUrl}/articles/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
   ...articleUrls,
  ]
}
