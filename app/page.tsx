import { notFound } from "next/navigation";
import { articlesData } from "./articlesData";
import type { Metadata } from "next";

type Props = { params: { slug: string } };

function findArticle(slug: string) {
  const decoded = decodeURIComponent(slug).trim();
  if (articlesData[decoded]) return articlesData[decoded];
  const lower = decoded.toLowerCase();
  const k = Object.keys(articlesData).find(x => x.toLowerCase() === lower);
  return k? articlesData[k] : null;
}

function formatContent(text: string) {
  let fixed = text.replace(/##/g, '\n##');
  return fixed.split('\n').map(l=>l.trim()).filter(Boolean).map(line=>{
    if(line.startsWith('## ')) return `<h2 class="text-2xl font-bold mt-8 mb-4">${line.replace('## ','')}</h2>`;
    return `<p class="my-4 leading-8">${line.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>')}</p>`;
  }).join('');
}

export default function Page({ params }: Props) {
  const article = findArticle(params.slug);
  if (!article) return notFound();
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white mt-6 rounded-xl" dir="rtl">
      <h1 className="text-3xl font-bold mb-6">{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: formatContent(article.content) }} />
    </div>
  );
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const a = findArticle(params.slug);
  return a? { title: a.title, description: a.description } : {};
}
export function generateStaticParams() {
  return Object.keys(articlesData).map(slug => ({ slug }));
}
