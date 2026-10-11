// المسار: app/articles/[id]/page.tsx
export default function Page({ params }: { params: { id: string } }) {
  return (
    <div style={{ padding: 40, background: '#070b1f', color: 'white', minHeight: '100vh' }}>
      <h1>المقالة تعمل: {params.id}</h1>
      <p>اذا شفت هاي الصفحة معناها الـ 404 انحل</p>
    </div>
  )
}
