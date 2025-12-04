// src/components/Hero.tsx
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-[var(--background)] py-12 sm:py-20">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug tracking-tight mb-6">
          <span>Professional </span>
          <span className="font-caveat gradient-text mr-2">Medical</span>
          <span className="font-caveat gradient-text mr-4">Clinical</span>
          <span> Posters</span>
        </h1>

        {/* Subheading */}
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          High-resolution, clinically accurate anatomical and educational posters for clinics,
          hospitals and teaching institutes — designed for medical professionals, not children.
        </p>

        {/* Primary CTA */}
        <div className="mt-8 flex justify-center">
          <a
            href="#catalog"
            className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm sm:text-base font-semibold text-primary-foreground shadow-md hover:shadow-lg transition-shadow"
          >
            Browse catalogue
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
