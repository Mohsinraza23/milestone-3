import Hero from "./components/hero";
import WelcomeSection from "./components/welcome";
import ValuesSection from "./components/value";
import ProductSlider from "./components/ProductSilder";
import Collections from "./components/Collection";
import SaleBanner from "./components/SaleBanner";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('/1perfume.png?height=1080&width=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Transparent Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 min-h-screen text-white">
        <div className="container mx-auto px-4 py-8">
          <Hero />
          <WelcomeSection />
          <ValuesSection />
          <ProductSlider />
          <Collections />
          <SaleBanner />
        </div>
      </div>
    </main>
  );
}
