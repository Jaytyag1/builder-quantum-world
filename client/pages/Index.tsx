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
    document.documentElement.classList.add("dark");
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
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/20 backdrop-blur-lg bg-background/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold gradient-text">InvoIQ</h1>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#features"
                  className="text-foreground hover:text-brand-purple transition-colors duration-200 px-3 py-2 text-sm font-medium"
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="text-foreground hover:text-brand-purple transition-colors duration-200 px-3 py-2 text-sm font-medium"
                >
                  Pricing
                </a>
                <a
                  href="#about"
                  className="text-foreground hover:text-brand-purple transition-colors duration-200 px-3 py-2 text-sm font-medium"
                >
                  About
                </a>
              </div>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                className="text-foreground hover:text-brand-purple hover:bg-brand-purple/10 transition-all duration-200"
              >
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-purple/80 hover:to-brand-blue/80 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105">
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                className="text-foreground hover:text-brand-purple"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center pr-8">
            {/* Left Content */}
            <div className="space-y-8 pl-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-purple/10 to-brand-blue/10 border border-brand-purple/20">
                <div className="w-2 h-2 bg-brand-purple rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-brand-purple">
                  AI-Powered Invoice Management
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Stop chasing clients
                <span className="gradient-text block">&nbsp;to pay.</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                FollowUpAI reads your invoices and follows up on your behalf.
                Transform awkward payment chases into automated, professional
                reminders.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-purple/80 hover:to-brand-blue/80 text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
                >
                  <Upload className="mr-2 h-5 w-5" />
                  Upload Invoice
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-brand-purple text-brand-purple hover:bg-brand-purple/5 px-8 py-6 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 transform"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-8">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    500+ waitlist
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2"></span>
                </div>
              </div>
            </div>

            {/* Right Dashboard Mockup */}
            <div className="relative">
              <div className="animated-border glass-card p-6 max-w-2xl">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold">Invoicing</h3>
                  <Button
                    size="sm"
                    className="bg-brand-purple hover:bg-brand-purple/80 text-white"
                  >
                    + Create Invoice
                  </Button>
                </div>

                {/* Draft Notice */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">
                      You have a draft invoice.
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Finish it up and send it to your client.
                  </p>
                </div>

                {/* Invoice Table */}
                <div className="space-y-3">
                  <div className="grid grid-cols-6 gap-2 text-xs font-medium text-muted-foreground pb-2 border-b">
                    <span>Recipient</span>
                    <span>Amount</span>
                    <span>Status</span>
                    <span>Due date</span>
                    <span>Invoice no.</span>
                    <span>Invoice date</span>
                  </div>

                  {/* Invoice Rows */}
                  {[
                    {
                      name: "Ethan Walker",
                      amount: "$200.00",
                      status: "Processing",
                      color: "blue",
                      due: "Apr 20, 2025",
                      invoice: "INC-006 Abc...",
                      date: "Mar 10, 2025",
                    },
                    {
                      name: "Noah Bennett",
                      amount: "$1680.00",
                      status: "Paid",
                      color: "green",
                      due: "Apr 02, 2025",
                      invoice: "INC-006 Abc...",
                      date: "Mar 02, 2025",
                    },
                    {
                      name: "Emma Sullivan",
                      amount: "$1250.00",
                      status: "Cancelled",
                      color: "gray",
                      due: "Mar 26, 2025",
                      invoice: "INC-006 Abc...",
                      date: "Feb 06, 2025",
                    },
                    {
                      name: "Lucas Hayes",
                      amount: "$2230.00",
                      status: "Overdue",
                      color: "red",
                      due: "Mar 10, 2025",
                      invoice: "INC-006 Abc...",
                      date: "Jan30, 2025",
                    },
                    {
                      name: "Chloe Reed",
                      amount: "$3594.00",
                      status: "Paid",
                      color: "green",
                      due: "Mar 02, 2025",
                      invoice: "INC-006 Abc...",
                      date: "Jan 06, 2025",
                    },
                  ].map((invoice, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-6 gap-2 text-xs py-2 hover:bg-muted/20 rounded transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full flex items-center justify-center text-white font-bold text-xs">
                          {invoice.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <span className="font-medium">{invoice.name}</span>
                      </div>
                      <span className="font-medium">{invoice.amount}</span>
                      <span
                        className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                          invoice.color === "blue"
                            ? "bg-blue-100 text-blue-700"
                            : invoice.color === "green"
                              ? "bg-green-100 text-green-700"
                              : invoice.color === "red"
                                ? "bg-red-100 text-red-700"
                                : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {invoice.status}
                      </span>
                      <span>{invoice.due}</span>
                      <span className="text-muted-foreground">
                        {invoice.invoice}
                      </span>
                      <span>{invoice.date}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full animate-pulse"></div>
              <div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
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

      {/* Premium Workflow Transformation Section */}
      <section className="py-32 px-4 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-purple/20 to-brand-blue/20 border border-brand-purple/30 mb-8 clean-glass">
              <div className="w-3 h-3 bg-brand-purple rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-brand-purple">
                Intelligent Automation
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 gradient-text">
              Transform your payment process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete end-to-end automation with intelligent tracking,
              analytics, and human intervention when needed
            </p>
          </div>

          {/* 3D Workflow Steps */}
          <div className="premium-3d space-y-24 px-5">
            {/* Step 1: AI Analysis */}
            <div className="workflow-step">
              <div className="grid lg:grid-cols-2 gap-12 items-center px-5">
                <div className="floating-3d">
                  <div className="glass-card p-8 hologram-effect">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-brand-purple to-brand-blue rounded-2xl flex items-center justify-center premium-shadow">
                        <Brain className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold gradient-text">
                          Neural Invoice Analysis
                        </h3>
                        <p className="text-muted-foreground">
                          15ms processing time
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 rounded-lg bg-brand-purple/10">
                        <span>Client Detection</span>
                        <span className="text-green-400 font-mono">
                          ✓ 99.7%
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-brand-blue/10">
                        <span>Amount Extraction</span>
                        <span className="text-green-400 font-mono">
                          ✓ $2,500
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-brand-cyan/10">
                        <span>Due Date Analysis</span>
                        <span className="text-green-400 font-mono">
                          ✓ Mar 15
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-3xl font-bold">
                    Step 1: AI Processes Your Invoice
                  </h4>
                  <p className="text-lg text-muted-foreground">
                    Our neural network instantly analyzes every detail of your
                    invoice with superhuman accuracy. No more manual data entry
                    or human error.
                  </p>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-destructive">
                        30min
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Manual Process
                      </div>
                    </div>
                    <ArrowRight className="h-8 w-8 text-brand-purple mt-2" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">
                        3sec
                      </div>
                      <div className="text-sm text-muted-foreground">
                        AI Process
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: AI Follow-up with Smart Tracking */}
            <div className="workflow-step">
              <div className="grid lg:grid-cols-2 gap-12 items-center px-5">
                <div className="order-2 lg:order-1 space-y-6">
                  <h4 className="text-3xl font-bold">
                    Step 2: AI Sends & Tracks Everything
                  </h4>
                  <p className="text-lg text-muted-foreground">
                    Our AI doesn't just send follow-ups—it tracks every
                    interaction, monitors engagement, and alerts you when human
                    intervention is needed.
                  </p>

                  {/* Live Typing Animation */}
                  <div className="animated-border glass-card p-6 max-w-lg">
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
                        To: john@company.com
                      </div>
                      <div className="text-muted-foreground">
                        Subject: Payment reminder - Invoice #2024-001
                      </div>
                      <div className="mt-4 leading-relaxed">
                        <TypingAnimation
                          text="Hi John, I hope you're having a great week! I wanted to follow up on Invoice #2024-001 for $2,500 that was sent on February 15th. The payment was due on March 1st, and I haven't received it yet. I understand that things can get busy, so I wanted to check if there are any questions about the invoice or if there's anything I can help clarify. Looking forward to hearing from you!"
                          className="text-foreground"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Human Intervention Alert */}
                  <div className="glass-card p-4 border-yellow-500/30 bg-yellow-500/10">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center">
                        <Users className="h-4 w-4 text-yellow-400" />
                      </div>
                      <span className="font-semibold text-yellow-400">
                        Human Intervention Required
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Client replied: "Having cash flow issues this month, can
                      we discuss payment plan?" -
                      <span className="text-yellow-400 underline cursor-pointer">
                        View & Respond
                      </span>
                    </p>
                  </div>
                </div>

                <div
                  className="order-1 lg:order-2 floating-3d"
                  style={{ animationDelay: "2s" }}
                >
                  <div className="glass-card p-8 clean-glass">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-2xl flex items-center justify-center premium-shadow">
                        <BarChart3 className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold gradient-text">
                          Smart Analytics
                        </h3>
                        <p className="text-muted-foreground">
                          Real-time engagement tracking
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg bg-gradient-to-r from-brand-purple/20 to-brand-blue/20 border border-brand-purple/30">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold">Open Rate</span>
                          <span className="text-green-400">94.2%</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold">Reply Rate</span>
                          <span className="text-green-400">67.8%</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold">
                            Human Alerts Sent
                          </span>
                          <span className="text-yellow-400">3 today</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">Payment Success</span>
                          <span className="text-green-400">87%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Complete Monitoring & Results */}
            <div className="workflow-step">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="floating-3d" style={{ animationDelay: "4s" }}>
                  <div className="glass-card p-8 clean-glass">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-brand-cyan to-green-400 rounded-2xl flex items-center justify-center premium-shadow">
                        <Zap className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold gradient-text">
                          Complete Automation
                        </h3>
                        <p className="text-muted-foreground">
                          Full visibility & control
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 rounded-lg bg-green-400/20">
                        <div className="text-3xl font-bold text-green-400">
                          94.2%
                        </div>
                        <div className="text-sm">Open Rate</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-brand-purple/20">
                        <div className="text-3xl font-bold text-brand-purple">
                          67.8%
                        </div>
                        <div className="text-sm">Reply Rate</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-brand-blue/20">
                        <div className="text-3xl font-bold text-brand-blue">
                          87%
                        </div>
                        <div className="text-sm">Payment Success</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-brand-cyan/20">
                        <div className="text-3xl font-bold text-brand-cyan">
                          24/7
                        </div>
                        <div className="text-sm">Monitoring</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-3xl font-bold">
                    Step 3: Complete Oversight & Results
                  </h4>
                  <p className="text-lg text-muted-foreground">
                    Get complete visibility into every interaction while
                    maintaining full control. Our system handles routine tasks
                    and escalates when you're needed.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-green-400/10 border border-green-400/20">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Real-time open & reply rate tracking</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-brand-purple/10 border border-brand-purple/20">
                      <CheckCircle className="h-6 w-6 text-brand-purple" />
                      <span>Automatic payment status updates</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-brand-blue/10 border border-brand-blue/20">
                      <CheckCircle className="h-6 w-6 text-brand-blue" />
                      <span>Smart human intervention alerts</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-yellow-400/10 border border-yellow-400/20">
                      <Users className="h-6 w-6 text-yellow-400" />
                      <span>Instant notifications for complex responses</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background Effects */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-72 h-72 bg-brand-blue/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/3 w-48 h-48 bg-brand-cyan/10 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-purple/10 to-brand-blue/10 border border-brand-purple/20 mb-6">
              <div className="w-2 h-2 bg-brand-purple rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-brand-purple">
                Your invoice follow-up assistant — powered by GPT and emotional
                intelligence
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Chase Less.{" "}
              <span className="gradient-text block md:inline">
                Get Paid Faster.
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-5xl mx-auto leading-relaxed mb-8">
              Your AI-powered invoice follow-up agent that reads, writes, and
              reminds — so you don't have to.
              <br />
              Human-like emails, smart tone, and behavior-aware nudges that
              actually get you paid.
            </p>

            {/* Live Feature Showcase */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-5">
              <div className="animated-border glass-card hover:scale-105 transition-all duration-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full flex items-center justify-center">
                    <Clock className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-semibold">Avg Response Time</span>
                </div>
                <div className="text-2xl font-bold gradient-text">~5 sec</div>
                <div className="text-sm text-muted-foreground">
                  From upload to follow-up
                </div>
              </div>

              <div className="animated-border glass-card hover:scale-105 transition-all duration-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full flex items-center justify-center">
                    <MessageSquare className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-semibold">AI Follow-Up Accuracy</span>
                </div>
                <div className="text-2xl font-bold gradient-text">93.7%</div>
                <div className="text-sm text-muted-foreground">
                  Opens or replies rate
                </div>
              </div>

              <div className="animated-border glass-card hover:scale-105 transition-all duration-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-brand-cyan to-green-400 rounded-full flex items-center justify-center">
                    <DollarSign className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-semibold">
                    Payment Collection Boost
                  </span>
                </div>
                <div className="text-2xl font-bold gradient-text">+32%</div>
                <div className="text-sm text-muted-foreground">
                  Average improvement
                </div>
              </div>
            </div>

            {/* Trust Statement */}
            <p className="text-center text-muted-foreground italic mb-8 max-w-3xl mx-auto">
              "Based on real client testing, InvoIQ helped freelancers collect
              unpaid invoices 32% faster."
            </p>

            {/* Animated Message Preview */}
            <div className="max-w-md mx-auto mb-12">
              <div className="animated-border glass-card p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full flex items-center justify-center">
                    <MessageSquare className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-medium">AI Agent</span>
                  <span className="text-xs text-green-400">● Online</span>
                </div>
                <div className="text-sm leading-relaxed">
                  <TypingAnimation
                    text="Hi James — just checking in on the invoice from last week. Let me know if you need anything from me!"
                    className="text-foreground"
                  />
                </div>
                <div className="text-xs text-muted-foreground mt-2 italic">
                  (sent automatically by your agent)
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FloatingCard delay={0}>
              <Card className="animated-border glass-card transition-all duration-500 h-full group hover:scale-105 premium-shadow">
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
              <Card className="animated-border glass-card transition-all duration-500 h-full group hover:scale-105 premium-shadow">
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
              <Card className="animated-border glass-card transition-all duration-500 h-full group hover:scale-105 premium-shadow">
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
              <Card className="animated-border glass-card transition-all duration-500 h-full group hover:scale-105 premium-shadow">
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
              <Card className="animated-border glass-card transition-all duration-500 h-full group hover:scale-105 premium-shadow">
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
              <Card className="animated-border glass-card transition-all duration-500 h-full group hover:scale-105 premium-shadow">
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

      {/* Freelancer Tools Integration */}
      <section className="py-24 px-4 bg-gradient-to-br from-brand-purple/5 to-brand-blue/5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Connect With the{" "}
            <span className="gradient-text">Tools You Already Use</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Works with your favorite platforms. No code. No setup.
          </p>

          {/* 3x2 Integration Grid */}
          <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {[
              {
                name: "Gmail",
                logo: "✉️",
                tooltip: "Send follow-ups from Gmail",
              },
              {
                name: "Google Drive",
                logo: "💾",
                tooltip: "Attach invoices from Drive",
              },
              { name: "PayPal", logo: "💰", tooltip: "Upload PayPal invoices" },
              {
                name: "Notion",
                logo: "📝",
                tooltip: "Sync client tasks from Notion",
              },
              {
                name: "Calendly",
                logo: "📅",
                tooltip: "Follow up after meetings",
              },
              {
                name: "Zapier",
                logo: "⚡",
                tooltip: "Connect any tool you use",
              },
            ].map((integration, i) => (
              <div
                key={integration.name}
                className="relative group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="glass-card p-8 hover:scale-105 transition-all duration-500 cursor-pointer premium-shadow">
                  <div className="text-5xl mb-4 group-hover:animate-pulse">
                    {integration.logo}
                  </div>
                  <div className="font-semibold text-lg text-white">
                    {integration.name}
                  </div>

                  {/* Hover Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-brand-purple/90 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                    {integration.tooltip}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mini Copy */}
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed">
              InvoIQ connects with your daily tools — so you can send follow-ups
              without switching tabs.
              <br />
              <strong className="text-foreground">
                No setup. No Zapier maze. Just connect and go.
              </strong>
            </p>
          </div>

          {/* Bonus Features Strip */}
          <div className="glass-card p-8 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center space-y-3">
                <div className="text-2xl">🔁</div>
                <h4 className="font-semibold">Gmail Sync</h4>
                <p className="text-sm text-muted-foreground">
                  Detect replies and send auto follow-ups
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="text-2xl">📎</div>
                <h4 className="font-semibold">Drive Support</h4>
                <p className="text-sm text-muted-foreground">
                  Attach invoices directly from GDrive
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="text-2xl">����</div>
                <h4 className="font-semibold">PayPal Friendly</h4>
                <p className="text-sm text-muted-foreground">
                  Upload PayPal invoices or screenshots
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="text-2xl">📅</div>
                <h4 className="font-semibold">Works With Calendly</h4>
                <p className="text-sm text-muted-foreground">
                  Know when client is booked, follow up after
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart AI Technology */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-900/50 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built with Smart AI.{" "}
              <span className="gradient-text">Trained to Get You Paid.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI doesn't just send emails—it understands your clients,
              learns from every interaction, and gets smarter with each payment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side - AI Feature Cards */}
            <div className="space-y-8">
              <div className="glass-card p-8 border border-brand-purple/30 hover:border-brand-purple/50 transition-all duration-500 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-purple to-brand-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold gradient-text">
                    Neural Payment Intelligence
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6 text-lg">
                  Predicts when to follow up, in what tone, and how often —
                  based on your client's behavior.
                </p>
                <div className="grid gap-4">
                  <div className="flex items-center gap-3 group/item">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                    </div>
                    <span className="text-foreground font-medium">
                      97% accuracy in payment prediction
                    </span>
                  </div>
                  <div className="flex items-center gap-3 group/item">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                    </div>
                    <span className="text-foreground font-medium">
                      Real-time sentiment shift detection
                    </span>
                  </div>
                  <div className="flex items-center gap-3 group/item">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                    </div>
                    <span className="text-foreground font-medium">
                      Understands 40+ languages
                    </span>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 border border-brand-blue/30 hover:border-brand-blue/50 transition-all duration-500 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold gradient-text">
                    Adaptive Learning Engine
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6 text-lg">
                  Every email improves it. The AI learns from your clients — not
                  just the internet.
                </p>
                <div className="grid gap-4">
                  <div className="flex items-center gap-3 group/item">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                    </div>
                    <span className="text-foreground font-medium">
                      Learns tone preferences for each client
                    </span>
                  </div>
                  <div className="flex items-center gap-3 group/item">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                    </div>
                    <span className="text-foreground font-medium">
                      Personalizes follow-up timing
                    </span>
                  </div>
                  <div className="flex items-center gap-3 group/item">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                    </div>
                    <span className="text-foreground font-medium">
                      Constantly optimizes success rate
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Performance Metrics */}
            <div className="glass-card p-8 bg-gradient-to-br from-brand-purple/5 to-brand-blue/5 border border-brand-purple/20">
              <h3 className="text-3xl font-bold mb-8 text-center">
                <span className="gradient-text">AI Performance Boost</span>
              </h3>
              <div className="space-y-8">
                <div className="group cursor-pointer">
                  <div className="flex justify-between items-center mb-3">
                    <div className="gap-3">Reply Rate Increase</div>
                    <span className="text-4xl font-bold gradient-text group-hover:scale-110 transition-transform">
                      +340%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-muted/30 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan rounded-full animate-pulse"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>

                <div className="group cursor-pointer">
                  <div className="flex justify-between items-center mb-3">
                    <div className="gap-3">Time to Payment Cut By</div>
                    <span className="text-4xl font-bold gradient-text group-hover:scale-110 transition-transform">
                      –75%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-muted/30 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full animate-pulse"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>

                <div className="group cursor-pointer">
                  <div className="flex justify-between items-center mb-3">
                    <div className="gap-3">Client Experience Score</div>
                    <span className="text-4xl font-bold gradient-text group-hover:scale-110 transition-transform">
                      9.2/10
                    </span>
                  </div>
                  <div className="w-full h-3 bg-muted/30 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-brand-cyan to-green-400 rounded-full animate-pulse"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Tooltip on hover */}
              <div className="mt-6 p-4 bg-brand-purple/10 rounded-lg border border-brand-purple/20">
                <p className="text-sm text-muted-foreground text-center">
                  <span className="text-brand-purple font-medium">
                    Based on 10,000+ invoices processed
                  </span>{" "}
                  • Real client data from Q4 2024
                </p>
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
