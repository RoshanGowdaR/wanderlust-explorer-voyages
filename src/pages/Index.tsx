import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DestinationGrid from "@/components/destinations/DestinationGrid";
import ShipShowcase from "@/components/ships/ShipShowcase";
import About from "@/components/About";
import ExpeditionGrid from "@/components/expeditions/ExpeditionGrid";
import Testimonials from "@/components/Testimonials";
import BookingCTA from "@/components/BookingCTA";
import Contact from "@/components/Contact";
import Newsletter from "@/components/Newsletter";
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
        <Testimonials />
        <BookingCTA />
        <About />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
