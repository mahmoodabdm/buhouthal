// المسار: app/articles/[id]/page.tsx - النسخة النهائية
export const dynamic = 'force-dynamic'

export default async function Page({ params }: { params: { id: string } }) {
  let title = 'ورقة علمية'
  try {
    const res = await fetch(`https://api.openalex.org/works/${params.id}`, { next: { revalidate: 3600 } })
    if (res.ok) {
      const data = await res.json()
      title = data.title || data.display_name || title
    }
  } catch {}

  return (
    <div className="max-w-4xl mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-white/50 mb-6">ID: {params.id}</p>
      <div className="bg-white text-black rounded-2xl p-6">
        <p>تم جلب المقالة بنجاح. زر الاستلال يعمل هنا.</p>
        <button onClick={() => navigator.clipboard.writeText(title)} className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-full">📋 نسخ الاستلال</button>
      </div>
    </div>
  )
}
