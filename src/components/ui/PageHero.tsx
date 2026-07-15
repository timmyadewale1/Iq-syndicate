"use client";

import Image from "next/image";
import Reveal from "./Reveal";

export default function PageHero({
  image,
  alt,
  eyebrow,
  headline,
  body,
}: {
  image: string;
  alt: string;
  eyebrow?: string;
  headline: string;
  body?: string;
}) {
  return (
    <section className="grain relative flex min-h-[62vh] items-center justify-center overflow-hidden bg-ink md:min-h-[68vh]">
      <div className="absolute inset-0">
        <Image src={image} alt={alt} fill sizes="100vw" priority className="ken-burns object-cover" />
        <div className="hero-scrim absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1320px] flex-col items-center px-6 py-24 text-center md:px-10">
        {eyebrow && (
          <Reveal direction="down">
            <span className="eyebrow-pill mx-auto mb-7">{eyebrow}</span>
          </Reveal>
        )}
        <Reveal delay={100}>
          <h1 className="mx-auto max-w-3xl text-white">{headline}</h1>
        </Reveal>
        {body && (
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-xl text-[16px] leading-7 text-white/88">
              {body}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}