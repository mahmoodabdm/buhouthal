// المسار: app/articles/[id]/page.tsx - هذا يمنع الـ 404 نهائيا
export default function Page({ params }: { params: { id: string } }) {
  return (
    <div style={{ padding: 40, color: 'white', background: '#070b1f', minHeight: '100vh' }}>
      <h1 style={{ fontSize: 30, fontWeight: 'bold' }}>المقالة تعمل!</h1>
      <p>المعرف هو: {params.id}</p>
      <a href="/" style={{ color: 'cyan' }}>رجوع للرئيسية</a>
    </div>
  )
}
