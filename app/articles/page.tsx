import Link from "next/link";
import { articlesData } from "./[slug]/articlesData";

export default function ArticlesPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#05071a] text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">مقالات البحوث الأكاديمية</h1>
        <p className="text-white/60 mb-10">24 دليل شامل لكتابة بحثك باحترافية</p>
        <div className="grid md:grid-cols-2 gap-4">
          {Object.entries(articlesData).map(([slug, article]: any) => (
            <Link key={slug} href={`/articles/${encodeURIComponent(slug)}`} className="p-5 border border-white/10 rounded-xl hover:bg-white/5 transition">
              <h3 className="font-bold text-lg mb-2">{article.title}</h3>
              <p className="text-sm text-white/50 line-clamp-2">{article.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
