import Image from "next/image";
import Imagemain from "@/components/assets/Image.png";

export default function Solutions() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Top-align columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start">
          
          {/* Left: Image card */}
          <div className="w-full self-start">
            <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 mx-auto max-w-[640px]">
              <Image
                src={Imagemain}
                alt="VisioByte studio"
                className="
                  w-full h-auto
                  aspect-[4/3] object-cover
                  hover:scale-105 transition-all duration-300 ease-out
                  md:aspect-auto md:w-[620px] md:h-[560px]
                "
              />
            </div>
          </div>

          {/* Right: Copy */}
          <div className="w-full self-start">
            <p className="text-[14px] sm:text-[15px] md:text-[16px] font-semibold tracking-wide text-[#9331F4]">
              Driven by vision. Built for impact.
            </p>

            <h2 className="mt-3 sm:mt-4 text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[1.2] font-semibold text-[#181D27]">
              We’re only just getting started on our journey
            </h2>

            <p className="mt-4 sm:mt-5 text-[16px] sm:text-[18px] md:text-[20px] leading-7 text-[#535862] max-w-prose">
              At VisioByte, we are a future-forward design and technology studio,
              blending creativity, code, and strategy to deliver high-impact
              digital products that drive growth, enhance user experiences, and
              empower bold business transformations.
            </p>

            {/* Stats */}
            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
              <div>
                <div className="text-[44px] sm:text-[52px] md:text-[60px] font-semibold text-[#9331F4]">
                  98%
                </div>
                <div className="mt-2 text-[16px] sm:text-[17px] md:text-[18px] font-medium text-[#181D27]">
                  Client Retention Rate
                </div>
                <p className="mt-1 text-[14px] sm:text-[15px] md:text-[16px] leading-6 text-[#717680]">
                  Reflecting our commitment to quality, partnership, and
                  long-term value.
                </p>
              </div>

              <div className="sm:pl-0 md:pl-8">
                <div className="text-[44px] sm:text-[52px] md:text-[60px] font-semibold text-[#9331F4]">
                  10+
                </div>
                <div className="mt-2 text-[16px] sm:text-[17px] md:text-[18px] font-medium text-[#181D27]">
                  Global Clients
                </div>
                <p className="mt-1 text-[14px] sm:text-[15px] md:text-[16px] leading-6 text-[#717680]">
                  From startups to enterprises, we power businesses of every scale.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
