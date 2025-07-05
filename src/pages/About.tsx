import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, Heart, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-founder",
    description:
      "Former VP of Product at a Fortune 500 fintech company with 15+ years in financial technology.",
  },
  {
    name: "Michael Rodriguez",
    role: "CTO & Co-founder",
    description:
      "Ex-Google engineer specializing in AI/ML and distributed systems. Built payment platforms serving millions.",
  },
  {
    name: "Emma Thompson",
    role: "Head of Design",
    description:
      "Award-winning UX designer with a passion for creating intuitive financial tools for small businesses.",
  },
  {
    name: "David Kim",
    role: "Head of Engineering",
    description:
      "Former Tesla senior engineer with expertise in scalable systems and automation technologies.",
  },
];

const values = [
  {
    icon: Users,
    title: "Customer First",
    description:
      "Every decision we make is guided by what's best for our customers and their success.",
  },
  {
    icon: Target,
    title: "Simplicity",
    description:
      "We believe complex problems deserve simple solutions. Invoicing shouldn't be complicated.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We're committed to delivering the highest quality product and support experience.",
  },
  {
    icon: Heart,
    title: "Empathy",
    description:
      "We understand the challenges of running a business and build solutions with genuine care.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge
            variant="outline"
            className="mb-6 glass border-brand-purple/30"
          >
            🚀 Our Story
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            We're on a mission to{" "}
            <span className="gradient-text">revolutionize</span>
            <br />
            how businesses get paid
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Founded in 2023, InvoIQ was born from the frustration of watching
            talented entrepreneurs waste time chasing payments instead of
            building their dreams.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-purple/5 to-brand-blue/5">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">The Problem We Solve</h2>
              <p className="text-muted-foreground mb-6">
                Small businesses lose an average of $84,000 annually due to late
                payments. Entrepreneurs spend 40% of their time on
                administrative tasks instead of growing their business.
              </p>
              <p className="text-muted-foreground mb-6">
                Traditional invoicing tools are either too basic or
                overcomplicated. We saw an opportunity to leverage AI to create
                something better - a solution that's powerful yet simple.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card text-center">
                  <div className="text-2xl font-bold gradient-text">94%</div>
                  <div className="text-sm text-muted-foreground">
                    Faster Payments
                  </div>
                </div>
                <div className="glass-card text-center">
                  <div className="text-2xl font-bold gradient-text">10k+</div>
                  <div className="text-sm text-muted-foreground">
                    Happy Customers
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-card">
              <div className="p-8 text-center">
                <Zap className="h-16 w-16 text-brand-purple mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  A world where every business owner can focus on what they love
                  while AI handles the boring stuff - starting with getting paid
                  on time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="glass text-center">
                <CardHeader>
                  <value.icon className="h-12 w-12 text-brand-purple mx-auto mb-4" />
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-blue/5 to-brand-cyan/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet the <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're a diverse team of engineers, designers, and business experts
              united by our passion for helping businesses thrive
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="glass">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 rounded-full gradient-bg mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-brand-purple font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="glass-card max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="gradient-text">join our mission</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Whether you're a customer or looking to join our team, we'd love
              to hear from you
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="gradient-bg hover:opacity-90 text-lg px-8 py-6"
              >
                <Link to="/dashboard">Start Using InvoIQ</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 glass border-brand-purple/30"
              >
                We're Hiring
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
