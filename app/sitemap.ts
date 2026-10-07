import { MetadataRoute } from 'next';
import { articlesData } from './articles/[slug]/articlesData';
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://buhouthal.com';
  const articles = Object.keys(articlesData).map((slug) => ({
    url: `${baseUrl}/articles/${encodeURIComponent(slug)}`,
    lastModified: new Date(),
  }));
  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/articles`, lastModified: new Date() },
    ...articles,
  ];
}
