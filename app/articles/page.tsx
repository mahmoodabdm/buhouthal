import Link from "next/link";
import { articlesData } from "./articlesData";

export default function ArticlesPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-6" dir="rtl">
      <h1 className="text-3xl font-bold mb-6">جميع المقالات</h1>
      <div className="grid gap-4">
        {Object.entries(articlesData).map(([slug, article]) => (
          <Link key={slug} href={`/articles/${encodeURIComponent(slug)}`} className="p-4 bg-white rounded-xl shadow hover:shadow-md block">
            <h2 className="font-bold text-lg">{article.title}</h2>
            <p className="text-gray-600 text-sm mt-2">{article.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
