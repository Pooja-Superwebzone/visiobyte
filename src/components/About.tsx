import Image from "next/image";
import Image5 from "@/components/assets/image5.png";
import Image245 from "@/components/assets/Image245.png";
import Ipade from "@/components/assets/ipad.png";
import image8 from "@/components/assets/image8.png";
import blure from "@/components/assets/blur.png";
import Arrow from "@/components/assets/arrow.png";

export default function About() {
   const cards = [
    {
      kind: "wide",
      title: "Baabus Baby Care",
      desc:
        "Work better together, ship faster, and avoid unauthorized changes with advanced roles and permissions, page branching, and more.",
      tags: ["#Application", "#Website", "#UI/UX"],
      image: Image5,
    },
    {
      kind: "stacked",
      title: "Sync2Clarity",
      desc:
        "Sync2Clarity offers bookkeeping, payroll, remote accounting, and administrative support, including monthly/quarterly bookkeeping and comprehensive payroll.",
      tags: ["#Branding", "#Website"],
      image: Image245,
    },
    {
      kind: "stacked",
      title: "SteelCorr",
      desc:
        "AI app monitors corrosion, hull fouling on ships. ATEX-certified NonSparking tools for safe cold cutting, grinding & surface prep in paint & coating maintenance.",
      tags: ["#Development", "#Web", "#UI/UX"],
      image: Ipade,
    },
    {
      kind: "wideAttached",
      title: "Fyght Club Consulting",
      desc:
        "Work better together, ship faster, and avoid unauthorized changes with advanced roles and permissions, page branching, and more.",
      tags: ["#Branding", "#Website", "#UI/UX"],
      image: image8,
    },
  ]

  return (
    <section className="min-h-screen bg-black text-zinc-200 overflow-hidden px-4 sm:px-6 lg:px-0 py-10 sm:py-12">
      {/* Heading */}
      <div className="relative mx-auto mb-8 sm:mb-11 w-full h-full max-w-7xl">
        <Image
          src={blure}
          alt="Gradient Glow"
          className=" pointer-events-none absolute -top-20 right-0 z-0 blur-lg"
        />
        <h2 className="text-white font-medium text-[28px] sm:text-[40px] md:text-[56px] lg:text-[72px] xl:text-[88px] pt-6 leading-[1.08]">
          Our Craft in Action
        </h2>
        <p className="mt-3 sm:mt-5 text-[16px] sm:text-[20px] md:text-[24px] text-zinc-300/90">
          A showcase of solutions that deliver impact.
        </p>
      </div>

      {/* GRID */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 sm:gap-8 md:gap-10 md:grid-cols-2">
        {cards.map((c, i) => {
          // --- WIDEATTACHED ---
          if (c.kind === "wideAttached") {
            return (
              <article
                key={i}
                className="md:col-span-2 grid grid-cols-1 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 md:grid-cols-2"
              >
                {/* IMAGE (left on md+, top on mobile) */}
                <div className="relative overflow-hidden">
                  <div className="relative aspect-[16/9] md:aspect-auto md:h-[432px]">
                    <Image
                      src={c.image}
                      alt={`${c.title} preview`}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                    />
                  </div>
                </div>

                {/* TEXT (right) */}
                <div className="flex h-full flex-col justify-between p-6 sm:p-8 md:p-10 md:min-h-[432px]">
                  <div>
                    <h3 className="text-[22px] sm:text-[26px] md:text-[32px] font-medium text-white">
                      {c.title}
                    </h3>
                    <p className="mt-3 sm:mt-4 text-[16px] sm:text-[18px] md:text-[20px] font-medium leading-relaxed text-zinc-200/90 whitespace-pre-line">
                      {c.desc}
                    </p>
                  </div>

                  <div className="mt-6 sm:mt-8 flex items-center justify-between">
                    <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 text-[14px] sm:text-[15px] md:text-[16px] tracking-wider text-zinc-400">
                      {c.tags.map((t) => (
                        <span key={t} className="text-[#CC9EFA]">
                          {t}
                        </span>
                      ))}
                    </div>
                    <Image
                      src={Arrow}
                      alt="Open project"
                      className="h-6 w-6 md:h-auto md:w-auto"
                    />
                  </div>
                </div>
              </article>
            );
          }

          // --- WIDE ---
          if (c.kind === "wide") {
            return (
              <article
                key={i}
                className="md:col-span-2 grid grid-cols-1 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 md:grid-cols-2"
              >
                {/* TEXT (left) */}
                <div className="flex h-full flex-col justify-between p-6 sm:p-8 md:p-10 md:min-h-[432px]">
                  <div>
                    <h3 className="text-[22px] sm:text-[26px] md:text-[32px] font-medium text-white">
                      {c.title}
                    </h3>
                    <p className="mt-3 sm:mt-4 text-[16px] sm:text-[18px] md:text-[20px] font-medium leading-relaxed text-zinc-200/90 whitespace-pre-line">
                      {c.desc}
                    </p>
                  </div>

                  <div className="mt-6 sm:mt-8 flex items-center justify-between">
                    <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 text-[14px] sm:text-[15px] md:text-[16px] tracking-wider text-zinc-400">
                      {c.tags.map((t) => (
                        <span key={t} className="text-[#CC9EFA]">
                          {t}
                        </span>
                      ))}
                    </div>
                    <Image
                      src={Arrow}
                      alt="Open project"
                      className="h-6 w-6 md:h-auto md:w-auto"
                    />
                  </div>
                </div>

                {/* IMAGE (right) */}
                <div className="relative overflow-hidden">
                  <div className="relative aspect-[16/9] md:aspect-auto md:h-[432px]">
                    <Image
                      src={c.image}
                      alt={`${c.title} preview`}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </article>
            );
          }

          // --- STACKED ---
          if (c.kind === "stacked") {
            return (
              <article
                key={i}
                className="rounded-2xl border border-white/10 bg-zinc-900/60"
              >
                {/* TEXT (top) */}
                <div className="px-6 sm:px-8 md:px-10 pt-6 sm:pt-8 md:pt-10 w-full h-auto md:h-[284px] flex flex-col justify-between">
                  <div>
                    <h3 className="text-[22px] sm:text-[26px] md:text-[32px] font-medium text-white">
                      {c.title}
                    </h3>
                    <p className="mt-2 sm:mt-3 text-[16px] sm:text-[18px] md:text-[20px] font-medium leading-relaxed text-zinc-300/90">
                      {c.desc}
                    </p>
                  </div>

                  {/* Tags at bottom of this div */}
                  <div className="mt-5 md:mt-auto flex items-center justify-between">
                    <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 text-[14px] sm:text-[15px] md:text-[16px] tracking-wider text-zinc-400">
                      {c.tags.map((t) => (
                        <span key={t} className="text-[#CC9EFA]">
                          {t}
                        </span>
                      ))}
                    </div>
                    <Image
                      src={Arrow}
                      alt="Open project"
                      className="h-6 w-6 md:h-auto md:w-auto"
                    />
                  </div>
                </div>

                {/* IMAGE (bottom) */}
                <div className="mt-4 sm:mt-5 md:mt-6 aspect-[16/9] relative overflow-hidden rounded-b-2xl">
                  <Image
                    src={c.image}
                    alt={`${c.title} screenshot`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>
              </article>
            );
          }

          return null;
        })}
      </div>
    </section>
  );
}
