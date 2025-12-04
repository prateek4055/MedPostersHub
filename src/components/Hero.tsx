// src/components/Hero.tsx
import React from "react";
import "../index.css"; // ensures Caveat and gradient styles apply

export default function Hero() {
  return (
    <section className="bg-background pt-20 pb-14">
      <div className="container mx-auto px-4 text-center">
        
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug tracking-tight mb-6 mx-auto max-w-3xl">
  Professional{" "}
  <span className="font-caveat gradient-text whitespace-nowrap mr-6">
    Medical & Clinical
  </span>
  Posters
</h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
          High-resolution, clinically accurate anatomical and educational posters 
          for clinics, hospitals and teaching institutes — designed for medical professionals, not children.
        </p>

        <div className="flex justify-center">
          <a
            href="#catalog"
            className="inline-block bg-primary text-primary-foreground px-7 py-3 rounded-lg font-medium shadow hover:opacity-95"
          >
            Browse catalogue
          </a>
        </div>
      </div>
    </section>
  );
}
