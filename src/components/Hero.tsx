import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Galactic Background */}
      <div className="absolute inset-0 bg-galactic">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon/10 via-transparent to-transparent"></div>
      </div>

      {/* Floating Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-foreground/30 rounded-full animate-glow-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 animate-slide-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Master the <span className="text-gradient-gold">Force</span> of
          <br />
          Financial Freedom
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Learn to control your wealth with Jedi wisdom — explore plans, calculate goals, and grow your financial power.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="glow-gold group">
            Start Your Journey
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="glow-neon border-secondary text-secondary hover:bg-secondary/10">
            <Calculator className="mr-2" />
            Explore Calculators
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
