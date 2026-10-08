import { MetadataRoute } from 'next';
import { articlesData } from './articles/[slug]/articlesData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://buhouthal.vercel.app';
  
  const articles = Object.keys(articlesData).map((slug) => ({
    url: `${baseUrl}/articles/${encodeURIComponent(slug)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    { 
      url: baseUrl, 
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    { 
      url: `${baseUrl}/articles`, 
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    ...articles,
  ];
}
