import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  FileText,
  MessageSquare,
  Settings,
  RefreshCw,
  BarChart3,
  Brain,
  Upload,
  Play,
  Clock,
  DollarSign,
  Users,
  Zap,
  Shield,
  Star,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const TypingAnimation = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [currentIndex, text]);

  return (
    <span className={className}>
      {displayText}
      {currentIndex < text.length && <span className="animate-pulse">|</span>}
    </span>
  );
};

const FloatingCard = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <div className="animate-float" style={{ animationDelay: `${delay}s` }}>
    {children}
  </div>
);

export default function Index() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote:
        "FollowUpAI helped me get paid 40% faster. I went from chasing clients for weeks to getting payments in days.",
      author: "Sarah Chen",
      role: "Freelance Designer",
      rating: 5,
    },
    {
      quote:
        "Finally, something that handles the awkward follow-ups for me. My cash flow improved immediately.",
      author: "Marcus Rivera",
      role: "Agency Owner",
      rating: 5,
    },
    {
      quote:
        "The AI writes better follow-ups than I do. Professional, persistent, but never pushy.",
      author: "Jessica Kim",
      role: "Consultant",
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 via-background to-brand-blue/10" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-brand-purple/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="space-y-8 animate-fadeInUp">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              Stop chasing clients
              <br />
              <span className="gradient-text">to pay.</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              FollowUpAI reads your invoices and follows up on your behalf.
              Transform awkward payment chases into automated, professional
              reminders.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-brand-purple hover:bg-brand-purple/80 text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-brand-purple/25 transition-all duration-300"
              >
                <Upload className="mr-2 h-5 w-5" />
                Upload Invoice
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue/10 px-8 py-6 text-lg font-semibold rounded-2xl transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Typing Animation Demo */}
          <div className="mt-16 glass-card max-w-2xl mx-auto text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="ml-2 text-sm text-muted-foreground">
                FollowUpAI composing...
              </span>
            </div>
            <div className="font-mono text-sm space-y-2">
              <div className="text-muted-foreground">
                To: client@company.com
              </div>
              <div className="text-muted-foreground">
                Subject: Friendly reminder about Invoice #2024-001
              </div>
              <div className="mt-4 leading-relaxed">
                <TypingAnimation
                  text="Hi John, I hope you're doing well! I wanted to follow up on Invoice #2024-001 for $2,500 that was sent on January 15th. The payment was due on February 1st, and I haven't received it yet. Could you please let me know the status? Thanks for your time!"
                  className="text-foreground"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            The payment chase is{" "}
            <span className="text-destructive">killing your business</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FloatingCard delay={0}>
              <div className="glass-card text-center p-8">
                <Clock className="h-12 w-12 text-destructive mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Late payments hurt your cash flow
                </h3>
                <p className="text-muted-foreground">
                  73% of invoices are paid late, disrupting your ability to
                  operate and grow.
                </p>
              </div>
            </FloatingCard>

            <FloatingCard delay={0.2}>
              <div className="glass-card text-center p-8">
                <MessageSquare className="h-12 w-12 text-destructive mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  You hate sounding desperate
                </h3>
                <p className="text-muted-foreground">
                  Writing follow-up emails feels awkward and damages client
                  relationships.
                </p>
              </div>
            </FloatingCard>

            <FloatingCard delay={0.4}>
              <div className="glass-card text-center p-8">
                <Users className="h-12 w-12 text-destructive mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Clients ghost after getting the invoice
                </h3>
                <p className="text-muted-foreground">
                  Even good clients "forget" to pay, leaving you to play
                  collection agent.
                </p>
              </div>
            </FloatingCard>
          </div>
        </div>
      </section>

      {/* Before vs After Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-muted/30 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Transform your payment process
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Before */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-destructive">
                ❌ Before FollowUpAI
              </h3>
              <div className="space-y-4">
                <div className="glass-card p-6 border-destructive/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-destructive/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-destructive font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Manual invoice tracking</h4>
                      <p className="text-sm text-muted-foreground">
                        Spreadsheets, sticky notes, and hoping you remember
                      </p>
                    </div>
                  </div>
                </div>
                <div className="glass-card p-6 border-destructive/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-destructive/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-destructive font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Awkward follow-up emails
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Staring at a blank email, unsure of the right tone
                      </p>
                    </div>
                  </div>
                </div>
                <div className="glass-card p-6 border-destructive/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-destructive/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-destructive font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Damaged relationships</h4>
                      <p className="text-sm text-muted-foreground">
                        Clients avoid you because payment conversations are
                        tense
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* After */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-brand-purple">
                ✅ After FollowUpAI
              </h3>
              <div className="space-y-4">
                <div className="glass-card p-6 border-brand-purple/20 bg-brand-purple/5">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-brand-purple font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Automatic invoice parsing
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        AI reads your invoices and tracks everything for you
                      </p>
                    </div>
                  </div>
                </div>
                <div className="glass-card p-6 border-brand-purple/20 bg-brand-purple/5">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-brand-purple font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Professional AI follow-ups
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Perfect tone, timing, and persistence every time
                      </p>
                    </div>
                  </div>
                </div>
                <div className="glass-card p-6 border-brand-purple/20 bg-brand-purple/5">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-brand-purple font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Stronger client relationships
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Focus on your work while AI handles the awkward stuff
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              AI that actually{" "}
              <span className="gradient-text">gets you paid</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every feature designed to turn your invoices into payments, faster
              and with less stress.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FloatingCard delay={0}>
              <Card className="glass-card border-brand-purple/20 hover:border-brand-purple/40 transition-all duration-300 h-full">
                <CardHeader>
                  <FileText className="h-10 w-10 text-brand-purple mb-4" />
                  <CardTitle>Invoice Parsing</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Upload any invoice format. AI extracts client info, amounts,
                    due dates, and contact details automatically.
                  </CardDescription>
                </CardContent>
              </Card>
            </FloatingCard>

            <FloatingCard delay={0.1}>
              <Card className="glass-card border-brand-blue/20 hover:border-brand-blue/40 transition-all duration-300 h-full">
                <CardHeader>
                  <Brain className="h-10 w-10 text-brand-blue mb-4" />
                  <CardTitle>AI-Generated Follow-ups</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Human-like emails that get results. Each message is
                    personalized based on client history and payment patterns.
                  </CardDescription>
                </CardContent>
              </Card>
            </FloatingCard>

            <FloatingCard delay={0.2}>
              <Card className="glass-card border-brand-cyan/20 hover:border-brand-cyan/40 transition-all duration-300 h-full">
                <CardHeader>
                  <Settings className="h-10 w-10 text-brand-cyan mb-4" />
                  <CardTitle>Tone Customization</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Choose from polite, professional, or assertive tones. AI
                    adapts the message style to match your brand voice.
                  </CardDescription>
                </CardContent>
              </Card>
            </FloatingCard>

            <FloatingCard delay={0.3}>
              <Card className="glass-card border-brand-purple/20 hover:border-brand-purple/40 transition-all duration-300 h-full">
                <CardHeader>
                  <RefreshCw className="h-10 w-10 text-brand-purple mb-4" />
                  <CardTitle>Auto Resend with Attachment</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Automatically includes invoice attachments in follow-ups. No
                    more "I can't find the invoice" excuses.
                  </CardDescription>
                </CardContent>
              </Card>
            </FloatingCard>

            <FloatingCard delay={0.4}>
              <Card className="glass-card border-brand-blue/20 hover:border-brand-blue/40 transition-all duration-300 h-full">
                <CardHeader>
                  <BarChart3 className="h-10 w-10 text-brand-blue mb-4" />
                  <CardTitle>Payment Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Real-time dashboard showing which invoices are paid,
                    pending, or overdue. Never lose track again.
                  </CardDescription>
                </CardContent>
              </Card>
            </FloatingCard>

            <FloatingCard delay={0.5}>
              <Card className="glass-card border-brand-cyan/20 hover:border-brand-cyan/40 transition-all duration-300 h-full">
                <CardHeader>
                  <Shield className="h-10 w-10 text-brand-cyan mb-4" />
                  <CardTitle>Client Memory</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    AI remembers each client's payment history and preferences
                    to optimize follow-up timing and tone.
                  </CardDescription>
                </CardContent>
              </Card>
            </FloatingCard>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-muted/20 to-transparent">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Simple pricing that{" "}
              <span className="gradient-text">pays for itself</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Get paid faster with automated follow-ups. Choose the plan that
              fits your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <Card className="glass-card relative">
              <CardHeader>
                <CardTitle className="text-2xl">Free</CardTitle>
                <div className="text-4xl font-bold">$0</div>
                <CardDescription>Perfect for getting started</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>5 invoices per month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Basic follow-up templates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Email support</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  Get Started Free
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan - Most Popular */}
            <Card className="glass-card relative border-brand-purple/40 bg-brand-purple/5">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-purple text-white">
                Most Popular
              </Badge>
              <CardHeader>
                <CardTitle className="text-2xl">Pro</CardTitle>
                <div className="text-4xl font-bold">
                  $9
                  <span className="text-lg text-muted-foreground">/month</span>
                </div>
                <CardDescription>For growing freelancers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>50 invoices per month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>AI-generated follow-ups</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Tone customization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Payment tracking dashboard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button className="w-full bg-brand-purple hover:bg-brand-purple/80">
                  Start Pro Trial
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="glass-card relative">
              <CardHeader>
                <CardTitle className="text-2xl">Premium</CardTitle>
                <div className="text-4xl font-bold">
                  $29
                  <span className="text-lg text-muted-foreground">/month</span>
                </div>
                <CardDescription>For agencies and teams</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Unlimited invoices</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Advanced AI features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Client memory & insights</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Team collaboration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>White-label options</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Phone support</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  Start Premium Trial
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Loved by <span className="gradient-text">thousands</span> of
            freelancers
          </h2>

          <div className="relative">
            <Card className="glass-card p-8 max-w-2xl mx-auto">
              <CardContent className="space-y-6">
                <div className="flex justify-center space-x-1">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ),
                  )}
                </div>
                <blockquote className="text-xl italic leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div className="border-t border-border pt-6">
                  <div className="font-semibold text-lg">
                    {testimonials[currentTestimonial].author}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-brand-purple"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 px-4 bg-gradient-to-r from-brand-purple to-brand-blue">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start chasing results, not clients.
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join 10,000+ freelancers who get paid faster with FollowUpAI.
          </p>
          <Button
            size="lg"
            className="bg-white text-brand-purple hover:bg-white/90 px-8 py-6 text-lg font-semibold rounded-2xl shadow-lg"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Try FollowUpAI Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold gradient-text">FollowUpAI</h3>
              <p className="text-muted-foreground">
                Agentic invoice reminders that get you paid faster.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Free Tools
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Resources</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    FollowUpAI vs Manual Emails
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Templates
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    GDPR
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 FollowUpAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
