import Navigation from "@/components/Navigation";
import SchematicPricing from "@/components/SchematicPricing";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your Perfect Plan
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Scale your invoice management with our flexible pricing options.
            Personalized for your needs.
          </p>
        </div>

        {/* Schematic Pricing Component */}
        <SchematicPricing />

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            All plans include 24/7 support and a 30-day money-back guarantee
          </p>
        </div>
      </div>
    </div>
  );
}
