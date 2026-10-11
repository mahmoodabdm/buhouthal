import Link from "next/link";
import { articlesData } from "./articlesData";

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="max-w-5xl mx-auto p-6 md:p-10">
        <h1 className="text-4xl font-black mb-2 text-gray-900">جميع المقالات</h1>
        <p className="text-gray-500 mb-8">دليل الباحث العراقي 2026</p>
        <div className="grid md:grid-cols-2 gap-5">
          {Object.entries(articlesData).map(([slug, article]) => (
            <Link key={slug} href={`/articles/${encodeURIComponent(slug)}`} className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-lg hover:-translate-y-1 transition-all">
              <h2 className="font-bold text-lg text-gray-900 leading-7">{article.title}</h2>
              <p className="text-gray-600 text-sm mt-3 leading-6 line-clamp-2">{article.description}</p>
              <span className="text-blue-600 text-sm font-bold mt-4 inline-block">اقرأ المقال ←</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
