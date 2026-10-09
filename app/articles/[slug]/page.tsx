import { notFound } from "next/navigation";
import { articlesData } from "./articlesData";
import type { Metadata } from "next";

type Props = {
  params: { slug: string };
};

// هذا يصلح مشكلة 404 مع الروابط العربية
export default function Page({ params }: Props) {
  const decodedSlug = decodeURIComponent(params.slug);
  const article = articlesData[decodedSlug];

  if (!article) {
    return notFound();
  }

  return (
    <article className="prose prose-slate max-w-3xl mx-auto p-6">
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </article>
  );
}

// هذا يصلح الـ SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const decodedSlug = decodeURIComponent(params.slug);
  const article = articlesData[decodedSlug];

  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
  };
}

// هذا يخلي كل المقالات تتولد في الـ Build
export function generateStaticParams() {
  return Object.keys(articlesData).map((slug) => ({
    slug: slug,
  }));
}
