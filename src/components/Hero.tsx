
import Image from "next/image";
import circles from "@/components/assets/circles.svg";
import Sectionsvg from "@/components/assets/section.svg";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
      <div className="relative z-20 mx-auto px-4 pt-16 pb-10 sm:pt-24 sm:pb-12 lg:pt-28">
        <h1 className="text-center font-inter font-bold leading-tight text-black
                       text-[clamp(22px,6vw,56px)]">
          Driving Next-Gen Innovation with{" "}
          <br className="hidden sm:block" />
          Intelligent Digital Transformation
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-center font-semibold text-[#8E8E93]
                      text-[clamp(12px,3.6vw,19px)]">
          Unlock the power of AI, cutting-edge apps, and transformative web
          solutions tailored for your success.
        </p>

        {/* CTA */}
        <div className="pt-8 sm:pt-10 flex justify-center w-full">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-2xl bg-[#9331F4]
                       px-5 py-2 md:px-10 md:py-4 text-[clamp(14px,3.2vw,18px)] font-bold text-white
                       ring-6 ring-[#E3CCFF] hover:brightness-110 active:brightness-95 transition"
          >
            Consult Our Experts
          </a>
        </div>

        <div className="py-6 sm:py-8">
          <p className="text-center text-[#7C3AED] font-medium mb-4 sm:mb-6
                        text-[clamp(14px,3.8vw,24px)]">
            to bring your vision to life.
          </p>
        </div>

        {/* foreground illustration (scales to viewport) */}
        <Image
          src={Sectionsvg}
          alt="Illustration"
          priority
          className="mx-auto grayscale contrast-125 w-full max-w-[92vw] sm:max-w-[920px] md:max-w-[1100px] lg:max-w-[1280px]"
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 900px, 1200px"
        />
      </div>

      {/* background circles – fill container, scale by viewport */}
      <Image
        src={circles}
        alt=""
        aria-hidden="true"
        priority
        fill
        sizes="100vw"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]"
        style={{ objectFit: "contain" }}
      />
    </section>
  );
}
