// src/components/Hero.tsx
import React from "react";
import { posters } from "../data/posters";

const Hero: React.FC = () => {
  // duplicate posters so the strip looks continuous
  const strip = posters.concat(posters);

  return (
    <section className="bg-[var(--background)] py-16 sm:py-20">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug tracking-tight">
          <span>Professional </span>
          <span className="font-caveat gradient-text mr-2">Medical</span>
          <span className="font-caveat gradient-text mr-2">Clinical</span>
          <span>Posters</span>
        </h1>

        {/* Subheading */}
        <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-muted-foreground">
          High-resolution, clinically accurate anatomical and educational posters for clinics,
          hospitals and teaching institutes — designed for medical professionals, not children.
        </p>

        {/* 🔥 Camera-roll slideshow inside hero */}
<div className="mt-8 overflow-hidden">
  <div className="flex gap-4 animate-scroll whitespace-nowrap">
    {strip.map((poster, index) => (
      <img
        key={index}
        src={poster.image}
        alt={poster.title}
        className="h-24 sm:h-28 md:h-32 w-auto rounded-lg shadow-md object-cover"
      />
    ))}
  </div>
</div>

        {/* CTA button */}
        <div className="mt-8 flex justify-center">
          <a
            href="#catalog"
            className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm sm:text-base font-medium text-primary-foreground shadow-md hover:shadow-lg transition-shadow"
          >
            Browse catalogue
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
