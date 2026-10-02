export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#05071a] text-white">
      <div style={{maxWidth:'800px', margin:'0 auto', padding:'40px 20px'}}>
        <h1 className="text- font-bold mb-2">سياسة الخصوصية - BuhouthAI</h1>
        <p className="text- text-white/40 mb-8">آخر تحديث: 2 أكتوبر 2026</p>

        <div className="space-y-6 text- leading-7 text-white/80">
          <section>
            <h2 className="text- font-bold text-white mb-2">1. من نحن</h2>
            <p>BuhouthAI هو محرك بحث أكاديمي يبحث مباشرة في أكثر من 250 مليون ورقة علمية عبر واجهة OpenAlex API المفتوحة. موقعنا buhouthai.com يهدف لمساعدة الطلاب والباحثين العرب.</p>
            <p className="mt-2">للتواصل: <b>abdmazn55@gmail.com</b> - <b dir="ltr">+964 770 070 0797</b></p>
          </section>

          <section>
            <h2 className="text- font-bold text-white mb-2">2. البيانات التي نجمعها</h2>
            <ul className="list-disc pr-5 space-y-1">
              <li><b>استعلامات البحث:</b> الكلمات التي تبحث عنها (مثل "ذكاء اصطناعي") نرسلها مباشرة إلى OpenAlex ولا نخزنها باسمك.</li>
              <li><b>ملفات تعريف الارتباط (Cookies):</b> نستخدم كوكيز Google AdSense و Google Analytics لتحسين الإعلانات ومعرفة عدد الزوار.</li>
              <li><b>بيانات تقنية:</b> نوع المتصفح، البلد، الصفحة التي زرتها - عبر Vercel Analytics.</li>
            </ul>
          </section>

          <section>
            <h2 className="text- font-bold text-white mb-2">3. كيف نستخدم البيانات</h2>
            <p>نستخدم البيانات فقط لـ: تحسين نتائج البحث، عرض إعلانات ذات صلة عبر Google AdSense، وحساب عدد الزوار. لا نبيع بياناتك لأي طرف ثالث.</p>
          </section>

          <section>
            <h2 className="text- font-bold text-white mb-2">4. إعلانات Google AdSense</h2>
            <p>نستخدم Google AdSense لعرض الإعلانات. جوجل قد تستخدم كوكيز DART لعرض إعلانات بناءً على زياراتك السابقة. يمكنك تعطيل الكوكيز من إعدادات المتصفح. للمزيد: https://policies.google.com/technologies/ads</p>
          </section>

          <section>
            <h2 className="text- font-bold text-white mb-2">5. حقوقك</h2>
            <p>يحق لك طلب حذف أي بيانات تخصك، أو إيقاف تتبع الكوكيز. راسلنا على abdmazn55@gmail.com وسنرد خلال 48 ساعة.</p>
          </section>

          <section>
            <h2 className="text- font-bold text-white mb-2">6. الاتصال بنا</h2>
            <p>البريد: abdmazn55@gmail.com</p>
            <p>الهاتف / واتساب: <span dir="ltr">+964 770 070 0797</span></p>
            <p>العراق - بغداد</p>
          </section>
        </div>

        <div className="mt-10 text-center">
          <a href="/" className="bg-white text-black px-6 py-2 rounded-full text- font-bold">العودة للرئيسية</a>
        </div>
      </div>
    </main>
  )
}
