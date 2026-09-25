import { ATTRIBUTION } from "@/lib/assets";

export default function AttributionPage() {
  return (
    <main className="bg-[#0c0c0b] px-5 py-32 md:px-10">
      <div className="mx-auto max-w-[900px]">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#b08d57]">
          Attribution
        </p>
        <h1 className="display-xl mt-4 text-6xl text-[#edeae2]">
          Photography & video
        </h1>
        <p className="mt-6 text-[15px] leading-relaxed text-[#b9b6ad]">
          All architectural photography and video on this fictional practice
          site is sourced from Pexels under the Pexels license. Local copies
          are stored in <code>public/images</code> and{" "}
          <code>public/video</code>.
        </p>
        <ul className="mt-10 divide-y divide-white/10 border-y hairline">
          {ATTRIBUTION.map((a) => (
            <li
              key={a}
              className="py-4 font-mono text-[12px] uppercase tracking-[0.16em] text-[#edeae2]/80"
            >
              {a} — via Pexels
            </li>
          ))}
        </ul>
        <div className="mt-10 font-mono text-[11px] leading-relaxed text-[#8f8e88]">
          <p>Photo IDs: 13752348, 36394726, 36676879, 9962379, 19392859, 12341972, 20004484, 2191622, 33217595, 32613903, 532562, 327482, 31636027, 1381765.</p>
          <p className="mt-2">Video IDs: 38675652 (Alef Morais), 34916337 (Alex Dos Santos) — 720p MP4, muted, playsInline.</p>
        </div>
      </div>
    </main>
  );
}
