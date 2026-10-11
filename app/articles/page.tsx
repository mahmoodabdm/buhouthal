// المسار: app/articles/[id]/page.tsx
import Link from 'next/link'

export const dynamic = 'force-dynamic'
export const revalidate = 0

async function getWork(id: string) {
  try {
    const cleanId = id.startsWith('W')? id : `W${id}`
    const res = await fetch(`https://api.openalex.org/works/https://openalex.org/${cleanId}`, {
      cache: 'no-store'
    })
    if (!res.ok) {
      // جرب طريقة ثانية
      const res2 = await fetch(`https://api.openalex.org/works/${cleanId}`, { cache: 'no-store' })
      if (!res2.ok) return null
      return await res2.json()
    }
    return await res.json()
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const work = await getWork(params.id)
  return {
    title: work?.title? `${work.title.slice(0,60)} | BuhouthAI` : 'مقالة أكاديمية | BuhouthAI',
    description: work?.abstract? work.abstract.slice(0,160) : 'ورقة علمية من مكتبة BuhouthAI المفتوحة',
  }
}

export default async function ArticlePage({ params }: { params: { id: string } }) {
  const work = await getWork(params.id)

  // حتى لو فشل الـ API لا ترجع 404 حتى جوجل لا يحذفك
  if (!work) {
    return (
      <div className="max-w-4xl mx-auto p-10 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">جاري تحميل المقالة...</h1>
        <p className="text-white/50 mb-6">المعرف: {params.id}</p>
        <Link href="/" className="px-6 py-2 bg-white text-black rounded-full">العودة للرئيسية</Link>
        <div className="mt-6 p-4 bg-white/5 rounded-xl text-right">
          <p className="text-xs text-white/30">إذا استمرت المشكلة، تأكد أن المعرف يبدأ بـ W مثل W2741809807</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link href="/" className="text-sm text-white/40 mb-6 inline-block">← رجوع</Link>
      <div className="bg-white text-black rounded- p-8 shadow-xl">
        <h1 className="text-3xl font-black leading-snug mb-4">{work.title || work.display_name}</h1>
        <p className="text-sm text-gray-500 mb-6">
          {work.publication_date || ''} • {work.authorships?.slice(0,3).map((a:any)=>a.author.display_name).join(', ')}
        </p>
        <div className="flex gap-3 mb-8">
          <button
            onClick={() => {}}
            id="cite-btn"
            className="px-6 py-2.5 bg-blue-600 text-white rounded-full text-sm font-bold"
          >
            📋 نسخ الاستلال
          </button>
          {work.doi && <a href={work.doi} target="_blank" className="px-6 py-2.5 border rounded-full text-sm">DOI الأصلي</a>}
        </div>
        <div className="prose max-w-none text-gray-800 leading-8 whitespace-pre-wrap">
          {work.abstract || work.abstract_inverted_index? 'الملخص متوفر في المصدر الأصلي' : 'الملخص سيتم جلبه تلقائيا'}
        </div>
      </div>
      <script dangerouslySetInnerHTML={{__html: `
        document.getElementById('cite-btn')?.addEventListener('click', () => {
          navigator.clipboard.writeText(document.querySelector('h1').innerText + ' - ${params.id}');
          alert('تم نسخ الاستلال');
        })
      `}} />
    </div>
  )
}
