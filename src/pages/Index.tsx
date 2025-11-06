import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Articles from "@/components/Articles";
import Calculators from "@/components/Calculators";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Articles />
      <Calculators />
      <Footer />
    </div>
  );
};

export default Index;
