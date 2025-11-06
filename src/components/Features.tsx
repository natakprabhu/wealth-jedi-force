import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Calculator, TrendingUp, Shield } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Jedi Knowledge Hub",
    description: "Learn about mutual funds, insurance, tax saving, and master financial strategies.",
  },
  {
    icon: Calculator,
    title: "Smart Calculators",
    description: "Calculate SIP, PPF, Tax, Retirement, and more with precision tools.",
  },
  {
    icon: TrendingUp,
    title: "Top Financial Plans",
    description: "Curated lists like Top 10 Child Plans and Top 10 PPF Options.",
  },
  {
    icon: Shield,
    title: "Premium Tools",
    description: "Unlock advanced insights and personalized recommendations.",
  },
];

const Features = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-gold">Force Powers</span> at Your Command
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to achieve financial mastery
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:glow-neon transition-all duration-300 hover:-translate-y-2 bg-card border-border"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
