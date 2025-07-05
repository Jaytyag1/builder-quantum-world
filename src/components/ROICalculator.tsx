import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ArrowRight, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

export default function ROICalculator() {
  const [monthlyInvoices, setMonthlyInvoices] = useState([50]);
  const [averageValue, setAverageValue] = useState([500]);
  const [latePaymentRate, setLatePaymentRate] = useState([25]);

  // Calculated values
  const [monthlyRevenue, setMonthlyRevenue] = useState(0);
  const [revenueAtRisk, setRevenueAtRisk] = useState(0);
  const [recoveryWithInvoIQ, setRecoveryWithInvoIQ] = useState(0);
  const [monthlyROI, setMonthlyROI] = useState(0);
  const [annualRecovery, setAnnualRecovery] = useState(0);

  useEffect(() => {
    const invoiceCount = monthlyInvoices[0];
    const avgValue = averageValue[0];
    const lateRate = latePaymentRate[0] / 100;

    const revenue = invoiceCount * avgValue;
    const atRisk = revenue * lateRate;
    const recovery = atRisk * 0.9; // 90% recovery rate with InvoIQ
    const roi = ((recovery - 29) / 29) * 100; // Assuming $29/month plan
    const annual = recovery * 12;

    setMonthlyRevenue(revenue);
    setRevenueAtRisk(atRisk);
    setRecoveryWithInvoIQ(recovery);
    setMonthlyROI(roi);
    setAnnualRecovery(annual);
  }, [monthlyInvoices, averageValue, latePaymentRate]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercentage = (percent: number) => {
    return `${Math.round(percent).toLocaleString()}%`;
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Calculate your <span className="gradient-text">ROI potential</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how much revenue you could recover with InvoIQ's AI-powered
            follow-ups
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left - Input Controls */}
          <Card className="glass p-8 border-brand-purple/30 backdrop-blur-xl">
            <CardHeader className="p-0 mb-8">
              <CardTitle className="text-2xl font-bold text-white">
                Your Business Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-8">
              {/* Monthly Invoice Volume */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium text-white">
                    Monthly Invoice Volume
                  </label>
                  <span className="text-2xl font-bold text-brand-purple">
                    {monthlyInvoices[0]}
                  </span>
                </div>
                <Slider
                  value={monthlyInvoices}
                  onValueChange={setMonthlyInvoices}
                  min={10}
                  max={200}
                  step={10}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>10 invoices</span>
                  <span>200 invoices</span>
                </div>
              </div>

              {/* Average Invoice Value */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium text-white">
                    Average Invoice Value
                  </label>
                  <span className="text-2xl font-bold text-brand-purple">
                    {formatCurrency(averageValue[0])}
                  </span>
                </div>
                <Slider
                  value={averageValue}
                  onValueChange={setAverageValue}
                  min={100}
                  max={10000}
                  step={100}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>$100</span>
                  <span>$10,000</span>
                </div>
              </div>

              {/* Current Late Payment Rate */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium text-white">
                    Current Late Payment Rate
                  </label>
                  <span className="text-2xl font-bold text-red-400">
                    {latePaymentRate[0]}%
                  </span>
                </div>
                <Slider
                  value={latePaymentRate}
                  onValueChange={setLatePaymentRate}
                  min={5}
                  max={50}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>5%</span>
                  <span>50%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right - Results */}
          <Card className="glass p-8 border-brand-blue/30 backdrop-blur-xl relative overflow-hidden">
            <CardHeader className="p-0 mb-8">
              <CardTitle className="text-2xl font-bold text-white">
                Your Revenue Recovery Potential
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-6">
              {/* Monthly Revenue at Risk */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">
                    Monthly Revenue at Risk
                  </span>
                  <span className="text-2xl font-bold text-red-400">
                    {formatCurrency(revenueAtRisk)}
                  </span>
                </div>
                <div className="w-full bg-background/30 rounded-full h-2">
                  <div
                    className="bg-red-400 h-2 rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>

              {/* Recovery with InvoIQ */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">
                    Recovery with InvoIQ
                  </span>
                  <span className="text-2xl font-bold text-green-400">
                    {formatCurrency(recoveryWithInvoIQ)}
                  </span>
                </div>
                <div className="w-full bg-background/30 rounded-full h-2">
                  <div
                    className="bg-green-400 h-2 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>

              {/* Monthly ROI */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">
                    Monthly ROI
                  </span>
                  <span className="text-2xl font-bold text-brand-purple">
                    {formatPercentage(monthlyROI)}
                  </span>
                </div>
                <div className="w-full bg-background/30 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-brand-purple to-brand-blue h-2 rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>

              {/* Annual Revenue Recovery */}
              <div className="pt-6 border-t border-border/20">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Annual Revenue Recovery
                  </h3>
                  <div className="text-4xl font-bold gradient-text mb-2">
                    {formatCurrency(annualRecovery)}
                  </div>
                  <p className="text-sm text-green-400">
                    That's ${Math.round(annualRecovery / 12).toLocaleString()}
                    /month after InvoIQ costs
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <Button
                  asChild
                  className="w-full gradient-bg hover:opacity-90 text-lg py-6"
                >
                  <Link to="/dashboard">
                    <DollarSign className="mr-2 h-5 w-5" />
                    Get Started – Recover Your Revenue
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-3">
                  No setup fees • Cancel anytime • 14-day free trial
                </p>
              </div>
            </CardContent>

            {/* Background gradient */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 rounded-full blur-3xl"></div>
          </Card>
        </div>
      </div>
    </section>
  );
}
