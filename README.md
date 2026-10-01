# باحث - Bahith - 250 مليون بحث

## كيف ترفع على Vercel بدون فشل؟
1. ارفع هذا المجلد على GitHub
2. ادخل Vercel > Add New Project > اختر الريبو
3. اضغط Deploy - سيعمل مباشرة حتى بدون Supabase
4. (اختياري) لتفعيل تسجيل الدخول:
   - افتح supabase.com وانشئ مشروع مجاني
   - Settings > API > انسخ URL و anon key
   - في Vercel > Settings > Environment Variables اضفهم واعمل Redeploy

## كيف يعمل البحث 250 مليون؟
الموقع لا يحمل البحوث داخله. هو يتصل مباشرة بـ OpenAlex API (250M+ بحث) عبر /api/search
لا يوجد حد للحجم ولا يفشل البناء.

## الهيكل
- app/page.tsx : الرئيسية
- app/api/search/route.ts : وسيط البحث (يعزل الواجهة عن البحث)
- components/SearchBar.tsx : البحث فقط
- components/AuthModal.tsx : الدخول فقط (يعمل حتى بدون env)
- lib/articles.ts : 15 مقالة 700 كلمة
