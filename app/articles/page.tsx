import Link from "next/link";
import fs from "fs";
import path from "path";

export default function ArticlesPage() {
  const articlesPath = path.join(process.cwd(), "app/articles");
  const folders = fs.readdirSync(articlesPath).filter((name) => {
    const fullPath = path.join(articlesPath, name);
    return fs.statSync(fullPath).isDirectory() && name!== "[slug]";
  });

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">جميع المقالات</h1>
      <div className="grid gap-4">
        {folders.map((slug) => (
          <Link
            key={slug}
            href={`/articles/${slug}`}
            className="p-4 border rounded-lg hover:bg-gray-50"
          >
            {slug.replace(/-/g, " ")}
          </Link>
        ))}
      </div>
    </div>
  );
}
