import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertCircle, Download, ChevronLeft, ChevronRight, Twitter, Linkedin, Mail, Calendar, Clock, User, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ResearchArticle = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [calculatorInput, setCalculatorInput] = useState({ amount: "", rate: "" });
  const [calculatorResult, setCalculatorResult] = useState("");
  const [pollVotes, setPollVotes] = useState({ option1: 45, option2: 30, option3: 25 });
  const [citationFormat, setCitationFormat] = useState("APA");
  const [comments, setComments] = useState([
    { id: 1, author: "Dr. Sarah Johnson", text: "Excellent research methodology!", replies: [] }
  ]);

  const categories = ["All", "Finance", "Investment", "Research", "Analysis"];

  const handleCalculate = () => {
    const amount = parseFloat(calculatorInput.amount);
    const rate = parseFloat(calculatorInput.rate);
    if (!isNaN(amount) && !isNaN(rate)) {
      const result = (amount * rate) / 100;
      setCalculatorResult(`Result: ₹${result.toFixed(2)}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* 1. Title & Subtitle */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Comprehensive Analysis of Investment Portfolio Optimization Strategies
          </h1>
          <p className="text-xl text-muted-foreground">
            A systematic approach to maximizing returns through diversified investment methodologies
          </p>
        </header>

        {/* 2. Article Meta Info */}
        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>Dr. Michael Chen</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>March 15, 2024</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>12 min read</span>
          </div>
          <div className="flex items-center gap-2">
            <Tag className="h-4 w-4" />
            <Badge variant="secondary">Finance</Badge>
            <Badge variant="secondary">Research</Badge>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* 3. Author Box */}
        <Card className="mb-8">
          <CardContent className="flex gap-4 p-6">
            <Avatar className="h-16 w-16">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=michael" />
              <AvatarFallback>MC</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="font-semibold text-lg">Dr. Michael Chen</h3>
              <p className="text-sm text-muted-foreground mb-2">Professor of Finance, MIT</p>
              <p className="text-sm mb-3">
                Dr. Chen specializes in portfolio optimization and quantitative finance with over 20 years of experience in financial research and academia.
              </p>
              <div className="flex gap-3">
                <Twitter className="h-4 w-4 cursor-pointer hover:text-primary" />
                <Linkedin className="h-4 w-4 cursor-pointer hover:text-primary" />
                <Mail className="h-4 w-4 cursor-pointer hover:text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 4. Category Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Badge
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Badge>
            ))}
          </div>
        </div>

        {/* 5. Table of Contents */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Table of Contents</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-2 list-decimal list-inside">
              <li className="text-sm hover:text-primary cursor-pointer">Introduction to Portfolio Optimization</li>
              <li className="text-sm hover:text-primary cursor-pointer">Modern Portfolio Theory</li>
              <li className="text-sm hover:text-primary cursor-pointer">Risk Assessment Methodologies</li>
              <li className="text-sm hover:text-primary cursor-pointer">Diversification Strategies</li>
              <li className="text-sm hover:text-primary cursor-pointer">Performance Metrics</li>
              <li className="text-sm hover:text-primary cursor-pointer">Conclusion and Recommendations</li>
            </ol>
          </CardContent>
        </Card>

        {/* 6. Featured YouTube Embed */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Video Overview</h2>
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-2">
            <p className="text-muted-foreground">YouTube Video Embed Placeholder</p>
          </div>
          <p className="text-sm text-muted-foreground">
            Figure 1: Introduction to portfolio optimization strategies and their practical applications
          </p>
        </section>

        {/* 7. Featured Image Banner */}
        <figure className="mb-8">
          <div className="aspect-[21/9] bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Featured Research Banner Image</p>
          </div>
          <figcaption className="text-sm text-muted-foreground mt-2">
            Image Credit: Financial Research Institute | Stock market visualization and portfolio analytics
          </figcaption>
        </figure>

        {/* 8. Main Research Content */}
        <section className="prose prose-slate max-w-none mb-8">
          <h2 className="text-3xl font-bold mb-4">Introduction</h2>
          <p className="mb-4 text-foreground/90">
            Portfolio optimization represents a cornerstone of modern financial theory, offering investors systematic approaches to balance risk and return. This research examines contemporary methodologies and their practical applications in diverse market conditions.
          </p>
          
          <h3 className="text-2xl font-semibold mb-3">Key Research Objectives</h3>
          <ul className="space-y-2 mb-4 list-disc list-inside">
            <li>Analyze risk-return tradeoffs in portfolio construction</li>
            <li>Evaluate diversification benefits across asset classes</li>
            <li>Assess performance metrics for investment strategies</li>
            <li>Develop practical frameworks for portfolio management</li>
          </ul>

          <p className="mb-4 text-foreground/90">
            Our methodology integrates quantitative analysis with qualitative assessment to provide comprehensive insights into portfolio optimization strategies. The findings contribute to both academic literature and practical investment management.
          </p>
        </section>

        {/* 9. Highlight Notes */}
        <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 mb-8 rounded">
          <div className="flex gap-3">
            <AlertCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold mb-1 text-foreground">Key Research Finding</h4>
              <p className="text-sm text-foreground/80">
                Diversification reduces portfolio risk by 40-60% when assets have low correlation, significantly improving risk-adjusted returns over long-term investment horizons.
              </p>
            </div>
          </div>
        </div>

        {/* 10. Blockquote Section */}
        <blockquote className="border-l-4 border-primary pl-6 py-4 my-8 bg-muted/30 rounded-r">
          <p className="text-lg italic mb-3 text-foreground">
            "The essence of investment management lies not in the pursuit of highest returns, but in the optimization of risk-adjusted outcomes through systematic diversification."
          </p>
          <footer className="text-sm">
            <strong>— Prof. Harry Markowitz</strong>, Nobel Laureate in Economics
          </footer>
        </blockquote>

        {/* 11. Formula / Math Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Portfolio Variance Formula</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-4 rounded-lg font-mono text-sm mb-4">
              <p className="text-center mb-2">σ²ₚ = Σwᵢ²σᵢ² + ΣΣwᵢwⱼσᵢⱼ</p>
            </div>
            <p className="text-sm text-muted-foreground mb-2">Where:</p>
            <ul className="text-sm space-y-1 list-disc list-inside">
              <li>σ²ₚ = Portfolio variance</li>
              <li>wᵢ = Weight of asset i in the portfolio</li>
              <li>σᵢ² = Variance of asset i</li>
              <li>σᵢⱼ = Covariance between assets i and j</li>
            </ul>
          </CardContent>
        </Card>

        {/* 12. Calculation Tool */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Return Calculator</CardTitle>
            <CardDescription>Calculate expected returns based on investment amount and rate</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Investment Amount (₹)</label>
                <Input
                  type="number"
                  placeholder="10000"
                  value={calculatorInput.amount}
                  onChange={(e) => setCalculatorInput({ ...calculatorInput, amount: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Annual Rate (%)</label>
                <Input
                  type="number"
                  placeholder="12"
                  value={calculatorInput.rate}
                  onChange={(e) => setCalculatorInput({ ...calculatorInput, rate: e.target.value })}
                />
              </div>
            </div>
            <Button onClick={handleCalculate} className="w-full mb-2">Calculate</Button>
            {calculatorResult && (
              <p className="text-center font-semibold text-lg text-primary">{calculatorResult}</p>
            )}
          </CardContent>
        </Card>

        {/* 13. Statistical Data Table */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Portfolio Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Asset Class</TableHead>
                  <TableHead>Return (%)</TableHead>
                  <TableHead>Volatility (%)</TableHead>
                  <TableHead>Sharpe Ratio</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Equities</TableCell>
                  <TableCell>12.5</TableCell>
                  <TableCell>18.2</TableCell>
                  <TableCell>0.68</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Bonds</TableCell>
                  <TableCell>6.8</TableCell>
                  <TableCell>8.5</TableCell>
                  <TableCell>0.80</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Real Estate</TableCell>
                  <TableCell>9.2</TableCell>
                  <TableCell>12.3</TableCell>
                  <TableCell>0.75</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Commodities</TableCell>
                  <TableCell>8.5</TableCell>
                  <TableCell>22.1</TableCell>
                  <TableCell>0.38</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <p className="text-xs text-muted-foreground mt-2">
              * Data represents 10-year historical averages (2014-2024)
            </p>
          </CardContent>
        </Card>

        {/* 14. Graph / Chart Placeholder */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Efficient Frontier Visualization</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-[16/9] bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Chart: Risk vs Return Plot</p>
            </div>
            <div className="mt-4 flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-primary rounded-full"></div>
                <span>Optimal Portfolio</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-secondary rounded-full"></div>
                <span>Current Portfolio</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 15. Comparison Cards */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Strategy Comparison</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Active Management</CardTitle>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-2">Pros:</h4>
                <ul className="text-sm space-y-1 list-disc list-inside mb-3">
                  <li>Potential for higher returns</li>
                  <li>Flexible strategy adjustment</li>
                  <li>Expert market analysis</li>
                </ul>
                <h4 className="font-semibold mb-2">Cons:</h4>
                <ul className="text-sm space-y-1 list-disc list-inside">
                  <li>Higher management fees</li>
                  <li>Increased transaction costs</li>
                  <li>Manager risk dependency</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Passive Management</CardTitle>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-2">Pros:</h4>
                <ul className="text-sm space-y-1 list-disc list-inside mb-3">
                  <li>Lower costs and fees</li>
                  <li>Predictable performance</li>
                  <li>Tax efficiency</li>
                </ul>
                <h4 className="font-semibold mb-2">Cons:</h4>
                <ul className="text-sm space-y-1 list-disc list-inside">
                  <li>Limited flexibility</li>
                  <li>Market-average returns</li>
                  <li>No downside protection</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 16. Research Methodology */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Research Methodology</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { step: 1, title: "Data Collection", desc: "Gathered 10 years of historical data from 500+ securities" },
                { step: 2, title: "Statistical Analysis", desc: "Applied multivariate regression and correlation analysis" },
                { step: 3, title: "Portfolio Construction", desc: "Developed optimized portfolios using mean-variance optimization" },
                { step: 4, title: "Backtesting", desc: "Validated strategies against historical performance metrics" },
                { step: 5, title: "Risk Assessment", desc: "Evaluated downside risk using VaR and CVaR methodologies" }
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 17. Poll / Voting Block */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Research Poll</CardTitle>
            <CardDescription>What is your preferred investment strategy?</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Long-term Buy & Hold</span>
                <span>{pollVotes.option1}%</span>
              </div>
              <Progress value={pollVotes.option1} />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Active Trading</span>
                <span>{pollVotes.option2}%</span>
              </div>
              <Progress value={pollVotes.option2} />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Balanced Approach</span>
                <span>{pollVotes.option3}%</span>
              </div>
              <Progress value={pollVotes.option3} />
            </div>
          </CardContent>
        </Card>

        {/* 18. Related Articles */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Related Research Articles</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Risk Management in Volatile Markets", tags: ["Risk", "Strategy"] },
              { title: "Asset Allocation Models", tags: ["Allocation", "Theory"] },
              { title: "Behavioral Finance Insights", tags: ["Psychology", "Research"] }
            ].map((article, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted"></div>
                <CardHeader>
                  <CardTitle className="text-base">{article.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    Comprehensive analysis and practical insights for investors
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 19. References / Citations */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>References</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-sm">
              <p className="mb-1">1. Markowitz, H. (1952). Portfolio Selection. <em>The Journal of Finance</em>, 7(1), 77-91.</p>
            </div>
            <div className="text-sm">
              <p className="mb-1">2. Sharpe, W. F. (1964). Capital Asset Prices: A Theory of Market Equilibrium. <em>Journal of Finance</em>, 19(3), 425-442.</p>
            </div>
            <div className="text-sm">
              <p className="mb-1">3. Fama, E. F., & French, K. R. (1993). Common Risk Factors in Returns. <em>Journal of Financial Economics</em>, 33(1), 3-56.</p>
            </div>
            <div className="text-sm">
              <p className="mb-1">4. Merton, R. C. (1972). An Analytic Derivation of the Efficient Portfolio Frontier. <em>Journal of Financial and Quantitative Analysis</em>, 7(4), 1851-1872.</p>
            </div>
          </CardContent>
        </Card>

        {/* 20. Citation Generator */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Citation Generator</CardTitle>
            <CardDescription>Generate citations for this article</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-2">
                {["APA", "MLA", "IEEE"].map((format) => (
                  <Badge
                    key={format}
                    variant={citationFormat === format ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setCitationFormat(format)}
                  >
                    {format}
                  </Badge>
                ))}
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm font-mono">
                  {citationFormat === "APA" && "Chen, M. (2024). Comprehensive Analysis of Investment Portfolio Optimization Strategies. Financial Research Journal, 45(2), 123-145."}
                  {citationFormat === "MLA" && "Chen, Michael. \"Comprehensive Analysis of Investment Portfolio Optimization Strategies.\" Financial Research Journal, vol. 45, no. 2, 2024, pp. 123-145."}
                  {citationFormat === "IEEE" && "M. Chen, \"Comprehensive Analysis of Investment Portfolio Optimization Strategies,\" Financial Research Journal, vol. 45, no. 2, pp. 123-145, 2024."}
                </p>
              </div>
              <Button variant="outline" size="sm">Copy Citation</Button>
            </div>
          </CardContent>
        </Card>

        {/* 21. Comments Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Comments ({comments.length})</h2>
          <div className="space-y-4">
            {comments.map((comment) => (
              <Card key={comment.id}>
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <Avatar>
                      <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${comment.author}`} />
                      <AvatarFallback>{comment.author.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold">{comment.author}</span>
                        <span className="text-xs text-muted-foreground">2 days ago</span>
                      </div>
                      <p className="text-sm mb-2">{comment.text}</p>
                      <Button variant="ghost" size="sm">Reply</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 22. Add Comment Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Leave a Comment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <Input placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Comment</label>
                <Textarea placeholder="Share your thoughts..." rows={4} />
              </div>
              <Button>Post Comment</Button>
            </div>
          </CardContent>
        </Card>

        {/* 23. Newsletter Box */}
        <Card className="mb-8 bg-primary/5 border-primary/20">
          <CardContent className="py-6">
            <h3 className="font-semibold text-lg mb-2">Subscribe to Research Updates</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest research articles delivered to your inbox
            </p>
            <div className="flex gap-2">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button>Subscribe</Button>
            </div>
          </CardContent>
        </Card>

        {/* 24. Previous / Next Navigation */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="flex items-center gap-4 p-4">
              <ChevronLeft className="h-8 w-8 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-xs text-muted-foreground mb-1">Previous Article</p>
                <h4 className="font-semibold text-sm">Risk Assessment in Modern Portfolio Theory</h4>
              </div>
              <div className="w-16 h-16 bg-muted rounded flex-shrink-0"></div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="flex items-center gap-4 p-4">
              <div className="w-16 h-16 bg-muted rounded flex-shrink-0"></div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground mb-1">Next Article</p>
                <h4 className="font-semibold text-sm">Behavioral Finance and Investment Decisions</h4>
              </div>
              <ChevronRight className="h-8 w-8 text-muted-foreground" />
            </CardContent>
          </Card>
        </div>

        {/* 25. Downloadable Resources */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Downloadable Resources</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { name: "Research Methodology Paper.pdf", size: "2.4 MB" },
              { name: "Statistical Dataset.xlsx", size: "1.8 MB" },
              { name: "Portfolio Templates.zip", size: "3.2 MB" }
            ].map((file, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                <div>
                  <p className="font-medium text-sm">{file.name}</p>
                  <p className="text-xs text-muted-foreground">{file.size}</p>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* 26. Glossary Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Glossary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <h4 className="font-semibold text-sm">Diversification</h4>
              <p className="text-sm text-muted-foreground">The practice of spreading investments across various assets to reduce risk.</p>
            </div>
            <Separator />
            <div>
              <h4 className="font-semibold text-sm">Sharpe Ratio</h4>
              <p className="text-sm text-muted-foreground">A measure of risk-adjusted return calculated as excess return per unit of volatility.</p>
            </div>
            <Separator />
            <div>
              <h4 className="font-semibold text-sm">Volatility</h4>
              <p className="text-sm text-muted-foreground">The degree of variation in asset prices, typically measured by standard deviation.</p>
            </div>
            <Separator />
            <div>
              <h4 className="font-semibold text-sm">Alpha</h4>
              <p className="text-sm text-muted-foreground">The excess return of an investment relative to a benchmark index.</p>
            </div>
          </CardContent>
        </Card>

        {/* 27. FAQ Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-1">
                <AccordionTrigger>What is portfolio optimization?</AccordionTrigger>
                <AccordionContent>
                  Portfolio optimization is the process of selecting the best mix of investments to achieve maximum returns for a given level of risk, or minimum risk for a target return level.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger>How important is diversification?</AccordionTrigger>
                <AccordionContent>
                  Diversification is crucial as it reduces unsystematic risk by spreading investments across different asset classes, sectors, and geographies, potentially improving risk-adjusted returns.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger>What is the Sharpe Ratio?</AccordionTrigger>
                <AccordionContent>
                  The Sharpe Ratio measures risk-adjusted performance by calculating the excess return per unit of risk. Higher values indicate better risk-adjusted returns.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4">
                <AccordionTrigger>Should I choose active or passive management?</AccordionTrigger>
                <AccordionContent>
                  The choice depends on your investment goals, risk tolerance, and cost sensitivity. Passive strategies typically offer lower costs, while active management provides potential for outperformance.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* 28. Research Summary Box */}
        <Card className="mb-8 border-2 border-primary">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-primary" />
              Key Research Findings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 list-disc list-inside">
              <li className="font-medium">Diversification reduces portfolio risk by 40-60% for low-correlation assets</li>
              <li className="font-medium">Mean-variance optimization provides superior risk-adjusted returns</li>
              <li className="font-medium">Regular rebalancing maintains optimal portfolio allocation</li>
              <li className="font-medium">Long-term passive strategies outperform 80% of active managers after fees</li>
              <li className="font-medium">Behavioral biases significantly impact investment decision quality</li>
            </ul>
          </CardContent>
        </Card>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">← Back to Homepage</Link>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default ResearchArticle;