import svgUrl from "@/components/assets/Svgurl.svg";

export default function Pricing() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div
        className="relative mx-auto  overflow-hidden rounded-[38.4px] bg-cover bg-center
                   min-h-[320px] sm:min-h-[420px] lg:min-h-[540px]"
        style={{ backgroundImage: `url(./Svgurl.svg)` }}
      >
        <div
          className={[
            "absolute inset-0 pointer-events-none",
            "[--oval-w:200%] [--oval-h:60%]",
            "sm:[--oval-w:180%] sm:[--oval-h:55%]",
            "lg:[--oval-w:190%] lg:[--oval-h:50%]",
          ].join(" ")}
          style={{
            background: `
              radial-gradient(var(--oval-w) var(--oval-h) at 50% 50%,
                rgba(255,255,255,0.60) 0%,
                rgba(255,255,255,0.40) 35%,
                rgba(255,255,255,0.00) 55%
              ),
              radial-gradient(120% 85% at 50% 50%,
                rgba(102,51,238,0.00) 58%,
                rgba(102,51,238,0.55) 82%,
                rgba(102,51,238,0.78) 100%
              )
            `,
          }}
        />


        {/* Content */}
        <div className="relative mx-auto max-w-4xl text-center px-4 sm:px-8 py-16 sm:py-20 lg:py-24">
          <h1
            className="text-3xl sm:text-5xl lg:text-6xl xl:text-[55px] font-extrabold tracking-tight
                       bg-clip-text text-transparent"
            style={{
              background: 'radial-gradient(circle, #000000 0%, #000000 50%, rgba(0,0,0,0.3) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Bring us your challenge.
            <br className="hidden sm:block" />
            We’ll build the solution.
          </h1>


          <div className="mx-auto mt-5 h-[2px] w-56 max-w-full" />

          <p className="mx-auto mt-4 max-w-2xl text-[16px] sm:text-[16px] text-[#545058]">
            Leverage VisioByte’s agile solutions to design, develop, and scale secure digital
            products that meet compliance and win customer confidence.
          </p>

          <div className="mt-7 sm:mt-8">
            <a
              href="#book-call"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 lg:text-[24px] md:text-sm  font-semibold text-white bg-[#9331F4]"
            >
              BOOK A CALL
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
