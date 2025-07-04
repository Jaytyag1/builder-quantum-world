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

  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

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
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden floating-particles">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 via-background to-brand-blue/10" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-brand-purple/20 rounded-full blur-3xl animate-pulse premium-glow" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl animate-pulse premium-glow"
          style={{ animationDelay: "2s" }}
        />

        {/* Additional floating elements */}
        <div
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-brand-cyan/60 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-3/4 right-1/3 w-3 h-3 bg-brand-purple/80 rounded-full animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-1/2 left-3/4 w-2 h-2 bg-brand-blue/70 rounded-full animate-float"
          style={{ animationDelay: "5s" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight text-focus-in">
              <br />
              <span
                className="inline-block stagger-animation"
                style={{ animationDelay: "0.2s" }}
              >
                Stop chasing clients
              </span>
              <span
                className="gradient-text inline-block stagger-animation"
                style={{ animationDelay: "0.4s" }}
              >
                &nbsp;to pay.
              </span>
            </h1>

            <p
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed stagger-animation"
              style={{ animationDelay: "0.6s" }}
            >
              FollowUpAI reads your invoices and follows up on your behalf.
              Transform awkward payment chases into automated, professional
              reminders.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center stagger-animation"
              style={{ animationDelay: "0.8s" }}
            >
              <Button
                size="lg"
                className="bg-brand-purple hover:bg-brand-purple/80 text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-brand-purple/25 transition-all duration-300 shimmer-effect premium-glow hover:scale-105 transform"
              >
                <Upload className="mr-2 h-5 w-5" />
                Upload Invoice
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue/10 px-8 py-6 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 transform hover:shadow-lg hover:shadow-brand-blue/25"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Typing Animation Demo */}
          <div
            className="mt-16 glass-card max-w-2xl mx-auto text-left shimmer-effect stagger-animation"
            style={{ animationDelay: "1s" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              <div
                className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
              <div
                className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              />
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

      {/* Investor-Focused Metrics */}
      <section className="py-16 px-4 border-y border-border/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                $2.4M
              </div>
              <div className="text-sm text-muted-foreground">
                Revenue Recovered
              </div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                10,000+
              </div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                40%
              </div>
              <div className="text-sm text-muted-foreground">
                Faster Payments
              </div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                99.7%
              </div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
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
              <div className="glass-card text-center p-8 hover:scale-105 transition-all duration-500 group hover:shadow-xl hover:shadow-destructive/10">
                <Clock className="h-12 w-12 text-destructive mx-auto mb-4 group-hover:animate-pulse" />
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
              <div className="glass-card text-center p-8 hover:scale-105 transition-all duration-500 group hover:shadow-xl hover:shadow-destructive/10">
                <MessageSquare className="h-12 w-12 text-destructive mx-auto mb-4 group-hover:animate-pulse" />
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
              <div className="glass-card text-center p-8 hover:scale-105 transition-all duration-500 group hover:shadow-xl hover:shadow-destructive/10">
                <Users className="h-12 w-12 text-destructive mx-auto mb-4 group-hover:animate-pulse" />
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

      {/* Animated Workflow Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-muted/30 to-transparent relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
            Transform your payment process
          </h2>

          {/* Animated Workflow Timeline */}
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-destructive via-brand-purple to-brand-blue rounded-full opacity-30"></div>

            {/* Step 1 - Invoice Upload */}
            <div className="relative mb-20">
              <div className="flex items-center justify-center mb-8">
                <div className="glass-card p-6 rounded-2xl premium-glow animate-pulse">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-brand-purple/20 rounded-full flex items-center justify-center">
                      <Upload className="h-8 w-8 text-brand-purple animate-bounceIn" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold gradient-text">
                        1. Upload Invoice
                      </h3>
                      <p className="text-muted-foreground">
                        AI instantly reads and processes your invoice
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated Invoice Cards */}
              <div className="flex justify-center gap-4 mb-8">
                <div className="glass-card p-4 max-w-xs animate-slideInLeft">
                  <div className="text-xs text-muted-foreground mb-2">
                    BEFORE
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Manual Entry:</span>
                      <span className="text-destructive">😤 30 mins</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Error Rate:</span>
                      <span className="text-destructive">❌ 15%</span>
                    </div>
                  </div>
                </div>

                <ArrowRight className="h-8 w-8 text-brand-purple mt-6 animate-pulse" />

                <div className="glass-card p-4 max-w-xs border-brand-purple/20 bg-brand-purple/5 animate-slideInRight">
                  <div className="text-xs text-brand-purple mb-2">AFTER</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>AI Processing:</span>
                      <span className="text-green-400">⚡ 3 seconds</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Error Rate:</span>
                      <span className="text-green-400">✅ 0%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 - AI Follow-ups */}
            <div className="relative mb-20">
              <div className="flex items-center justify-center mb-8">
                <div
                  className="glass-card p-6 rounded-2xl premium-glow animate-pulse"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-brand-blue/20 rounded-full flex items-center justify-center">
                      <Brain
                        className="h-8 w-8 text-brand-blue animate-bounceIn"
                        style={{ animationDelay: "1s" }}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold gradient-text">
                        2. AI Generates Follow-ups
                      </h3>
                      <p className="text-muted-foreground">
                        Smart, contextual messages at perfect timing
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated Email Flow */}
              <div className="flex justify-center items-center gap-6">
                <div
                  className="glass-card p-4 max-w-sm animate-fadeInUp"
                  style={{ animationDelay: "1.2s" }}
                >
                  <div className="text-xs text-muted-foreground mb-2">
                    MANUAL EMAILS
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="text-destructive">
                      😰 "Um, hi... about that invoice..."
                    </div>
                    <div className="text-destructive">
                      ⏰ Takes 20+ minutes to write
                    </div>
                    <div className="text-destructive">📉 Low response rate</div>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <Sparkles
                    className="h-8 w-8 text-brand-purple animate-spin"
                    style={{ animationDelay: "1.5s" }}
                  />
                  <span className="text-sm text-brand-purple mt-2">
                    AI Magic
                  </span>
                </div>

                <div
                  className="glass-card p-4 max-w-sm border-brand-blue/20 bg-brand-blue/5 animate-fadeInUp"
                  style={{ animationDelay: "1.8s" }}
                >
                  <div className="text-xs text-brand-blue mb-2">AI-POWERED</div>
                  <div className="space-y-2 text-sm">
                    <div className="text-green-400">
                      😊 "Hi John! Hope you're well..."
                    </div>
                    <div className="text-green-400">
                      ⚡ Generated in 2 seconds
                    </div>
                    <div className="text-green-400">
                      📈 3x higher response rate
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 - Payment Success */}
            <div className="relative">
              <div className="flex items-center justify-center mb-8">
                <div
                  className="glass-card p-6 rounded-2xl premium-glow animate-pulse"
                  style={{ animationDelay: "2s" }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                      <DollarSign
                        className="h-8 w-8 text-green-400 animate-bounceIn"
                        style={{ animationDelay: "2s" }}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold gradient-text">
                        3. Get Paid Faster
                      </h3>
                      <p className="text-muted-foreground">
                        Automated persistence gets results
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Success Metrics Animation */}
              <div className="grid md:grid-cols-3 gap-6">
                <div
                  className="glass-card p-6 text-center animate-scaleIn"
                  style={{ animationDelay: "2.2s" }}
                >
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    40%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Faster Payments
                  </div>
                </div>
                <div
                  className="glass-card p-6 text-center animate-scaleIn"
                  style={{ animationDelay: "2.4s" }}
                >
                  <div className="text-3xl font-bold text-brand-purple mb-2">
                    90%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Less Time Chasing
                  </div>
                </div>
                <div
                  className="glass-card p-6 text-center animate-scaleIn"
                  style={{ animationDelay: "2.6s" }}
                >
                  <div className="text-3xl font-bold text-brand-blue mb-2">
                    100%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Peace of Mind
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements for Enhanced Animation */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-brand-purple/10 rounded-full blur-xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-32 h-32 bg-brand-blue/10 rounded-full blur-xl animate-float"
            style={{ animationDelay: "3s" }}
          ></div>
          <div
            className="absolute top-1/2 right-20 w-16 h-16 bg-brand-cyan/10 rounded-full blur-lg animate-float"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Autonomous revenue{" "}
              <span className="gradient-text">acceleration engine</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every feature designed to turn your invoices into payments, faster
              and with less stress.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FloatingCard delay={0}>
              <Card className="glass-card border-brand-purple/20 hover:border-brand-purple/40 transition-all duration-500 h-full group hover:scale-105 shimmer-effect">
                <CardHeader>
                  <FileText className="h-10 w-10 text-brand-purple mb-4 group-hover:animate-bounceIn" />
                  <CardTitle className="group-hover:gradient-text transition-all duration-300">
                    Invoice Parsing
                  </CardTitle>
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
              <Card className="glass-card border-brand-blue/20 hover:border-brand-blue/40 transition-all duration-500 h-full group hover:scale-105 shimmer-effect">
                <CardHeader>
                  <Brain className="h-10 w-10 text-brand-blue mb-4 group-hover:animate-bounceIn" />
                  <CardTitle className="group-hover:gradient-text transition-all duration-300">
                    AI-Generated Follow-ups
                  </CardTitle>
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
              <Card className="glass-card border-brand-cyan/20 hover:border-brand-cyan/40 transition-all duration-500 h-full group hover:scale-105 shimmer-effect">
                <CardHeader>
                  <Settings className="h-10 w-10 text-brand-cyan mb-4 group-hover:animate-bounceIn" />
                  <CardTitle className="group-hover:gradient-text transition-all duration-300">
                    Tone Customization
                  </CardTitle>
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
              <Card className="glass-card border-brand-purple/20 hover:border-brand-purple/40 transition-all duration-500 h-full group hover:scale-105 shimmer-effect">
                <CardHeader>
                  <RefreshCw className="h-10 w-10 text-brand-purple mb-4 group-hover:animate-bounceIn" />
                  <CardTitle className="group-hover:gradient-text transition-all duration-300">
                    Auto Resend with Attachment
                  </CardTitle>
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
              <Card className="glass-card border-brand-blue/20 hover:border-brand-blue/40 transition-all duration-500 h-full group hover:scale-105 shimmer-effect">
                <CardHeader>
                  <BarChart3 className="h-10 w-10 text-brand-blue mb-4 group-hover:animate-bounceIn" />
                  <CardTitle className="group-hover:gradient-text transition-all duration-300">
                    Payment Tracking
                  </CardTitle>
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
              <Card className="glass-card border-brand-cyan/20 hover:border-brand-cyan/40 transition-all duration-500 h-full group hover:scale-105 shimmer-effect">
                <CardHeader>
                  <Shield className="h-10 w-10 text-brand-cyan mb-4 group-hover:animate-bounceIn" />
                  <CardTitle className="group-hover:gradient-text transition-all duration-300">
                    Client Memory
                  </CardTitle>
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

      {/* Enterprise Integrations */}
      <section className="py-24 px-4 bg-gradient-to-br from-brand-purple/5 to-brand-blue/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Seamless{" "}
            <span className="gradient-text">enterprise integrations</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Connect with your existing workflow in seconds. Built for scale with
            enterprise-grade security and compliance.
          </p>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
            {[
              { name: "QuickBooks", logo: "📊" },
              { name: "Salesforce", logo: "☁️" },
              { name: "Stripe", logo: "💳" },
              { name: "HubSpot", logo: "🎯" },
              { name: "Slack", logo: "💬" },
              { name: "Zapier", logo: "⚡" },
            ].map((integration, i) => (
              <div
                key={integration.name}
                className="glass-card p-6 hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-4xl mb-3 group-hover:animate-bounce">
                  {integration.logo}
                </div>
                <div className="font-semibold text-sm">{integration.name}</div>
              </div>
            ))}
          </div>

          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 gradient-text">
              Developer-First API
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-purple/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-6 w-6 text-brand-purple" />
                </div>
                <h4 className="font-semibold mb-2">RESTful API</h4>
                <p className="text-sm text-muted-foreground">
                  Complete API access with webhooks and real-time events
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-blue/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-brand-blue" />
                </div>
                <h4 className="font-semibold mb-2">SOC 2 Compliant</h4>
                <p className="text-sm text-muted-foreground">
                  Enterprise security with end-to-end encryption
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <BarChart3 className="h-6 w-6 text-brand-cyan" />
                </div>
                <h4 className="font-semibold mb-2">Real-time Analytics</h4>
                <p className="text-sm text-muted-foreground">
                  Detailed insights and performance metrics dashboard
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Technology Deep Dive */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Next-gen AI{" "}
              <span className="gradient-text">technology stack</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powered by advanced language models and proprietary algorithms
              trained on millions of successful payment conversations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="glass-card p-6 border-l-4 border-brand-purple">
                <h3 className="text-xl font-bold mb-3 gradient-text">
                  Neural Payment Intelligence
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our proprietary AI analyzes payment patterns, client behavior,
                  and industry trends to optimize follow-up timing and
                  messaging.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" /> 97%
                    accuracy in payment prediction
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" /> Real-time
                    sentiment analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />{" "}
                    Multi-language support (40+ languages)
                  </li>
                </ul>
              </div>

              <div className="glass-card p-6 border-l-4 border-brand-blue">
                <h3 className="text-xl font-bold mb-3 gradient-text">
                  Adaptive Learning Engine
                </h3>
                <p className="text-muted-foreground mb-4">
                  Machine learning algorithms that improve with every
                  interaction, personalizing strategies for each client
                  relationship.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />{" "}
                    Continuous model optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />{" "}
                    Client-specific behavioral modeling
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />{" "}
                    Industry-specific training data
                  </li>
                </ul>
              </div>
            </div>

            <div className="glass-card p-8 premium-glow">
              <h3 className="text-2xl font-bold mb-6 text-center gradient-text">
                AI Performance Metrics
              </h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">
                    Response Rate Improvement
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-r from-brand-purple to-brand-blue rounded-full animate-pulse"></div>
                    </div>
                    <span className="font-bold text-brand-purple">340%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">
                    Collection Time Reduction
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full animate-pulse"></div>
                    </div>
                    <span className="font-bold text-brand-blue">75%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">
                    Client Satisfaction Score
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="w-5/6 h-full bg-gradient-to-r from-brand-cyan to-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <span className="font-bold text-green-400">9.2/10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-24 px-4 bg-gradient-to-r from-muted/20 to-transparent">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Calculate your <span className="gradient-text">ROI potential</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            See how much revenue you could recover with FollowUpAI
          </p>

          <div className="glass-card p-8 max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Monthly Invoice Volume
                  </label>
                  <div className="glass p-3 rounded-lg border border-border">
                    <span className="text-2xl font-bold gradient-text">50</span>
                    <span className="text-muted-foreground ml-2">
                      invoices/month
                    </span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Average Invoice Value
                  </label>
                  <div className="glass p-3 rounded-lg border border-border">
                    <span className="text-2xl font-bold gradient-text">
                      $2,500
                    </span>
                    <span className="text-muted-foreground ml-2">
                      per invoice
                    </span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Current Late Payment Rate
                  </label>
                  <div className="glass p-3 rounded-lg border border-border">
                    <span className="text-2xl font-bold text-destructive">
                      25%
                    </span>
                    <span className="text-muted-foreground ml-2">
                      of invoices
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="glass-card p-6 border-brand-purple/20 bg-brand-purple/5">
                  <h3 className="text-xl font-bold mb-4 gradient-text">
                    Projected Results with FollowUpAI
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Monthly Revenue at Risk:</span>
                      <span className="font-bold">$31,250</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Recovery with FollowUpAI:</span>
                      <span className="font-bold text-green-400">$28,125</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly ROI:</span>
                      <span className="font-bold text-green-400">3,125%</span>
                    </div>
                    <div className="border-t border-border pt-3 mt-4">
                      <div className="flex justify-between text-lg">
                        <span className="font-bold">
                          Annual Revenue Recovery:
                        </span>
                        <span className="font-bold gradient-text">
                          $337,500
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
            <Card className="glass-card relative hover:scale-105 transition-all duration-500 shimmer-effect group">
              <CardHeader>
                <CardTitle className="text-2xl group-hover:gradient-text transition-all duration-300">
                  Free
                </CardTitle>
                <div className="text-4xl font-bold group-hover:text-brand-purple transition-all duration-300">
                  $0
                </div>
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
            <Card className="glass-card relative border-brand-purple/40 bg-brand-purple/5 hover:scale-110 transition-all duration-500 premium-glow group">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-purple text-white animate-pulse">
                Most Popular
              </Badge>
              <CardHeader>
                <CardTitle className="text-2xl gradient-text">Pro</CardTitle>
                <div className="text-4xl font-bold gradient-text">
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
            <Card className="glass-card relative hover:scale-105 transition-all duration-500 shimmer-effect group">
              <CardHeader>
                <CardTitle className="text-2xl group-hover:gradient-text transition-all duration-300">
                  Premium
                </CardTitle>
                <div className="text-4xl font-bold group-hover:text-brand-blue transition-all duration-300">
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

      {/* Success Stories */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real results from{" "}
              <span className="gradient-text">real businesses</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Case studies from companies scaling with FollowUpAI
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="glass-card p-8 hover:scale-105 transition-all duration-500 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-brand-purple/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏢</span>
                </div>
                <div>
                  <h3 className="font-bold">Design Agency</h3>
                  <p className="text-sm text-muted-foreground">50+ employees</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">
                      $180K
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Recovered in 6 months
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-purple">
                      60%
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Faster collection
                    </div>
                  </div>
                </div>
                <blockquote className="text-sm italic text-muted-foreground border-l-2 border-brand-purple pl-4">
                  "FollowUpAI transformed our cash flow. We went from constantly
                  chasing payments to having clients pay proactively."
                </blockquote>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="glass-card p-8 hover:scale-105 transition-all duration-500 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-brand-blue/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="font-bold">SaaS Startup</h3>
                  <p className="text-sm text-muted-foreground">Series A</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">
                      $2.1M
                    </div>
                    <div className="text-xs text-muted-foreground">
                      ARR improvement
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-blue">
                      95%
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Collection rate
                    </div>
                  </div>
                </div>
                <blockquote className="text-sm italic text-muted-foreground border-l-2 border-brand-blue pl-4">
                  "The ROI was immediate. FollowUpAI paid for itself in the
                  first week and became critical to our growth metrics."
                </blockquote>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="glass-card p-8 hover:scale-105 transition-all duration-500 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-brand-cyan/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="font-bold">Consulting Firm</h3>
                  <p className="text-sm text-muted-foreground">500+ clients</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">45%</div>
                    <div className="text-xs text-muted-foreground">
                      Revenue increase
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-cyan">
                      87%
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Client retention
                    </div>
                  </div>
                </div>
                <blockquote className="text-sm italic text-muted-foreground border-l-2 border-brand-cyan pl-4">
                  "Our clients actually prefer the AI follow-ups. They're more
                  consistent and professional than our manual emails."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-24 px-4 bg-gradient-to-br from-muted/20 to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Enterprise-grade{" "}
            <span className="gradient-text">security & compliance</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Built with security-first architecture and compliance standards that
            enterprise customers demand.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
              <Shield className="h-12 w-12 text-brand-purple mx-auto mb-4" />
              <h3 className="font-bold mb-2">SOC 2 Type II</h3>
              <p className="text-sm text-muted-foreground">
                Certified security controls and auditing
              </p>
            </div>
            <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="font-bold mb-2">GDPR Compliant</h3>
              <p className="text-sm text-muted-foreground">
                Full data protection and privacy compliance
              </p>
            </div>
            <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="font-bold mb-2">256-bit Encryption</h3>
              <p className="text-sm text-muted-foreground">
                End-to-end encryption for all data
              </p>
            </div>
            <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold mb-2">99.9% Uptime SLA</h3>
              <p className="text-sm text-muted-foreground">
                Enterprise reliability guarantee
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold">SOC 2</div>
            <div className="text-2xl font-bold">GDPR</div>
            <div className="text-2xl font-bold">HIPAA</div>
            <div className="text-2xl font-bold">ISO 27001</div>
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
            <Card className="glass-card p-8 max-w-2xl mx-auto shimmer-effect premium-glow hover:scale-105 transition-all duration-500">
              <CardContent className="space-y-6">
                <div className="flex justify-center space-x-1">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400 animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ),
                  )}
                </div>
                <blockquote className="text-xl italic leading-relaxed text-focus-in">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div className="border-t border-border pt-6">
                  <div className="font-semibold text-lg gradient-text">
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

      {/* Investor-Focused CTA */}
      <section className="py-24 px-4 bg-gradient-to-r from-brand-purple to-brand-blue relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
          <div
            className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/10 rounded-full animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto text-center text-white relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            The future of B2B payments is{" "}
            <span className="text-white/90">autonomous</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-4xl mx-auto">
            Join the revenue acceleration revolution. FollowUpAI is transforming
            how 10,000+ businesses collect payments.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="glass-card p-6 bg-white/10 backdrop-blur-lg">
              <div className="text-3xl font-bold mb-2">$2.4M+</div>
              <div className="text-white/80">Revenue Recovered</div>
            </div>
            <div className="glass-card p-6 bg-white/10 backdrop-blur-lg">
              <div className="text-3xl font-bold mb-2">340%</div>
              <div className="text-white/80">ROI Average</div>
            </div>
            <div className="glass-card p-6 bg-white/10 backdrop-blur-lg">
              <div className="text-3xl font-bold mb-2">40%</div>
              <div className="text-white/80">Faster Collections</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-white text-brand-purple hover:bg-white/90 px-8 py-6 text-lg font-semibold rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-sm"
            >
              <Users className="mr-2 h-5 w-5" />
              Schedule Demo
            </Button>
          </div>

          <p className="text-white/70 text-sm">
            No credit card required • 14-day free trial • Enterprise SSO
            available
          </p>
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
                    Enterprise
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    API & Integrations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Security
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
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    ROI Calculator
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    AI Technology
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Investors
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Press Kit
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

          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-muted-foreground">
            <p>&copy; 2024 FollowUpAI. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white font-bold text-sm">
                  Y
                </div>
                <span className="text-sm">Y Combinator S24</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white font-bold text-sm">
                  $
                </div>
                <span className="text-sm">Series A Ready</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
