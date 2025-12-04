import React, { useEffect, useRef, useState } from "react";

/* Detect when element is visible on screen */
const useOnScreen = (ref: React.RefObject<Element>, threshold = 0.25) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return visible;
};

/* Count-up animation component */
const AnimatedNumber: React.FC<{
  to: number;
  duration?: number;
  decimals?: number;
  play: boolean;
  suffix?: string;
}> = ({ to, duration = 1200, decimals = 0, play, suffix = "" }) => {
  const [value, setValue] = useState(0);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!play) return;

    let frame = 0;
    const start = 0;
    const diff = to - start;

    const step = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const progress = Math.min((timestamp - startRef.current) / duration, 1);

      // ease-out cubic animation
      const ease = 1 - Math.pow(1 - progress, 3);
      setValue(start + diff * ease);

      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [to, duration, play]);

  const display =
    decimals > 0
      ? value.toFixed(decimals)
      : Math.floor(value).toLocaleString("en-IN");

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
};

/* Stats data */
const cards = [
  { id: "s1", label: "Clinics Served", to: 520, suffix: "+", duration: 1200, decimals: 0 },
  { id: "s2", label: "Poster Designs", to: 68, suffix: "+", duration: 1000, decimals: 0 },
  { id: "s3", label: "Orders Delivered", to: 12400, suffix: "+", duration: 1400, decimals: 0 },
  { id: "s4", label: "Customer Rating", to: 4.9, suffix: " / 5", duration: 900, decimals: 1 },
];

export default function StatsGrid() {
  const ref = useRef<HTMLDivElement | null>(null);
  const visible = useOnScreen(ref, 0.25);

  return (
    <div ref={ref} className="container mx-auto px-4 py-6">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {cards.map((c) => (
          <div
            key={c.id}
            className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center justify-center text-center"
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
