import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DestinationGrid from "@/components/destinations/DestinationGrid";
import ShipShowcase from "@/components/ships/ShipShowcase";
import About from "@/components/About";
import ExpeditionGrid from "@/components/expeditions/ExpeditionGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <DestinationGrid />
        <ShipShowcase />
        <ExpeditionGrid />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
