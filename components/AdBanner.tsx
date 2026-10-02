"use client"
export default function AdBanner({ slotId, label }: { slotId: string, label: string }) {
  return (
    <div className="w-full bg-white/[0.04] border border-dashed border-white/15 rounded-lg py-2 px-3 my-2 text-center">
      <p className="text- text-white/25">إعلان - {label} - {slotId}</p>
      <div className="h- mt-1 bg-white/5 rounded-md flex items-center justify-center text- text-white/20">
        AdSense سيظهر هنا
      </div>
    </div>
  )
}
