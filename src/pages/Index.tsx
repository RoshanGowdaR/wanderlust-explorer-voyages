import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DestinationGrid from "@/components/destinations/DestinationGrid";
import ShipShowcase from "@/components/ships/ShipShowcase";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <DestinationGrid />
        <ShipShowcase />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
