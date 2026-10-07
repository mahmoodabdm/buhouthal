import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const articlesDir = path.join(process.cwd(), 'app/articles')
  const slugs = fs.readdirSync(articlesDir).filter(f => 
    fs.statSync(path.join(articlesDir, f)).isDirectory()
  )

  const articleUrls = slugs.map(slug => ({
    url: `https://buhouthal.vercel.app/articles/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: 'https://buhouthal.vercel.app/',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...articleUrls,
  ]
}
