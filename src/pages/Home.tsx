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
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/20 via-brand-blue/20 to-brand-cyan/20" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

        <div className="container mx-auto text-center relative z-10">
          <Badge
            variant="outline"
            className="mb-6 glass border-brand-purple/30"
          >
            ✨ AI-Powered Invoice Management
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Stop chasing clients</span>
            <br />
            <span className="text-white">to pay</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            InvoIQ's AI-powered platform automates your invoicing, tracks
            payments, and helps you get paid faster than ever before.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="gradient-bg hover:opacity-90 text-lg px-8 py-6"
            >
              <Link to="/dashboard">Get Started Free</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 glass border-brand-purple/30"
            >
              Watch Demo
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="glass-card">
              <div className="text-3xl font-bold gradient-text">94%</div>
              <div className="text-sm text-muted-foreground">
                Faster Payment Collection
              </div>
            </div>
            <div className="glass-card">
              <div className="text-3xl font-bold gradient-text">50%</div>
              <div className="text-sm text-muted-foreground">
                Reduction in Late Payments
              </div>
            </div>
            <div className="glass-card">
              <div className="text-3xl font-bold gradient-text">15min</div>
              <div className="text-sm text-muted-foreground">
                Average Setup Time
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
