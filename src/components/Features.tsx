


import React, { JSX } from "react";
import Image from "next/image";
import Services from "@/components/assets/Services.svg";
import { SvgImages } from "./SVG/SvgImages";

type IconKind = "code" | "pen";

interface ServiceCardProps {
  title: string;
  icon: IconKind;
  items: string[];
}

export default function Features(): JSX.Element {
  const dev = [
    "AI Development",
    "Web Development",
    "Software Development",
    "CMS Development",
    "Mobile Development",
  ];

  const design = [
    "UI/ UX Design",
    "Web Design",
    "Mobile App Design",
    "Landing Page Design",
    "Branding Design",
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background artwork — responsive fill */}
      <Image
        src={Services}
        alt=""
        aria-hidden="true"
        priority
        fill
        sizes="100vw"
        className="pointer-events-none absolute inset-0 -z-10 object-cover"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-16 lg:py-24">
        <div className="mx-auto text-center">
          <span className="tracking-[0.2em] font-semibold text-[#9331F4] text-[11px] sm:text-xs md:text-sm">
            SERVICES
          </span>

          <h2 className="mt-3 font-semibold text-gray-900 text-[clamp(20px,4.5vw,36px)] md:text-[clamp(28px,3.4vw,40px)]">
            Service that empowers your business with future clarity
          </h2>

          <p className="mx-auto mt-6 max-w-[640px] text-gray-600 text-[clamp(13px,3.5vw,16px)]">
            Future-ready design and engineering solutions to elevate your product.
            Trusted by innovators to craft seamless, scalable, and standout digital experiences.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          <ServiceCard title="Development" icon="code" items={dev} />
          <ServiceCard title="Design" icon="pen" items={design} />
        </div>

        {/* CTA Bar */}
        <div className="mt-8 md:mt-10 lg:mt-12">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 rounded-2xl bg-white/70 backdrop-blur-md shadow-[0_6px_30px_rgba(146,64,255,0.12)] ring-1 ring-zinc-200 px-5 py-5 sm:px-8 sm:py-6">
              <p className="font-medium text-gray-900 text-[clamp(14px,3.5vw,16px)]">
                In search of cutting-edge design, reliable code, or both? Visiobyte delivers.
              </p>
              <a
                href="#book"
                className="inline-flex items-center justify-center rounded-[12px] bg-[#9331F4]
                           px-6 py-3 text-sm md:text-[15px] font-bold text-white
                           border-2 border-[#e2c9ff] shadow-[inset_0_-2px_0_rgba(0,0,0,0.1)]
                           hover:brightness-105 active:brightness-95 transition"
              >
                BOOK A CALL
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, items }) => {
  return (
    <article className="rounded-3xl bg-white/90 backdrop-blur-md ring-1 ring-zinc-200 shadow-[0_12px_60px_-20px_rgba(146,64,255,0.25)] p-5 sm:p-6 md:p-7">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-bold text-gray-900 text-[clamp(18px,3.8vw,22px)]">{title}</h3>
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#9331F4] text-white">
          {icon === "code" ? (
            <SvgImages imageName="CodeIcon" />
          ) : (
            <SvgImages imageName="PenIcon" />
          )}
        </span>
      </div>

      {/* List */}
      <ul className="mt-3 sm:mt-4">
        {items.map((label, i) => (
          <li
            key={label}
            className={[
              "group flex items-center justify-between gap-3 sm:gap-4 py-3 sm:py-4",
              i !== items.length - 1 ? "border-b border-zinc-200/70" : "",
            ].join(" ")}
          >
            <a
              href="#"
              className="text-gray-900 transition group-hover:text-gray-900 text-[clamp(14px,3.6vw,16px)]"
            >
              {label}
            </a>

            {/* Arrow icon (kept a consistent size) */}
            <span className="shrink-0">
              <SvgImages imageName="ArrowNE" />
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
};
