import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for freelancers and small businesses",
    features: [
      "Up to 5 invoices per month",
      "Basic invoice templates",
      "Email notifications",
      "Payment tracking",
      "Basic reporting",
    ],
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
    popular: false,
  },
  {
    name: "Professional",
    price: "$19",
    description: "For growing businesses with more invoice needs",
    features: [
      "Unlimited invoices",
      "Advanced templates",
      "Automated reminders",
      "Multi-currency support",
      "Advanced analytics",
      "Client portal",
      "API access",
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "default" as const,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large teams with custom requirements",
    features: [
      "Everything in Professional",
      "Custom integrations",
      "Dedicated support",
      "Advanced security",
      "Custom branding",
      "Team management",
      "SLA guarantee",
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
    popular: false,
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-6 glass border-brand-purple/30"
            >
              💰 Simple, Transparent Pricing
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Choose the <span className="gradient-text">perfect plan</span>
              <br />
              for your business
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start free and scale as you grow. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={plan.name}
                className={`glass relative ${
                  plan.popular ? "border-brand-purple scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 gradient-bg">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="my-4">
                    <span className="text-4xl font-bold gradient-text">
                      {plan.price}
                    </span>
                    {plan.price !== "Free" && plan.price !== "Custom" && (
                      <span className="text-muted-foreground">/month</span>
                    )}
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant={plan.buttonVariant}
                    className={`w-full ${
                      plan.buttonVariant === "default"
                        ? "gradient-bg hover:opacity-90"
                        : "glass border-brand-purple/30"
                    }`}
                    size="lg"
                  >
                    <Link to="/dashboard">{plan.buttonText}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-8">
              All plans include 14-day free trial • No credit card required •
              Cancel anytime
            </p>
            <div className="glass-card max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">
                Need a custom solution?
              </h3>
              <p className="text-muted-foreground mb-6">
                We offer custom pricing for enterprises with specific needs.
                Contact our sales team to discuss your requirements.
              </p>
              <Button
                variant="outline"
                className="glass border-brand-purple/30"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-purple/5 to-brand-blue/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Can I change my plan at any time?",
                a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, PayPal, and bank transfers for enterprise customers.",
              },
              {
                q: "Is there a setup fee?",
                a: "No, there are no setup fees. You only pay for your chosen plan, and there are no hidden costs.",
              },
              {
                q: "Do you offer discounts for annual billing?",
                a: "Yes, we offer a 20% discount when you choose annual billing for Professional and Enterprise plans.",
              },
            ].map((faq, index) => (
              <Card key={index} className="glass">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
