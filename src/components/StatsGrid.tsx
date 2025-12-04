import React, { useRef, useEffect, useState } from "react";

/** simple hook: detect if element is on screen */
function useOnScreen<T extends Element>(ref: React.RefObject<T>, rootMargin = "0px") {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIntersecting(entry.isIntersecting));
      },
      { root: null, rootMargin, threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, rootMargin]);

  return isIntersecting;
}

/** small AnimatedNumber component (no external deps) */
function AnimatedNumber({
  to,
  duration = 1000,
  decimals = 0,
  suffix = "",
  play = true,
}: {
  to: number;
  duration?: number; // ms
  decimals?: number;
  suffix?: string;
  play?: boolean;
}) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const from = 0;
  const end = to;

  useEffect(() => {
    if (!play) return;
    cancelAnimationFrame(rafRef.current ?? 0);
    startRef.current = null;

    function step(ts: number) {
      if (startRef.current === null) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const t = Math.min(1, elapsed / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      const current = from + (end - from) * eased;
      setValue(current);
      if (t < 1) rafRef.current = requestAnimationFrame(step);
    }
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [to, duration, play]);

  const display =
    decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();

  return <>{display}{suffix}</>;
}

export default function StatsGrid() {
  // the numbers you asked for:
  const cards = [
    { id: "s1", label: "Clinics Served", to: 500, suffix: "+", duration: 1200, decimals: 0 },
    { id: "s2", label: "Poster Designs", to: 50, suffix: "+", duration: 1000, decimals: 0 },
    { id: "s3", label: "Customer Rating", to: 4.9, suffix: " ★", duration: 900, decimals: 1 },
  ];

  const ref = useRef<HTMLDivElement | null>(null);
  const visible = useOnScreen(ref, "0px");

  return (
    <div ref={ref} className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {cards.map((c) => (
          <div
            key={c.id}
            className="bg-white rounded-lg shadow-sm p-8 flex flex-col items-center justify-center text-center"
          >
            <div className="text-3xl md:text-4xl font-extrabold text-primary mb-2">
              <AnimatedNumber
                to={c.to}
                duration={c.duration}
                decimals={c.decimals}
                play={visible}
                suffix={c.suffix}
              />
            </div>
            <div className="text-sm text-muted">{c.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
