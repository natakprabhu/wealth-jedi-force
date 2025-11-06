import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, TrendingUp, Shield, Target, FileText, Coins } from "lucide-react";

const calculatorCategories = {
  investment: {
    name: "Investment",
    color: "text-[#00FF66]",
    icon: TrendingUp,
    calculators: [
      {
        id: "sip",
        title: "SIP Calculator",
        tagline: "Calculate systematic investment plan returns",
        featured: true,
        usage: 15420,
      },
      {
        id: "fd",
        title: "FD Calculator",
        tagline: "Estimate fixed deposit maturity amount",
        featured: true,
        usage: 12340,
      },
      {
        id: "compound-interest",
        title: "Compound Interest",
        tagline: "See the power of compounding on your wealth",
        featured: false,
        usage: 8900,
      },
    ],
  },
  retirement: {
    name: "Retirement",
    color: "text-[#FFD700]",
    icon: Shield,
    calculators: [
      {
        id: "nps",
        title: "NPS Calculator",
        tagline: "Estimate your pension corpus and tax benefit",
        featured: true,
        usage: 11200,
      },
      {
        id: "pension",
        title: "Pension Calculator",
        tagline: "Plan your retirement income needs",
        featured: false,
        usage: 7800,
      },
      {
        id: "fire",
        title: "FIRE Calculator",
        tagline: "Calculate Financial Independence, Retire Early",
        featured: true,
        usage: 9500,
      },
    ],
  },
  "goal-based": {
    name: "Goal-Based",
    color: "text-blue-400",
    icon: Target,
    calculators: [
      {
        id: "education",
        title: "Child Education",
        tagline: "Plan for your child's education expenses",
        featured: false,
        usage: 6700,
      },
      {
        id: "home",
        title: "Home Purchase",
        tagline: "Calculate how much you need for your dream home",
        featured: false,
        usage: 5900,
      },
      {
        id: "marriage",
        title: "Marriage Planning",
        tagline: "Save smartly for wedding expenses",
        featured: false,
        usage: 4200,
      },
    ],
  },
  "tax-saving": {
    name: "Tax Saving",
    color: "text-orange-400",
    icon: FileText,
    calculators: [
      {
        id: "80c",
        title: "80C Tax Saver",
        tagline: "Maximize your tax deductions under 80C",
        featured: true,
        usage: 13100,
      },
      {
        id: "tax-regime",
        title: "Old vs New Tax Regime",
        tagline: "Compare which tax regime saves you more",
        featured: false,
        usage: 10300,
      },
    ],
  },
  wealth: {
    name: "Wealth Assets",
    color: "text-gray-300",
    icon: Coins,
    calculators: [
      {
        id: "gold",
        title: "Gold/SGB Returns",
        tagline: "Track your precious metal investments",
        featured: false,
        usage: 5600,
      },
      {
        id: "ups",
        title: "UPS Calculator",
        tagline: "Calculate Unified Pension Scheme benefits",
        featured: false,
        usage: 3800,
      },
    ],
  },
};

const Calculators = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  // Get all calculators with their category info
  const allCalculators = Object.entries(calculatorCategories).flatMap(
    ([categoryKey, category]) =>
      category.calculators.map((calc) => ({
        ...calc,
        category: category.name,
        categoryKey,
        categoryColor: category.color,
        icon: category.icon,
      }))
  );

  // Get featured calculators
  const featuredCalculators = allCalculators
    .filter((calc) => calc.featured)
    .sort((a, b) => b.usage - a.usage)
    .slice(0, 5);

  // Filter and sort calculators
  const filteredCalculators = allCalculators
    .filter((calc) => {
      const matchesSearch =
        searchQuery === "" ||
        calc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        calc.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        categoryFilter === "all" || calc.categoryKey === categoryFilter;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "popular") return b.usage - a.usage;
      if (sortBy === "newest") return 0; // Can add date field
      if (sortBy === "recommended") return b.featured ? 1 : -1;
      return 0;
    });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Animated Background */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#021C14] via-[#021C14]/95 to-background" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,215,0,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,255,102,0.1),transparent_50%)]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-gradient-gold">Financial</span> Calculators
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Master your wealth — calculate, compare, and plan like a Jedi
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search calculators..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg bg-card/50 backdrop-blur border-border/50"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="flex-1 bg-card/50 backdrop-blur border-border/50">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="investment">Investment</SelectItem>
                  <SelectItem value="retirement">Retirement</SelectItem>
                  <SelectItem value="goal-based">Goal-Based</SelectItem>
                  <SelectItem value="tax-saving">Tax Saving</SelectItem>
                  <SelectItem value="wealth">Wealth Assets</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="flex-1 bg-card/50 backdrop-blur border-border/50">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Used</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="recommended">Recommended</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Strip */}
      <section className="py-12 border-y border-border/50 bg-card/20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-gradient-gold">
            🔥 Top 5 Most Used Calculators
          </h2>
          <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent">
            {featuredCalculators.map((calc) => {
              const Icon = calc.icon;
              return (
                <Card
                  key={calc.id}
                  className="min-w-[280px] group hover:glow-gold transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-card/50 backdrop-blur"
                  onClick={() => navigate(`/calculators/${calc.id}`)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <Icon className={`w-6 h-6 ${calc.categoryColor}`} />
                      </div>
                      <div>
                        <CardTitle className="text-base">{calc.title}</CardTitle>
                        <p className="text-xs text-muted-foreground">
                          {calc.usage.toLocaleString()} users
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Calculator Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCalculators.map((calc) => {
              const Icon = calc.icon;
              return (
                <Card
                  key={calc.id}
                  className="group hover:glow-neon transition-all duration-500 hover:-translate-y-2 cursor-pointer bg-card border-border"
                  onClick={() => navigate(`/calculators/${calc.id}`)}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors mx-auto">
                      <Icon className={`w-8 h-8 ${calc.categoryColor}`} />
                    </div>
                    <CardTitle className="text-xl">{calc.title}</CardTitle>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {calc.category}
                    </p>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <p className="text-muted-foreground">{calc.tagline}</p>
                    <Button className="w-full">Launch Calculator</Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredCalculators.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No calculators found. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Calculators;
