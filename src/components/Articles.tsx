import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  {
    title: "The Power of Compound Interest",
    preview: "Discover how small investments today can grow into substantial wealth over time...",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=250&fit=crop",
    locked: false,
  },
  {
    title: "Top 10 Tax Saving Strategies",
    preview: "Master the art of legal tax optimization and keep more of your hard-earned wealth...",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=250&fit=crop",
    locked: true,
  },
  {
    title: "Building Your Emergency Fund",
    preview: "Learn the Jedi way of financial defense - always be prepared for the unexpected...",
    image: "https://images.unsplash.com/photo-1633158829875-e5316a358c6f?w=400&h=250&fit=crop",
    locked: false,
  },
];

const Articles = () => {
  return (
    <section id="articles" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-gold">Ancient Wisdom</span> for Modern Times
          </h2>
          <p className="text-xl text-muted-foreground">
            Curated financial knowledge to guide your journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="group hover:glow-gold transition-all duration-300 hover:-translate-y-2 bg-card border-border overflow-hidden"
            >
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                {article.locked && (
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center">
                      <Lock className="w-12 h-12 text-primary mx-auto mb-2" />
                      <p className="text-sm text-primary font-semibold">Unlock with Jedi Access</p>
                    </div>
                  </div>
                )}
              </div>
              <CardHeader>
                <h3 className="text-xl font-bold text-foreground">{article.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{article.preview}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full group/btn" asChild>
                  <Link to="/article">
                    Read More
                    <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
