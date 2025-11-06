import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calculator, PiggyBank, TrendingUp, Coins } from "lucide-react";

const calculators = [
  {
    icon: Calculator,
    name: "SIP Calculator",
    description: "Calculate your systematic investment returns",
  },
  {
    icon: PiggyBank,
    name: "PPF Calculator",
    description: "Plan your Public Provident Fund investments",
  },
  {
    icon: TrendingUp,
    name: "Retirement Planner",
    description: "Secure your financial future",
  },
  {
    icon: Coins,
    name: "Gold/SGB Returns",
    description: "Track your precious metal investments",
  },
];

const Calculators = () => {
  return (
    <section id="calculators" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-gold">Strategic</span> Financial Tools
          </h2>
          <p className="text-xl text-muted-foreground">
            Precision calculators to plan your wealth journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {calculators.map((calc, index) => {
            const Icon = calc.icon;
            return (
              <Card
                key={index}
                className="group hover:glow-neon transition-all duration-300 hover:-translate-y-2 bg-card border-border cursor-pointer"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors mx-auto">
                    <Icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{calc.name}</h3>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{calc.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Calculators;
