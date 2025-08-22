"use client";

import Image from "next/image";
import Sectionsvg from "@/components/assets/section.png";
import { motion } from "framer-motion";

export default function Hero() {
  const color = "#666468";
  const speed = 1;
  const strokeWidth = 1;

  const rings = [
    { r: 111.5, opacity: 0.9 },
    { r: 159.5, opacity: 0.8 },
    { r: 207.5, opacity: 0.7 },
    { r: 255.5, opacity: 0.6 },
    { r: 303.5, opacity: 0.5 },
    { r: 351.5, opacity: 0.4 },
    { r: 399.5, opacity: 0.3 },
    { r: 447.5, opacity: 0.2 },
    { r: 495.5, opacity: 0.1 },
    { r: 63.5, opacity: 1 },
  ];

  const dur = (base: number) => base / Math.max(0.25, speed);

  return (
    <section className="relative min-h-[70vh] md:min-h-screen overflow-hidden flex items-center justify-center">
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

        {/* CTA with Visible Ripple Effect */}
        <div className="pt-8 sm:pt-10 flex justify-center w-full">
          <div className="relative inline-block">
      
            {/* Main Button */}
            <motion.a
              href="#contact"
              className="relative inline-flex items-center justify-center rounded-2xl 
                        bg-gradient-to-r from-[#9331F4] via-[#8B2AEF] to-[#7A20D9]
                        shadow-xl shadow-purple-500/40
                        px-5 py-2 md:px-10 md:py-4 
                        text-[clamp(14px,3.2vw,18px)] font-bold text-white tracking-wide
                        hover:scale-105 hover:shadow-purple-500/60 hover:brightness-110 
                        active:brightness-95 
                        transition-all duration-300 ease-out
                        z-10"
              whileTap={{ scale: 0.8 }} // subtle press effect
            >
              Consult Our Experts
            </motion.a>

          </div>
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
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]"
        aria-hidden="true"
      >
        <svg
          width="992"
          height="820"
          viewBox="0 0 992 820"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        >
          {rings.map((ring, index) => (
            <motion.g
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: ring.opacity,
                scale: [1, 1.1, 1]
              }}
              transition={{
                opacity: { duration: 1, delay: index * 0.1 },
                scale: {
                  duration: 3,
                  delay: index * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <circle 
                cx="496" 
                cy="324" 
                r={ring.r} 
                stroke={color}
                strokeWidth={strokeWidth}
              />
            </motion.g>
          ))}
        </svg>
      </div>

    </section>
  );
}
