import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ArrowLeft, Download, Share2, Save, Info } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from "recharts";
import { toast } from "sonner";

const NPSCalculator = () => {
  const navigate = useNavigate();
  const [monthlyContribution, setMonthlyContribution] = useState(5000);
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [expectedReturn, setExpectedReturn] = useState(10);
  const [annuityReturn, setAnnuityReturn] = useState(6);

  const calculateNPS = () => {
    const years = retirementAge - currentAge;
    const months = years * 12;
    const monthlyRate = expectedReturn / 100 / 12;

    // Calculate corpus at retirement
    const maturityCorpus =
      monthlyContribution *
      (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));

    const totalInvestment = monthlyContribution * months;

    // 40% must be used to buy annuity, 60% can be withdrawn
    const annuityAmount = maturityCorpus * 0.4;
    const lumpsum = maturityCorpus * 0.6;

    // Monthly pension from annuity
    const monthlyPension = (annuityAmount * (annuityReturn / 100)) / 12;

    // Tax benefit (assuming 30% tax bracket on contributions)
    const annualContribution = monthlyContribution * 12;
    const taxSaved = annualContribution * 0.3; // 30% tax bracket

    return {
      maturityCorpus: Math.round(maturityCorpus),
      totalInvestment: Math.round(totalInvestment),
      totalReturns: Math.round(maturityCorpus - totalInvestment),
      annuityAmount: Math.round(annuityAmount),
      lumpsum: Math.round(lumpsum),
      monthlyPension: Math.round(monthlyPension),
      taxSaved: Math.round(taxSaved),
    };
  };

  const results = calculateNPS();

  const pieData = [
    { name: "Lumpsum (60%)", value: results.lumpsum, color: "#FFD700" },
    { name: "Annuity (40%)", value: results.annuityAmount, color: "#00FF66" },
  ];

  const handleCalculate = () => {
    toast.success("NPS calculation complete!", {
      description: "Your retirement corpus and pension estimates are ready",
    });
  };

  const handleReset = () => {
    setMonthlyContribution(5000);
    setCurrentAge(30);
    setRetirementAge(60);
    setExpectedReturn(10);
    setAnnuityReturn(6);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" onClick={() => navigate("/calculators")} className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Calculators
        </Button>

        <h1 className="text-4xl font-bold mb-2">
          <span className="text-gradient-gold">NPS</span> Calculator
        </h1>
        <p className="text-muted-foreground mb-8">
          Estimate your National Pension System corpus, monthly pension, and tax benefits
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Panel - Inputs */}
          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Input Parameters
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="w-4 h-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">
                        NPS is a government-backed retirement savings scheme with tax benefits
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Monthly Contribution */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Monthly Contribution (₹)</Label>
                  <Input
                    type="number"
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                    className="w-32 text-right"
                  />
                </div>
                <Slider
                  value={[monthlyContribution]}
                  onValueChange={(value) => setMonthlyContribution(value[0])}
                  min={500}
                  max={50000}
                  step={500}
                />
              </div>

              {/* Current Age */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Current Age</Label>
                  <Input
                    type="number"
                    value={currentAge}
                    onChange={(e) => setCurrentAge(Number(e.target.value))}
                    className="w-32 text-right"
                  />
                </div>
                <Slider
                  value={[currentAge]}
                  onValueChange={(value) => setCurrentAge(value[0])}
                  min={18}
                  max={60}
                  step={1}
                />
              </div>

              {/* Retirement Age */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Retirement Age</Label>
                  <Input
                    type="number"
                    value={retirementAge}
                    onChange={(e) => setRetirementAge(Number(e.target.value))}
                    className="w-32 text-right"
                  />
                </div>
                <Slider
                  value={[retirementAge]}
                  onValueChange={(value) => setRetirementAge(value[0])}
                  min={currentAge + 1}
                  max={70}
                  step={1}
                />
              </div>

              {/* Expected Return */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Expected Return (% p.a.)</Label>
                  <Input
                    type="number"
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(Number(e.target.value))}
                    className="w-32 text-right"
                  />
                </div>
                <Slider
                  value={[expectedReturn]}
                  onValueChange={(value) => setExpectedReturn(value[0])}
                  min={4}
                  max={14}
                  step={0.5}
                />
              </div>

              {/* Annuity Return */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Annuity Return (% p.a.)</Label>
                  <Input
                    type="number"
                    value={annuityReturn}
                    onChange={(e) => setAnnuityReturn(Number(e.target.value))}
                    className="w-32 text-right"
                  />
                </div>
                <Slider
                  value={[annuityReturn]}
                  onValueChange={(value) => setAnnuityReturn(value[0])}
                  min={4}
                  max={10}
                  step={0.5}
                />
              </div>

              <div className="space-y-3 pt-4">
                <Button onClick={handleCalculate} className="w-full h-12 text-lg">
                  Calculate
                </Button>
                <Button onClick={handleReset} variant="outline" className="w-full">
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Right Panel - Results */}
          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle className="text-gradient-gold">Your NPS Estimates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Key Metrics */}
                <div className="grid gap-4">
                  <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
                    <p className="text-sm text-muted-foreground mb-1">Maturity Corpus</p>
                    <p className="text-3xl font-bold text-[#FFD700]">
                      ₹{results.maturityCorpus.toLocaleString("en-IN")}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-card border border-border">
                      <p className="text-sm text-muted-foreground mb-1">Lumpsum (60%)</p>
                      <p className="text-xl font-bold text-[#FFD700]">
                        ₹{results.lumpsum.toLocaleString("en-IN")}
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-card border border-border">
                      <p className="text-sm text-muted-foreground mb-1">Annuity (40%)</p>
                      <p className="text-xl font-bold text-[#00FF66]">
                        ₹{results.annuityAmount.toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                    <p className="text-sm text-muted-foreground mb-1">Monthly Pension</p>
                    <p className="text-2xl font-bold text-primary">
                      ₹{results.monthlyPension.toLocaleString("en-IN")}
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-card border border-border">
                    <p className="text-sm text-muted-foreground mb-1">
                      Annual Tax Saved (Section 80CCD)
                    </p>
                    <p className="text-xl font-bold text-[#00FF66]">
                      ₹{results.taxSaved.toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>

                {/* Pie Chart */}
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) =>
                          `${name}: ${(percent * 100).toFixed(0)}%`
                        }
                        outerRadius={80}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <RechartsTooltip
                        formatter={(value: number) => `₹${value.toLocaleString("en-IN")}`}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="flex gap-2">
                  <Button onClick={() => toast.success("PDF downloading...")} variant="outline" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      toast.success("Link copied!");
                    }}
                    variant="outline"
                    className="flex-1"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <Button onClick={() => toast.info("Login to save")} variant="outline" className="flex-1">
                    <Save className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50">
              <Tabs defaultValue="assumptions">
                <CardHeader>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="assumptions">Assumptions</TabsTrigger>
                    <TabsTrigger value="tax">Tax Benefits</TabsTrigger>
                  </TabsList>
                </CardHeader>
                <CardContent>
                  <TabsContent value="assumptions" className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      40% of corpus must be used to purchase annuity
                    </p>
                    <p className="text-sm text-muted-foreground">
                      60% can be withdrawn as lumpsum at retirement
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Minimum retirement age is 60 years
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Returns are market-linked and not guaranteed
                    </p>
                  </TabsContent>
                  <TabsContent value="tax" className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Deduction up to ₹1.5 lakh under Section 80CCD(1)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Additional ₹50,000 under Section 80CCD(1B)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Employer contribution deductible under 80CCD(2)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      60% lumpsum withdrawal is tax-free at maturity
                    </p>
                  </TabsContent>
                </CardContent>
              </Tabs>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NPSCalculator;
