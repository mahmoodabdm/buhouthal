// المسار: app/sitemap.ts
import { MetadataRoute } from 'next'
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://buhouthal.vercel.app'
  const staticRoutes = ['', '/about', '/contact', '/privacy', '/search', '/articles', '/services/plagiarism'].map(r => ({
    url: `${baseUrl}${r}`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: r === ''? 1 : 0.8
  }))
  try {
    const res = await fetch('https://api.openalex.org/works?per-page=50&sort=publication_date:desc', { next: { revalidate: 3600 } })
    const data = await res.json()
    const dynamic = data.results.map((w:any) => ({
      url: `${baseUrl}/articles/${w.id.split('/').pop()}`,
      lastModified: new Date(w.publication_date || new Date()),
      changeFrequency: 'weekly' as const, priority: 0.6
    }))
    return [...staticRoutes,...dynamic]
  } catch { return staticRoutes }
}
