import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://buhouthal.vercel.app'
  const articlesPath = path.join(process.cwd(), 'app', 'articles')
const slugs = fs.readdirSync(articlesPath).filter(name => {    const full = path.join(articlesPath, name)
    return fs.statSync(full).isDirectory() && name!== '[slug]'
  })

  return [
    { url: baseUrl, lastModified: new Date() },
   ...slugs.map(slug => ({
      url: `${baseUrl}/articles/${slug}`,
      lastModified: new Date(),
    }))
  ]
}
