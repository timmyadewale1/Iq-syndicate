"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { ArrowRight } from "lucide-react";

type Direction = "up" | "down" | "left" | "right";

export default function PinnedStack({
  children,
  directions,
}: {
  children: React.ReactNode[];
  directions: Direction[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        children.forEach((_, i) => {
          window.setTimeout(() => setVisibleCount((current) => Math.max(current, i + 1)), i * 180);
        });
        observer.disconnect();
      },
      { threshold: 0.22 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [children]);

  return (
    <div ref={ref} className="space-y-4 md:space-y-0 md:flex md:flex-nowrap md:items-stretch md:gap-4">
      {children.map((child, i) => (
        <div key={i} className="relative flex-1">
          <Reveal direction={directions[i] ?? "up"} delay={i * 70}>
            <div
              className={`transition-all duration-700 ease-out ${
                i < visibleCount ? "opacity-100 translate-y-0" : "opacity-0"
              }`}
            >
              {child}
            </div>
          </Reveal>
          {i < children.length - 1 ? (
            <ArrowRight className="absolute -right-2 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-gold-dark md:block" />
          ) : null}
        </div>
      ))}
    </div>
  );
}
