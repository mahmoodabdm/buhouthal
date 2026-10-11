import Link from "next/link";
import { articlesData } from "./articles/articlesData";

export default function Home() {
  const latest = Object.entries(articlesData).slice(0, 6);
  return (
    <div className="max-w-4xl mx-auto p-6 mt-6" dir="rtl">
      <h1 className="text-3xl font-bold mb-6">بحوثي - منصة الباحث العراقي</h1>
      <div className="grid gap-4">
        {latest.map(([slug, a]) => (
          <Link key={slug} href={`/articles/${encodeURIComponent(slug)}`} className="p-4 bg-white rounded-xl shadow block">
            <h2 className="font-bold">{a.title}</h2>
          </Link>
        ))}
      </div>
      <Link href="/articles" className="mt-6 inline-block text-blue-600">عرض كل المقالات</Link>
    </div>
  );
}
