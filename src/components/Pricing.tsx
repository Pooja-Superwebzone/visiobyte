
export default function Pricing() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div
        className="relative mx-auto  overflow-hidden rounded-[38.4px] bg-cover bg-center
                   min-h-[240px] sm:min-h-[240px] lg:min-h-[240px]"
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
        <div className="flex flex-col relative mx-auto max-w-4xl text-center px-4 sm:px-8 py-12 sm:py-20 lg:py-24 gap-6 sm:gap-10">
  <h1
    className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl xl:text-[55px] font-extrabold tracking-tight
               bg-clip-text text-transparent leading-tight sm:leading-snug -mb-2 sm:-mb-4"
    style={{
      background:
        'radial-gradient(circle, #000000 0%, #000000 50%, rgba(0,0,0,0.3) 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }}
  >
    Bring us your challenge.
    <br className="hidden sm:block" />
    We’ll build the solution.
  </h1>

  <p className="mx-auto max-w-2xl text-sm sm:text-base text-[#545058] leading-relaxed px-2 sm:px-0">
    Leverage VisioByte’s agile solutions to design, develop, and scale secure
    digital products that meet compliance and win customer confidence.
  </p>

  <div>
    <a
      href="#book-call"
      className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base lg:text-[24px] font-semibold text-white bg-[#9331F4] transition-colors duration-200 hover:bg-[#7a28cc]"
    >
      BOOK A CALL
    </a>
  </div>
</div>

      </div>
    </section>
  );
}
