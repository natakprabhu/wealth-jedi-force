import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-8 h-8 text-primary" />
          <span className="text-2xl font-bold text-gradient-gold">WealthJedi</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">
            Home
          </a>
          <a href="#articles" className="text-foreground hover:text-primary transition-colors">
            Articles
          </a>
          <a href="#calculators" className="text-foreground hover:text-primary transition-colors">
            Calculators
          </a>
          <a href="#resources" className="text-foreground hover:text-primary transition-colors">
            Resources
          </a>
        </nav>

        <Button className="glow-gold">
          Join the Order
        </Button>
      </div>
    </header>
  );
};

export default Header;
