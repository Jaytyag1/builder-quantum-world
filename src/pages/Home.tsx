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
      <section className="relative py-20 px-4 min-h-screen flex items-center">
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <Badge
                variant="outline"
                className="glass border-brand-purple/30 backdrop-blur-xl w-fit"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Invoice Management
              </Badge>

              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">Stop chasing</span>
                  <br />
                  <span className="text-white">clients</span>
                  <br />
                  <span className="gradient-text">to pay.</span>
                </h1>

                <div className="relative p-6 glass border border-brand-blue/20 rounded-2xl">
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    InvoIQ reads your invoices and follows up on your behalf.
                    Transform awkward payment chases into automated,
                    professional reminders.
                  </p>
                  {/* Quantum glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/5 via-brand-blue/5 to-brand-cyan/5 rounded-2xl animate-pulse" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button
                  asChild
                  size="lg"
                  className="gradient-bg hover:opacity-90 text-lg px-8 py-4 rounded-xl group relative overflow-hidden shadow-2xl"
                >
                  <Link to="/dashboard">
                    <span className="relative z-10 flex items-center">
                      <ArrowRight className="mr-2 h-5 w-5" />
                      Upload Invoice
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan opacity-0 group-hover:opacity-30 transition-opacity" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4 rounded-xl glass border-brand-purple/30 hover:border-brand-purple/60 transition-all"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue border-2 border-background flex items-center justify-center text-xs font-bold text-white"
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  500+ waitlist
                </span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Invoice Dashboard */}
            <div className="relative lg:pl-8">
              <div className="glass p-6 rounded-3xl border border-brand-purple/20 relative overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">
                    Invoicing
                  </h3>
                  <Button
                    size="sm"
                    className="gradient-bg rounded-xl px-4 py-2"
                  >
                    + Create Invoice
                  </Button>
                </div>

                {/* Invoice List */}
                <div className="space-y-3">
                  {[
                    {
                      name: "Ethan",
                      company: "DevCorp",
                      amount: "$200.00",
                      status: "Processing",
                      date: "Apr 20, 2025",
                      invoice: "JKC-006",
                    },
                    {
                      name: "Noah",
                      company: "Bennett",
                      amount: "$480.00",
                      status: "Paid",
                      date: "Apr 02, 2025",
                      invoice: "JKC-008",
                    },
                    {
                      name: "Emma",
                      company: "Stone",
                      amount: "$250.00",
                      status: "Cancelled",
                      date: "Mar 28, 2025",
                      invoice: "JKC-006",
                    },
                    {
                      name: "Lucas",
                      company: "Hayes",
                      amount: "$230.00",
                      status: "Overdue",
                      date: "Mar 10, 2025",
                      invoice: "JKC-006",
                    },
                    {
                      name: "Chloe",
                      company: "Wilson",
                      amount: "$304.00",
                      status: "Paid",
                      date: "Mar 02, 2025",
                      invoice: "JKC-006",
                    },
                  ].map((invoice, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 rounded-xl bg-background/50 border border-border/20 hover:bg-background/70 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue flex items-center justify-center text-white text-sm font-bold">
                          {invoice.name[0]}
                        </div>
                        <div>
                          <div className="font-medium text-white text-sm">
                            {invoice.name}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {invoice.company}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-white text-sm">
                          {invoice.amount}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {invoice.date}
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          invoice.status === "Paid"
                            ? "border-green-500/30 text-green-400 bg-green-500/10"
                            : invoice.status === "Processing"
                              ? "border-blue-500/30 text-blue-400 bg-blue-500/10"
                              : invoice.status === "Overdue"
                                ? "border-red-500/30 text-red-400 bg-red-500/10"
                                : "border-gray-500/30 text-gray-400 bg-gray-500/10"
                        }`}
                      >
                        {invoice.status}
                      </Badge>
                      <div className="text-xs text-muted-foreground">
                        {invoice.invoice}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Floating quantum particles for the dashboard */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-brand-cyan/30 rounded-full animate-pulse"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                        animationDelay: `${Math.random() * 3}s`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Copy Layout Badge */}
              <div className="absolute -top-4 -left-4">
                <Badge className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs">
                  Copy Layout
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Features Section */}
      <section className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-purple/5 to-transparent" />

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <Badge
              variant="outline"
              className="mb-6 glass border-brand-cyan/30"
            >
              <Cpu className="w-4 h-4 mr-2" />
              Quantum Technology Stack
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="gradient-text">QUANTUM</span>{" "}
              <span className="text-white">CAPABILITIES</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unleash the power of quantum computing for financial operations
              that transcend traditional boundaries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glass animated-border group hover:scale-105 transition-all duration-500">
              <CardHeader className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <Brain className="h-12 w-12 text-brand-purple mb-6 relative z-10 group-hover:animate-pulse" />
                <CardTitle className="text-xl mb-3 relative z-10">
                  Neural Invoice Matrix
                </CardTitle>
                <CardDescription className="relative z-10">
                  Quantum neural networks analyze billing patterns across
                  infinite dimensions, optimizing payment flows in real-time
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass animated-border group hover:scale-105 transition-all duration-500">
              <CardHeader className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <Orbit className="h-12 w-12 text-brand-blue mb-6 relative z-10 group-hover:animate-spin" />
                <CardTitle className="text-xl mb-3 relative z-10">
                  Entangled Payment Processing
                </CardTitle>
                <CardDescription className="relative z-10">
                  Quantum entanglement ensures instantaneous payment
                  verification across all financial dimensions simultaneously
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass animated-border group hover:scale-105 transition-all duration-500">
              <CardHeader className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <Infinity className="h-12 w-12 text-brand-cyan mb-6 relative z-10 group-hover:animate-bounce" />
                <CardTitle className="text-xl mb-3 relative z-10">
                  Infinite Analytics
                </CardTitle>
                <CardDescription className="relative z-10">
                  Harness quantum superposition to analyze infinite financial
                  scenarios and predict payment behaviors with 100% accuracy
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass animated-border group hover:scale-105 transition-all duration-500">
              <CardHeader className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <Sparkles className="h-12 w-12 text-brand-purple mb-6 relative z-10 group-hover:animate-pulse" />
                <CardTitle className="text-xl mb-3 relative z-10">
                  Quantum Encryption Shield
                </CardTitle>
                <CardDescription className="relative z-10">
                  Unbreakable quantum cryptography protects your financial data
                  using the fundamental laws of quantum mechanics
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass animated-border group hover:scale-105 transition-all duration-500">
              <CardHeader className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <Zap className="h-12 w-12 text-brand-blue mb-6 relative z-10 group-hover:animate-pulse" />
                <CardTitle className="text-xl mb-3 relative z-10">
                  Photonic Speed Processing
                </CardTitle>
                <CardDescription className="relative z-10">
                  Quantum photonic processors handle billing operations at the
                  speed of light, transcending traditional computational limits
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass animated-border group hover:scale-105 transition-all duration-500">
              <CardHeader className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <Globe className="h-12 w-12 text-brand-cyan mb-6 relative z-10 group-hover:animate-spin" />
                <CardTitle className="text-xl mb-3 relative z-10">
                  Multidimensional Integration
                </CardTitle>
                <CardDescription className="relative z-10">
                  Seamlessly integrate with financial systems across parallel
                  universes for truly universal billing solutions
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Quantum Process Flow */}
      <section className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/10 via-brand-blue/5 to-brand-cyan/10" />
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <Badge
              variant="outline"
              className="mb-6 glass border-brand-blue/30"
            >
              <Orbit className="w-4 h-4 mr-2 animate-spin" />
              Quantum Process Architecture
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="text-white">QUANTUM</span>{" "}
              <span className="gradient-text">WORKFLOW</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience billing operations that exist in multiple states
              simultaneously until observed by your clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="glass-card mb-8 relative overflow-hidden group-hover:scale-110 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 p-8">
                  <div className="text-5xl font-bold gradient-text mb-6 animate-pulse">
                    Φ
                  </div>
                  <Brain className="h-16 w-16 text-brand-purple mx-auto group-hover:animate-pulse" />
                </div>
                {/* Quantum particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-brand-purple/40 rounded-full animate-ping"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                        animationDelay: `${Math.random() * 2}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Quantum Genesis
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Neural quantum processors analyze infinite billing possibilities
                and materialize the perfect invoice from the quantum field
              </p>
            </div>

            <div className="text-center group">
              <div className="glass-card mb-8 relative overflow-hidden group-hover:scale-110 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 p-8">
                  <div className="text-5xl font-bold gradient-text mb-6 animate-pulse">
                    ∞
                  </div>
                  <Orbit className="h-16 w-16 text-brand-blue mx-auto group-hover:animate-spin" />
                </div>
                {/* Quantum orbits */}
                <div className="absolute inset-0 pointer-events-none">
                  <div
                    className="absolute inset-4 border border-brand-blue/20 rounded-full animate-spin"
                    style={{ animationDuration: "4s" }}
                  />
                  <div
                    className="absolute inset-8 border border-brand-cyan/20 rounded-full animate-spin"
                    style={{
                      animationDuration: "3s",
                      animationDirection: "reverse",
                    }}
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Entangled Transmission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Quantum entanglement ensures instantaneous delivery across all
                dimensions, with real-time observation tracking in parallel
                universes
              </p>
            </div>

            <div className="text-center group">
              <div className="glass-card mb-8 relative overflow-hidden group-hover:scale-110 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 to-brand-purple/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 p-8">
                  <div className="text-5xl font-bold gradient-text mb-6 animate-pulse">
                    Ψ
                  </div>
                  <Infinity className="h-16 w-16 text-brand-cyan mx-auto group-hover:animate-bounce" />
                </div>
                {/* Energy waves */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-cyan/10 to-transparent animate-pulse" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Probability Collapse
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Payment probabilities collapse into certain financial reality
                through quantum superposition optimization and temporal
                acceleration
              </p>
            </div>
          </div>

          {/* Quantum Flow Visualization */}
          <div className="mt-20 relative">
            <div className="flex justify-center items-center space-x-8">
              <div className="w-4 h-4 rounded-full bg-brand-purple animate-ping" />
              <div className="w-32 h-0.5 bg-gradient-to-r from-brand-purple to-brand-blue animate-pulse" />
              <div
                className="w-4 h-4 rounded-full bg-brand-blue animate-ping"
                style={{ animationDelay: "0.5s" }}
              />
              <div className="w-32 h-0.5 bg-gradient-to-r from-brand-blue to-brand-cyan animate-pulse" />
              <div
                className="w-4 h-4 rounded-full bg-brand-cyan animate-ping"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quantum CTA Section */}
      <section className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-brand-purple/5 to-background" />

        {/* Quantum field effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-purple/20 via-brand-blue/10 to-transparent animate-pulse" />
        </div>

        <div className="container mx-auto text-center relative z-10">
          <div className="glass-card max-w-6xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 via-brand-blue/5 to-brand-cyan/10" />

            {/* Floating quantum elements */}
            <div className="absolute inset-0 pointer-events-none">
              <Sparkles className="absolute top-8 left-8 w-6 h-6 text-brand-purple/40 animate-pulse" />
              <Brain className="absolute top-12 right-12 w-8 h-8 text-brand-blue/40 animate-pulse" />
              <Orbit className="absolute bottom-8 left-12 w-7 h-7 text-brand-cyan/40 animate-spin" />
              <Infinity className="absolute bottom-12 right-8 w-9 h-9 text-brand-purple/40 animate-bounce" />
            </div>

            <div className="relative z-10 p-12">
              <Badge
                variant="outline"
                className="mb-8 glass border-brand-purple/30"
              >
                <Zap className="w-4 h-4 mr-2" />
                Quantum Leap Available
              </Badge>

              <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="text-white">ENTER THE</span>
                <br />
                <span className="gradient-text text-6xl md:text-8xl">
                  QUANTUM
                </span>
                <br />
                <span className="text-white">DIMENSION</span>
              </h2>

              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
                Transcend conventional billing limitations. Join the quantum
                revolution where{" "}
                <span className="text-brand-purple font-semibold">
                  payment certainty
                </span>{" "}
                exists in infinite parallel states until manifested in your
                reality.
              </p>

              <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12">
                <Button
                  asChild
                  size="lg"
                  className="gradient-bg hover:opacity-90 text-xl px-16 py-8 rounded-3xl group relative overflow-hidden shadow-2xl"
                >
                  <Link to="/dashboard">
                    <span className="relative z-10 flex items-center">
                      <Sparkles className="mr-3 h-6 w-6" />
                      Activate Quantum Core
                      <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan opacity-0 group-hover:opacity-30 transition-opacity" />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="text-xl px-16 py-8 rounded-3xl glass border-brand-cyan/30 hover:border-brand-cyan/60 transition-all shadow-xl group"
                >
                  <Link to="/pricing">
                    <Cpu className="mr-3 h-6 w-6 group-hover:animate-spin" />
                    Quantum Pricing Matrix
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                <div className="flex items-center justify-center gap-3 glass-card">
                  <div className="w-3 h-3 rounded-full bg-brand-purple animate-pulse" />
                  <span className="text-brand-purple font-semibold">
                    Infinite Quantum States
                  </span>
                </div>
                <div className="flex items-center justify-center gap-3 glass-card">
                  <div className="w-3 h-3 rounded-full bg-brand-blue animate-pulse" />
                  <span className="text-brand-blue font-semibold">
                    Zero Latency Processing
                  </span>
                </div>
                <div className="flex items-center justify-center gap-3 glass-card">
                  <div className="w-3 h-3 rounded-full bg-brand-cyan animate-pulse" />
                  <span className="text-brand-cyan font-semibold">
                    Multidimensional Support
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quantum signature */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground/60 text-sm">
              "Where quantum mechanics meets financial certainty"
              <span className="text-brand-purple">
                — Dr. Quantum, Lead Architect
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
