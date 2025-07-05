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
  FileText,
  DollarSign,
  Clock,
  TrendingUp,
  CheckCircle,
  Zap,
  Shield,
  BarChart3,
  Mail,
  Smartphone,
  Globe,
  ArrowRight,
  Sparkles,
  Brain,
  Infinity,
  Cpu,
  Orbit,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navigation />

      {/* Quantum Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-brand-purple/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Quantum grid */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <pattern
                id="quantum-grid"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 100 0 L 0 0 0 100"
                  fill="none"
                  stroke="url(#quantum-gradient)"
                  strokeWidth="1"
                />
              </pattern>
              <linearGradient id="quantum-gradient">
                <stop offset="0%" stopColor="hsl(var(--brand-purple))" />
                <stop offset="100%" stopColor="hsl(var(--brand-cyan))" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#quantum-grid)" />
          </svg>
        </div>

        {/* Interactive glow effect */}
        <div
          className="absolute w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle,
              hsl(var(--brand-purple) / 0.1) 0%,
              hsl(var(--brand-blue) / 0.05) 50%,
              transparent 100%)`,
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: "all 0.3s ease",
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative py-32 px-4 min-h-screen flex items-center">
        <div className="container mx-auto text-center relative z-10">
          <Badge
            variant="outline"
            className="mb-8 glass border-brand-purple/30 backdrop-blur-xl"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Quantum-Powered Invoice Revolution
          </Badge>

          <div className="relative mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none">
              <span className="block gradient-text animate-pulse">QUANTUM</span>
              <span className="block text-white/90">BILLING</span>
              <span className="block gradient-text">MATRIX</span>
            </h1>

            {/* Floating quantum symbols */}
            <div className="absolute inset-0 pointer-events-none">
              <Orbit className="absolute top-4 right-4 w-8 h-8 text-brand-cyan/40 animate-spin" />
              <Brain className="absolute bottom-8 left-8 w-6 h-6 text-brand-purple/40 animate-pulse" />
              <Infinity className="absolute top-1/2 left-4 w-10 h-10 text-brand-blue/40 animate-bounce" />
              <Cpu className="absolute bottom-4 right-8 w-7 h-7 text-brand-cyan/40 animate-pulse" />
            </div>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Harness the power of{" "}
            <span className="text-brand-purple font-semibold">
              quantum algorithms
            </span>{" "}
            and
            <span className="text-brand-blue font-semibold">
              {" "}
              AI neural networks
            </span>{" "}
            to revolutionize your financial operations. Experience billing at
            the speed of light.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              asChild
              size="lg"
              className="gradient-bg hover:opacity-90 text-lg px-12 py-6 rounded-2xl group relative overflow-hidden"
            >
              <Link to="/dashboard">
                <span className="relative z-10 flex items-center">
                  Initialize Quantum Core
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-cyan opacity-0 group-hover:opacity-20 transition-opacity" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-12 py-6 rounded-2xl glass border-brand-purple/30 hover:border-brand-purple/60 transition-all"
            >
              <Zap className="mr-2 h-5 w-5" />
              Quantum Demo
            </Button>
          </div>

          {/* Quantum Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass-card relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/10 to-brand-blue/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="text-4xl font-bold gradient-text mb-2">∞</div>
                <div className="text-sm text-muted-foreground">
                  Quantum Entangled Payments
                </div>
              </div>
            </div>
            <div className="glass-card relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 to-brand-cyan/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="text-4xl font-bold gradient-text mb-2">
                  0.001ms
                </div>
                <div className="text-sm text-muted-foreground">
                  Quantum Processing Speed
                </div>
              </div>
            </div>
            <div className="glass-card relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/10 to-brand-purple/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="text-4xl font-bold gradient-text mb-2">
                  100%
                </div>
                <div className="text-sm text-muted-foreground">
                  Quantum Accuracy Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Everything you need to{" "}
              <span className="gradient-text">get paid</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From creation to collection, InvoIQ handles every aspect of your
              invoicing workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glass animated-border">
              <CardHeader>
                <Zap className="h-10 w-10 text-brand-purple mb-4" />
                <CardTitle>AI-Powered Automation</CardTitle>
                <CardDescription>
                  Let AI handle recurring invoices, payment reminders, and
                  follow-ups automatically
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass animated-border">
              <CardHeader>
                <FileText className="h-10 w-10 text-brand-blue mb-4" />
                <CardTitle>Smart Invoice Creation</CardTitle>
                <CardDescription>
                  Create professional invoices in seconds with intelligent
                  templates and auto-fill
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass animated-border">
              <CardHeader>
                <BarChart3 className="h-10 w-10 text-brand-cyan mb-4" />
                <CardTitle>Real-time Analytics</CardTitle>
                <CardDescription>
                  Track payment trends, cash flow, and client behavior with
                  detailed insights
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass animated-border">
              <CardHeader>
                <Mail className="h-10 w-10 text-brand-purple mb-4" />
                <CardTitle>Smart Reminders</CardTitle>
                <CardDescription>
                  AI-crafted payment reminders that maintain client
                  relationships while ensuring payment
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass animated-border">
              <CardHeader>
                <Smartphone className="h-10 w-10 text-brand-blue mb-4" />
                <CardTitle>Mobile-First Design</CardTitle>
                <CardDescription>
                  Manage invoices on the go with our responsive mobile interface
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass animated-border">
              <CardHeader>
                <Shield className="h-10 w-10 text-brand-cyan mb-4" />
                <CardTitle>Bank-Level Security</CardTitle>
                <CardDescription>
                  Your financial data is protected with enterprise-grade
                  security and encryption
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-purple/5 to-brand-blue/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How <span className="gradient-text">InvoIQ</span> works
            </h2>
            <p className="text-xl text-muted-foreground">
              Get started in minutes, not hours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="glass-card mb-6">
                <div className="text-4xl font-bold gradient-text mb-4">1</div>
                <FileText className="h-12 w-12 text-brand-purple mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Create Invoice</h3>
              <p className="text-muted-foreground">
                Use our AI-powered templates to create professional invoices in
                seconds
              </p>
            </div>

            <div className="text-center">
              <div className="glass-card mb-6">
                <div className="text-4xl font-bold gradient-text mb-4">2</div>
                <Mail className="h-12 w-12 text-brand-blue mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Send & Track</h3>
              <p className="text-muted-foreground">
                Send invoices instantly and track when they're viewed,
                downloaded, or paid
              </p>
            </div>

            <div className="text-center">
              <div className="glass-card mb-6">
                <div className="text-4xl font-bold gradient-text mb-4">3</div>
                <DollarSign className="h-12 w-12 text-brand-cyan mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Paid</h3>
              <p className="text-muted-foreground">
                Automated reminders and multiple payment options ensure faster
                payment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="glass-card max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="gradient-text">get paid faster</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of businesses that have transformed their invoicing
              with InvoIQ
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="gradient-bg hover:opacity-90 text-lg px-8 py-6"
              >
                <Link to="/dashboard">Start Free Trial</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="text-lg px-8 py-6 glass border-brand-purple/30"
              >
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Cancel anytime
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                14-day free trial
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
