"use client"
export default function AdBanner({ slotId, label }: { slotId: string, label: string }) {
  return (
    <div className="w-full bg-white/[0.04] border border-dashed border-white/20 rounded-xl py-3 px-4 my-3 text-center">
      <p className="text- text-white/30 tracking-widest">إعلان - {label} - {slotId}</p>
      <div className="h- mt-2 bg-white/5 rounded-lg flex items-center justify-center text- text-white/20">
        AdSense سيظهر هنا بعد الموافقة
      </div>
    </div>
  )
}
