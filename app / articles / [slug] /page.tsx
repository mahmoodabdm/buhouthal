import { notFound } from "next/navigation";
import { articlesData } from "./articlesData";

export function generateStaticParams() {
  return Object.keys(articlesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const decoded = decodeURIComponent(slug);
  const article = articlesData[decoded] || articlesData[slug];
  if (!article) return { title: "غير موجود" };
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/articles/${slug}` }
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const decoded = decodeURIComponent(slug);
  const article = articlesData[decoded] || articlesData[slug];
  if (!article) notFound();

  return (
    <main className="min-h-screen bg-[#05071a] text-white p-6" dir="rtl">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{article.title}</h1>
        <p className="text-white/60 mb-8 text-lg">{article.description}</p>
        <article className="prose prose-invert prose-lg max-w-none whitespace-pre-line leading-9">
          {article.content}
        </article>
      </div>
    </main>
  );
}
