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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowLeft, Download, Share2, Save, Info } from "lucide-react";
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Legend } from "recharts";
import { toast } from "sonner";

const SIPCalculator = () => {
  const navigate = useNavigate();
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);
  const [isCalculated, setIsCalculated] = useState(false);

  // Calculate results
  const calculateSIP = () => {
    const P = monthlyInvestment;
    const r = expectedReturn / 100 / 12;
    const n = timePeriod * 12;

    const futureValue = P * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
    const totalInvestment = P * n;
    const totalReturns = futureValue - totalInvestment;

    return {
      futureValue: Math.round(futureValue),
      totalInvestment: Math.round(totalInvestment),
      totalReturns: Math.round(totalReturns),
    };
  };

  const results = calculateSIP();

  // Data for pie chart
  const pieData = [
    { name: "Invested Amount", value: results.totalInvestment, color: "#FFD700" },
    { name: "Expected Returns", value: results.totalReturns, color: "#00FF66" },
  ];

  // Data for line chart (year-wise growth)
  const lineData = Array.from({ length: timePeriod + 1 }, (_, year) => {
    const months = year * 12;
    const P = monthlyInvestment;
    const r = expectedReturn / 100 / 12;
    const fv = months === 0 ? 0 : P * (((Math.pow(1 + r, months) - 1) / r) * (1 + r));
    const invested = P * months;

    return {
      year,
      value: Math.round(fv),
      invested: Math.round(invested),
    };
  });

  const handleCalculate = () => {
    setIsCalculated(true);
    // Lightsaber effect
    toast.success("Calculation complete!", {
      description: "Your SIP projections are ready",
    });
  };

  const handleReset = () => {
    setMonthlyInvestment(5000);
    setExpectedReturn(12);
    setTimePeriod(10);
    setIsCalculated(false);
  };

  const handleDownload = () => {
    toast.success("PDF report downloading...");
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

  const handleSave = () => {
    toast.info("Please log in to save scenarios");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate("/calculators")}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Calculators
        </Button>

        <h1 className="text-4xl font-bold mb-2">
          <span className="text-gradient-gold">SIP</span> Calculator
        </h1>
        <p className="text-muted-foreground mb-8">
          Calculate your Systematic Investment Plan returns and wealth accumulation over time
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Panel - Input Section */}
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
                        Enter your investment details to calculate expected returns.
                        SIP invests a fixed amount regularly in mutual funds.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Monthly Investment */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="monthly-investment" className="flex items-center gap-2">
                    Monthly Investment (₹)
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="w-3 h-3 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Amount you'll invest every month</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Label>
                  <Input
                    id="monthly-investment"
                    type="number"
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                    className="w-32 text-right"
                  />
                </div>
                <Slider
                  value={[monthlyInvestment]}
                  onValueChange={(value) => setMonthlyInvestment(value[0])}
                  min={500}
                  max={100000}
                  step={500}
                  className="w-full"
                />
              </div>

              {/* Expected Return */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="expected-return" className="flex items-center gap-2">
                    Expected Return Rate (% p.a.)
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="w-3 h-3 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Expected annual return percentage</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Label>
                  <Input
                    id="expected-return"
                    type="number"
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(Number(e.target.value))}
                    className="w-32 text-right"
                  />
                </div>
                <Slider
                  value={[expectedReturn]}
                  onValueChange={(value) => setExpectedReturn(value[0])}
                  min={1}
                  max={30}
                  step={0.5}
                  className="w-full"
                />
              </div>

              {/* Time Period */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="time-period" className="flex items-center gap-2">
                    Time Period (Years)
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="w-3 h-3 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Investment duration in years</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Label>
                  <Input
                    id="time-period"
                    type="number"
                    value={timePeriod}
                    onChange={(e) => setTimePeriod(Number(e.target.value))}
                    className="w-32 text-right"
                  />
                </div>
                <Slider
                  value={[timePeriod]}
                  onValueChange={(value) => setTimePeriod(value[0])}
                  min={1}
                  max={40}
                  step={1}
                  className="w-full"
                />
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4">
                <Button
                  onClick={handleCalculate}
                  className="w-full h-12 text-lg relative overflow-hidden group"
                >
                  <span className="relative z-10">Calculate</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-[#FFD700] to-primary bg-[length:200%_100%] group-hover:animate-[shimmer_2s_linear_infinite]" />
                </Button>
                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="w-full"
                >
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Right Panel - Results */}
          <div className="space-y-6">
            {/* Results Card */}
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle className="text-gradient-gold">Your Estimated Returns</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Key Metrics */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
                    <p className="text-sm text-muted-foreground mb-1">Future Value</p>
                    <p className="text-3xl font-bold text-[#FFD700]">
                      ₹{results.futureValue.toLocaleString("en-IN")}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-card border border-border">
                      <p className="text-sm text-muted-foreground mb-1">Total Invested</p>
                      <p className="text-xl font-bold">
                        ₹{results.totalInvestment.toLocaleString("en-IN")}
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-card border border-border">
                      <p className="text-sm text-muted-foreground mb-1">Est. Returns</p>
                      <p className="text-xl font-bold text-[#00FF66]">
                        ₹{results.totalReturns.toLocaleString("en-IN")}
                      </p>
                    </div>
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
                        fill="#8884d8"
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

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button onClick={handleDownload} variant="outline" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                  <Button onClick={handleShare} variant="outline" className="flex-1">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <Button onClick={handleSave} variant="outline" className="flex-1">
                    <Save className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Tabs for Additional Info */}
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <Tabs defaultValue="growth">
                <CardHeader>
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="growth">Growth Chart</TabsTrigger>
                    <TabsTrigger value="assumptions">Assumptions</TabsTrigger>
                    <TabsTrigger value="tax">Tax Impact</TabsTrigger>
                  </TabsList>
                </CardHeader>
                <CardContent>
                  <TabsContent value="growth" className="space-y-4">
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={lineData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                          <XAxis
                            dataKey="year"
                            stroke="#888"
                            label={{ value: "Years", position: "insideBottom", offset: -5 }}
                          />
                          <YAxis
                            stroke="#888"
                            tickFormatter={(value) => `₹${(value / 100000).toFixed(1)}L`}
                          />
                          <RechartsTooltip
                            formatter={(value: number) => `₹${value.toLocaleString("en-IN")}`}
                            contentStyle={{ backgroundColor: "#1a1a1a", border: "1px solid #333" }}
                          />
                          <Legend />
                          <Line
                            type="monotone"
                            dataKey="invested"
                            stroke="#FFD700"
                            name="Invested"
                            strokeWidth={2}
                          />
                          <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#00FF66"
                            name="Future Value"
                            strokeWidth={2}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </TabsContent>
                  <TabsContent value="assumptions" className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      This calculator assumes a constant rate of return throughout the investment period
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Actual returns may vary based on market conditions
                    </p>
                    <p className="text-sm text-muted-foreground">
                      SIP investments are subject to market risks
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Past performance is not indicative of future results
                    </p>
                  </TabsContent>
                  <TabsContent value="tax" className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Equity mutual funds: LTCG above ₹1 lakh taxed at 10%
                    </p>
                    <p className="text-sm text-muted-foreground">
                      STCG on equity funds taxed at 15%
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Debt funds: Gains taxed as per your income tax slab
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Consider tax implications before redemption
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

export default SIPCalculator;
