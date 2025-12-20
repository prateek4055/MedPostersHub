import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryFilter from "@/components/CategoryFilter";
import PosterCard from "@/components/PosterCard";
import PosterDetail from "@/components/PosterDetail";
import Footer from "@/components/Footer";
import { posters, Poster } from "@/data/posters";
import { MessageCircle } from "lucide-react";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPoster, setSelectedPoster] = useState<Poster | null>(null);

  const filteredPosters = selectedCategory === "All"
    ? posters
    : posters.filter(poster => poster.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        
        <section id="catalog" className="py-16 md:py-24">
          <div className="container">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Our Collection
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Explore our curated selection of anatomical and educational posters, 
                designed for medical professionals and students.
              </p>
            </div>

            <div className="mb-10">
              <CategoryFilter
                selected={selectedCategory}
                onSelect={setSelectedCategory}
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredPosters.map((poster, index) => (
                <PosterCard
                  key={poster.id}
                  poster={poster}
                  index={index}
                  onClick={() => setSelectedPoster(poster)}
                />
              ))}
            </div>
          </div>
        </section>
<section id="combos" className="bg-card/60 py-16">
  <div className="container">
    <h2 className="text-center text-3xl font-bold tracking-tight text-foreground">
      Combo Offers
    </h2>
    <p className="mt-3 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
      Save more when you order curated poster sets for clinics and students. 
      All combos can be customised – just message us on WhatsApp.
    </p>

    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {/* Clinic Starter Pack */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h3 className="text-lg font-semibold">Clinic Starter Pack (5 Posters)</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Perfect for new physiotherapy or ortho clinics.
        </p>
        <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
          <li>Human Muscular System</li>
          <li>Human Skeletal System</li>
          <li>Spinal Column & Vertebrae</li>
          <li>Knee Joint Anatomy</li>
          <li>Trigger Points & Pain Referral</li>
        </ul>
        <p className="mt-4 text-sm text-muted-foreground line-through">
          MRP: ₹1,995
        </p>
        <p className="text-xl font-bold text-primary">Combo Price: ₹1,499</p>
        <button
          className="mt-4 w-full rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white hover:bg-green-600 transition"
          onClick={() =>
            window.open(
              `https://wa.me/919460970342?text=${encodeURIComponent(
                "Hi, I want to order the Clinic Starter Pack (5 posters)."
              )}`,
              "_blank"
            )
          }
        >
          Order Combo on WhatsApp
        </button>
      </div>

      {/* Student Revision Pack */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h3 className="text-lg font-semibold">BPT / MPT Revision Pack (4 Posters)</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Designed for exam revision and hostel rooms.
        </p>
        <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
          <li>Human Muscular System</li>
          <li>Human Skeletal System</li>
          <li>Nervous System Overview</li>
          <li>Stretching Exercises Guide</li>
        </ul>
        <p className="mt-4 text-sm text-muted-foreground line-through">
          MRP: ₹1,596
        </p>
        <p className="text-xl font-bold text-primary">Combo Price: ₹1,199</p>
        <button
          className="mt-4 w-full rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white hover:bg-green-600 transition"
          onClick={() =>
            window.open(
              `https://wa.me/919460970342?text=${encodeURIComponent(
                "Hi, I want to order the BPT / MPT Revision Pack (4 posters)."
              )}`,
              "_blank"
            )
          }
        >
          Order Combo on WhatsApp
        </button>
      </div>

      {/* Neuro & Spine Pack */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h3 className="text-lg font-semibold">Neuro & Spine Rehab Pack (3 Posters)</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Ideal for neuro physio OPDs and rehab centres.
        </p>
        <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
          <li>Spinal Column & Vertebrae</li>
          <li>Nervous System Overview</li>
          <li>Trigger Points & Pain Referral</li>
        </ul>
        <p className="mt-4 text-sm text-muted-foreground line-through">
          MRP: ₹1,197
        </p>
        <p className="text-xl font-bold text-primary">Combo Price: ₹899</p>
        <button
          className="mt-4 w-full rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white hover:bg-green-600 transition"
          onClick={() =>
            window.open(
              `https://wa.me/919460970342?text=${encodeURIComponent(
                "Hi, I want to order the Neuro & Spine Rehab Pack (3 posters)."
              )}`,
              "_blank"
            )
          }
        >
          Order Combo on WhatsApp
        </button>
        <p className="mt-2 text-xs text-muted-foreground">
          You can mix & match posters in any combo. Just mention it in your WhatsApp message.
        </p>
      </div>
    </div>
  </div>
</section>
<section id="delivery" className="bg-muted/40 py-16">
  <div className="container">
    <h2 className="text-center text-3xl font-bold tracking-tight text-foreground">
      Delivery & Packaging
    </h2>
    <p className="mt-3 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
      We make sure your posters reach safely and on time, anywhere in India.
    </p>

    <div className="mt-10 grid gap-6 md:grid-cols-3">
      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h3 className="text-lg font-semibold">Pan-India Delivery</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Posters are shipped across India using reliable courier partners.
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h3 className="text-lg font-semibold">Safe Packaging</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          All posters are rolled (not folded) and packed in hard cardboard tubes to prevent damage.
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h3 className="text-lg font-semibold">Dispatch & Payment</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Orders are usually dispatched within 2–4 working days after payment. 
          Payments accepted via UPI / QR / bank transfer. For bulk or clinic setups, contact us for special support.
        </p>
      </div>
    </div>

    <p className="mt-8 text-center text-xs text-muted-foreground">
      For urgent orders or bulk clinic setups, message us directly on WhatsApp at{" "}
      <span className="font-semibold">+91 94609 70342</span>.
    </p>
  </div>
</section>
        <section id="about" className="bg-secondary/30 py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                About MedPosters
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                We specialize in creating high-quality educational posters for the medical 
                and healthcare industry. Each poster is meticulously designed with accurate 
                anatomical details and printed on premium materials to ensure durability 
                and vibrant colors.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-xl bg-card p-6 shadow-card">
                  <div className="mb-3 text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Clinics Served</div>
                </div>
                <div className="rounded-xl bg-card p-6 shadow-card">
                  <div className="mb-3 text-3xl font-bold text-primary">20+</div>
                  <div className="text-sm text-muted-foreground">Poster Designs</div>
                </div>
                <div className="rounded-xl bg-card p-6 shadow-card">
                  <div className="mb-3 text-3xl font-bold text-primary">4.9★</div>
                  <div className="text-sm text-muted-foreground">Customer Rating</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {selectedPoster && (
        <PosterDetail
          poster={selectedPoster}
          onClose={() => setSelectedPoster(null)}
        />
      )}

        {/* Floating WhatsApp button */}
        <button
          className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 md:px-5 md:py-3"
          onClick={() =>
            window.open(
              "https://wa.me/919460970342?text=Hi,%20I%20want%20to%20order%20medical%20posters%20from%20MedPostersHub.",
              "_blank"
            )
          }
        >
          <MessageCircle className="h-5 w-5" />
          <span className="hidden sm:inline">Order on WhatsApp</span>
        </button>
    </div>
  );
};

export default Index;
