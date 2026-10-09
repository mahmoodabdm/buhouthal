import { notFound } from "next/navigation";
import { articlesData } from "./articlesData";
import type { Metadata } from "next";

type Props = { params: { slug: string } };

function formatContent(text: string) {
  // 1. نصلح المحتوى المخربط قبل العرض
  let fixed = text
   .replace(/##/g, '\n##') // كل ## بسطر جديد
   .replace(/\*\*(\d+[\.\-])/g, '\n**$1') // كل رقم ** بسطر جديد
   .replace(/\. \*\*/g, '.\n\n**') // بعد النقطة اذا اكو ** ابدي سطر جديد
   .replace(/:?\*\*/g, ':\n\n**');

  return fixed
   .split('\n')
   .map(line => line.trim())
   .filter(Boolean)
   .map(line => {
      if (line.startsWith('## ')) {
        return `<h2 class="text-2xl font-bold mt-8 mb-4 text-slate-800">${line.replace('## ', '')}</h2>`;
      }
      if (line.startsWith('# ')) {
        return `<h1 class="text-3xl font-bold my-4">${line.replace('# ', '')}</h1>`;
      }
      let formatted = line.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900">$1</strong>');
      return `<p class="my-4 leading-8 text-slate-700">${formatted}</p>`;
    })
   .join('');
}

export default function Page({ params }: Props) {
  const decodedSlug = decodeURIComponent(params.slug);
  const article = articlesData[decodedSlug];
  if (!article) return notFound();

  const htmlContent = formatContent(article.content);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white mt-6 rounded-xl shadow-sm" dir="rtl">
      <h1 className="text-3xl font-bold mb-3 leading-10">{article.title}</h1>
      <p className="text-gray-500 mb-8 leading-7">{article.description}</p>
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const decodedSlug = decodeURIComponent(params.slug);
  const article = articlesData[decodedSlug];
  if (!article) return {};
  return { title: article.title, description: article.description };
}

export function generateStaticParams() {
  return Object.keys(articlesData).map((slug) => ({ slug }));
}
