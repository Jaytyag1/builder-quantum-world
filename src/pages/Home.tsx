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
  Users,
  Settings,
  Lock,
  Calendar,
  Upload,
  Edit3,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import MouseFollower from "@/components/MouseFollower";
import { useEffect, useState } from "react";

export default function Home() {
  const [typingText, setTypingText] = useState("");

  // Dynamic typing effect for FollowUpAI composing - faster animation
  useEffect(() => {
    const fullText =
      "Hi John, I hope you're having a great week! I wanted to follow up on Invoice #2024-001 for $2,500 that was sent on February 15th. The payment was due on March 1st, and I haven't received it yet. I understand that things can get busy, so I wanted to check if there are any questions about the invoice or if there's anything I can help clarify.\n\nLooking forward to hearing from you!";

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypingText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        // Reset and start over
        currentIndex = 0;
        setTypingText("");
      }
    }, 25); // Faster typing speed

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navigation />
      <MouseFollower />

      {/* Hero Section */}
      <section className="relative py-20 px-4 min-h-screen flex items-center">
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Left Content */}
            <div className="space-y-8 lg:space-y-12">
              <div className="space-y-6">
                <Badge
                  variant="outline"
                  className="glass border-brand-purple/30 backdrop-blur-xl w-fit"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI-Powered Invoice Management
                </Badge>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
                  <span className="text-white">Stop chasing</span>
                  <br />
                  <span className="text-white">clients</span>
                  <br />
                  <span className="gradient-text">to pay.</span>
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-lg">
                  FollowUpAI reads your invoices and follows up on your behalf. Transform awkward payment chases into automated, professional reminders.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button
                  asChild
                  size="lg"
                  className="gradient-bg hover:opacity-90 text-lg px-8 py-4 rounded-xl group relative overflow-hidden shadow-2xl"
                >
                  <Link to="/invoice/create">
                    <Upload className="mr-2 h-5 w-5" />
                    Upload Invoice
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4 rounded-xl glass border-brand-purple/30 hover:border-brand-purple/60 transition-all"
                >
                  <Edit3 className="mr-2 h-5 w-5" />
                  Create Manually
                </Button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue border-2 border-background flex items-center justify-center text-sm font-bold text-white"
                      >
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    500+ users collecting payments faster
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Clean Invoice Preview */}
            <div className="relative">
              <div className="glass p-8 rounded-3xl border border-brand-purple/20 relative overflow-hidden backdrop-blur-xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-semibold text-white">
                    Smart Dashboard
                  </h3>
                  <Button size="sm" className="gradient-bg rounded-xl px-4 py-2">
                    + Create Invoice
                  </Button>
                </div>

                {/* Clean Invoice List */}
                <div className="space-y-4">
                  {[
                    { client: "Acme Corp", amount: "$2,500", status: "paid", due: "Jan 15" },
                    { client: "TechStart Inc", amount: "$1,800", status: "sent", due: "Jan 20" },
                    { client: "Global Solutions", amount: "$3,200", status: "overdue", due: "Jan 10" }
                  ].map((invoice, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-background/30 border border-brand-purple/10">
                      <div>
                        <div className="font-medium text-white">{invoice.client}</div>
                        <div className="text-sm text-muted-foreground">Due {invoice.due}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-white">{invoice.amount}</div>
                        <div className={`text-xs px-2 py-1 rounded-full ${
                          invoice.status === 'paid' ? 'bg-green-500/20 text-green-400' :
                          invoice.status === 'sent' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {invoice.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* AI Status */}
                <div className="mt-6 p-4 rounded-xl bg-brand-purple/10 border border-brand-purple/20">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-sm text-brand-purple font-medium">AI actively following up on 2 overdue invoices</span>
                  </div>
                </div>

                {/* Invoice List */}
                <div className="space-y-3">
                  {[
                    {
                      name: "Ethan",
                      amount: "$200.00",
                      status: "Processing",
                      dueDate: "Apr 20, 2025",
                      invoice: "JKC-006",
                      date: "Mar 10, 2025",
                    },
                    {
                      name: "Noah",
                      company: "Bennett",
                      amount: "$480.00",
                      status: "Paid",
                      dueDate: "Apr 02, 2025",
                      invoice: "JKC-008",
                      date: "Mar 10, 2025",
                    },
                    {
                      name: "Emma",
                      company: "Stone",
                      amount: "$250.00",
                      status: "Cancelled",
                      dueDate: "Mar 28, 2025",
                      invoice: "JKC-006",
                      date: "Feb 06, 2025",
                    },
                    {
                      name: "Lucas",
                      company: "Hayes",
                      amount: "$230.00",
                      status: "Overdue",
                      dueDate: "Mar 10, 2025",
                      invoice: "JKC-006",
                      date: "Jan 30, 2025",
                    },
                    {
                      name: "Chloe",
                      company: "Wilson",
                      amount: "$304.00",
                      status: "Paid",
                      dueDate: "Mar 02, 2025",
                      invoice: "JKC-006",
                      date: "Jan 06, 2025",
                    },
                  ].map((invoice, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-6 gap-4 items-center p-3 rounded-xl bg-background/50 border border-border/20 hover:bg-background/70 transition-colors text-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue flex items-center justify-center text-white text-sm font-bold">
                          {invoice.name[0]}
                        </div>
                        <div>
                          <div className="font-medium text-white">
                            {invoice.name}
                          </div>
                          {invoice.company && (
                            <div className="text-xs text-muted-foreground">
                              {invoice.company}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="font-medium text-white">
                        {invoice.amount}
                      </div>
                      <Badge
                        variant="outline"
                        className={`text-xs w-fit ${
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
                      <div className="text-muted-foreground">
                        {invoice.dueDate}
                      </div>
                      <div className="text-muted-foreground">
                        {invoice.invoice}
                      </div>
                      <div className="text-muted-foreground">
                        {invoice.date}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The payment chase is{" "}
              <span className="text-red-400">killing your business</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="glass text-center p-8">
              <CardHeader>
                <Clock className="h-16 w-16 text-red-400 mx-auto mb-6" />
                <CardTitle className="text-xl mb-4">
                  Late payments hurt your cash flow
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  73% of invoices are paid late, disrupting your ability to
                  operate and grow.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass text-center p-8">
              <CardHeader>
                <Mail className="h-16 w-16 text-red-400 mx-auto mb-6" />
                <CardTitle className="text-xl mb-4">
                  You hate sounding desperate
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Writing follow-up emails feels awkward and damages client
                  relationships.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass text-center p-8">
              <CardHeader>
                <Users className="h-16 w-16 text-red-400 mx-auto mb-6" />
                <CardTitle className="text-xl mb-4">
                  Clients ghost after getting the invoice
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Even good clients "forget" to pay, leaving you to play
                  collection agent.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Transform Payment Process Section */}
      <section className="py-32 px-4 relative">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <Badge className="bg-brand-purple/20 text-brand-purple px-6 py-3 rounded-full text-sm mb-8">
              🧠 Intelligent Automation
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transform your payment process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete end-to-end automation with intelligent tracking, analytics, and human intervention when needed
            </p>
          </div>

          {/* Step 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto mb-32">
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-brand-purple/20 flex items-center justify-center text-2xl font-bold text-brand-purple border border-brand-purple/30">
                  1
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">
                    AI Processes Your Invoice
                  </h3>
                  <p className="text-brand-purple">Instant analysis in 3 seconds</p>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Our neural network instantly analyzes every detail of your invoice with superhuman accuracy. No more manual data entry or human error.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 glass rounded-xl">
                  <div className="text-3xl font-bold text-red-400 mb-2">30min</div>
                  <div className="text-sm text-muted-foreground">Manual Process</div>
                </div>
                <div className="text-center p-4 glass rounded-xl border border-brand-purple/30">
                  <div className="text-3xl font-bold text-green-400 mb-2">3sec</div>
                  <div className="text-sm text-muted-foreground">AI Process</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-muted-foreground">99.7% client detection accuracy</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-muted-foreground">Automatic amount & due date extraction</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-muted-foreground">Contact information parsing</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="glass p-8 border-brand-purple/30 backdrop-blur-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-purple/20 flex items-center justify-center">
                    <Brain className="h-6 w-6 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Neural Invoice Analysis</h3>
                    <p className="text-sm text-brand-purple">Processing...</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-muted-foreground">Client Detection</span>
                    <span className="text-green-400 font-medium">✓ Acme Corp</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-muted-foreground">Amount Extraction</span>
                    <span className="text-green-400 font-medium">✓ $2,500.00</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-muted-foreground">Due Date Analysis</span>
                    <span className="text-green-400 font-medium">✓ Mar 15, 2024</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-muted-foreground">Contact Info</span>
                    <span className="text-green-400 font-medium">✓ john@acme.com</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto mb-32">
            <div className="order-2 lg:order-1">
              <Card className="glass p-6 bg-black/80 border border-gray-700/50 backdrop-blur-xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-4 text-sm text-gray-400">FollowUpAI composing...</span>
                </div>

                <div className="space-y-3 font-mono text-sm">
                  <div className="text-blue-400">to: john@company.com</div>
                  <div className="text-gray-300">Subject: Payment reminder - Invoice #2024-001</div>
                  <div className="border-t border-gray-700 pt-4 text-gray-300 leading-relaxed min-h-40">
                    {typingText}
                    <span className="animate-pulse text-brand-purple">|</span>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-brand-blue/20 flex items-center justify-center text-2xl font-bold text-brand-blue border border-brand-blue/30">
                  2
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">
                    AI Sends & Tracks Everything
                  </h3>
                  <p className="text-brand-blue">Human-like communication</p>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Our AI doesn't just send follow-ups—it tracks every interaction, monitors engagement, and alerts you when human intervention is needed.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-400" />
                  <span className="text-muted-foreground">Personalized email generation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-400" />
                  <span className="text-muted-foreground">Real-time open & reply tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-400" />
                  <span className="text-muted-foreground">Intelligent follow-up scheduling</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-brand-cyan/20 flex items-center justify-center text-2xl font-bold text-brand-cyan border border-brand-cyan/30">
                  3
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">
                    Complete Oversight & Results
                  </h3>
                  <p className="text-brand-cyan">87% payment success rate</p>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Get complete visibility into every interaction while maintaining full control. Our system handles routine tasks and escalates when you're needed.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-muted-foreground">Real-time analytics dashboard</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-purple" />
                  <span className="text-muted-foreground">Automatic payment status updates</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-400" />
                  <span className="text-muted-foreground">Smart human intervention alerts</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-yellow-400" />
                  <span className="text-muted-foreground">Instant notifications for complex responses</span>
                </div>
              </div>
            </div>

            <div>
              <Card className="glass p-6 border-brand-cyan/30 backdrop-blur-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-cyan/20 flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-brand-cyan" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Smart Analytics</h3>
                    <p className="text-sm text-muted-foreground">Real-time engagement tracking</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="glass p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-green-400">94.2%</div>
                    <div className="text-xs text-muted-foreground">Open Rate</div>
                  </div>
                  <div className="glass p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-brand-purple">67.8%</div>
                    <div className="text-xs text-muted-foreground">Reply Rate</div>
                  </div>
                  <div className="glass p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-blue-400">87%</div>
                    <div className="text-xs text-muted-foreground">Payment Success</div>
                  </div>
                  <div className="glass p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-brand-cyan">24/7</div>
                    <div className="text-xs text-muted-foreground">Monitoring</div>
                  </div>
                </div>

                {/* Human Intervention Alert */}
                <div className="p-4 rounded-xl bg-yellow-900/20 border border-yellow-500/30">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-yellow-400 text-sm">⚠️</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-yellow-400">Human Intervention Required</h4>
                      <p className="text-xs text-yellow-300/80">
                        Client replied: "Having cash flow issues..." -
                        <span className="underline cursor-pointer ml-1">View & Respond</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Reply Rate
                    </span>
                    <span className="text-blue-400 font-medium">67.8%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Human Alerts Sent
                    </span>
                    <span className="text-yellow-400 font-medium">3 today</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Payment Success
                    </span>
                    <span className="text-green-400 font-medium">87%</span>
                  </div>
                </div>
              </Card>

              {/* Human Intervention Alert */}
              <Card className="glass p-4 bg-yellow-900/20 border border-yellow-500/30">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-400 text-sm">⚠️</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-yellow-400">
                      Human Intervention Required
                    </h4>
                    <p className="text-xs text-yellow-300/80">
                      Client replied: "Having cash flow issues this month, can
                      we discuss payment plan?" -
                      <span className="underline cursor-pointer">
                        View & Respond
                      </span>
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>



      {/* Chase Less Get Paid Faster */}
      <section className="py-20 px-4 relative border-t border-border/20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-purple/5 to-transparent" />
        <div className="container mx-auto relative z-10 text-center">
          <Badge className="bg-brand-purple/20 text-brand-purple px-4 py-2 rounded-full text-sm mb-8">
            🤖 Your invoice follow-up assistant — powered by GPT and emotional
            intelligence
          </Badge>

          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Chase Less. Get Paid Faster.
          </h2>

          <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
            Your AI-powered invoice follow-up agent that reads, writes, and
            reminds — so you don't have to.
          </p>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Human-like emails, smart tone, and behavior-aware nudges that
            actually get you paid.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <Card className="glass text-center p-6 border-brand-purple/20">
              <div className="w-12 h-12 rounded-full bg-brand-purple/20 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-brand-purple" />
              </div>
              <div className="text-2xl font-bold mb-2">~5 sec</div>
              <div className="text-sm text-muted-foreground">
                Avg Response Time
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                From upload to follow-up
              </div>
            </Card>

            <Card className="glass text-center p-6 border-brand-blue/20">
              <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center mx-auto mb-4">
                <Brain className="h-6 w-6 text-brand-blue" />
              </div>
              <div className="text-2xl font-bold mb-2">93.7%</div>
              <div className="text-sm text-muted-foreground">
                AI Follow-Up Accuracy
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Opens or replies rate
              </div>
            </Card>

            <Card className="glass text-center p-6 border-brand-cyan/20">
              <div className="w-12 h-12 rounded-full bg-brand-cyan/20 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-brand-cyan" />
              </div>
              <div className="text-2xl font-bold mb-2">+32%</div>
              <div className="text-sm text-muted-foreground">
                Payment Collection Boost
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Average improvement
              </div>
            </Card>
          </div>

          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground italic">
              "Based on real client testing, InvoIQ helped freelancers collect
              unpaid invoices 32% faster."
            </p>
          </div>

          {/* AI Agent Chat */}
          <Card className="glass max-w-2xl mx-auto p-6 border-brand-purple/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-brand-purple flex items-center justify-center">
                <span className="text-white font-bold">AI</span>
              </div>
              <div>
                <div className="font-medium text-white">AI Agent</div>
                <div className="text-xs text-green-400 flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  Online
                </div>
              </div>
            </div>
            <div className="bg-background/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                Hi James — just checking in on the invoice from last week. Let
                me know if you need anything from me!
              </p>
              <p className="text-xs text-muted-foreground/60 mt-2 italic">
                (sent automatically by your agent)
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="glass p-6 text-center">
              <FileText className="h-12 w-12 text-brand-purple mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3 text-white">
                Invoice Parsing
              </h3>
              <p className="text-sm text-muted-foreground">
                Upload any invoice format. AI extracts client info, amounts, due
                dates, and contact details automatically.
              </p>
            </Card>

            <Card className="glass p-6 text-center">
              <Brain className="h-12 w-12 text-brand-blue mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3 text-white">
                AI-Generated Follow-ups
              </h3>
              <p className="text-sm text-muted-foreground">
                Human-like emails that get results. Each message is personalized
                based on client history and payment patterns.
              </p>
            </Card>

            <Card className="glass p-6 text-center">
              <Settings className="h-12 w-12 text-brand-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3 text-white">
                Tone Customization
              </h3>
              <p className="text-sm text-muted-foreground">
                Choose from polite, professional, or assertive tones. AI adapts
                the message style to match your brand voice.
              </p>
            </Card>

            <Card className="glass p-6 text-center">
              <ArrowRight className="h-12 w-12 text-brand-purple mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3 text-white">
                Auto Resend with Attachment
              </h3>
              <p className="text-sm text-muted-foreground">
                Automatically includes invoice attachments in follow-ups. No
                more "I can't find the invoice" excuses.
              </p>
            </Card>

            <Card className="glass p-6 text-center">
              <BarChart3 className="h-12 w-12 text-brand-blue mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3 text-white">
                Payment Tracking
              </h3>
              <p className="text-sm text-muted-foreground">
                Real-time dashboard showing which invoices are paid, pending, or
                overdue. Never lose track again.
              </p>
            </Card>

            <Card className="glass p-6 text-center">
              <Shield className="h-12 w-12 text-brand-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3 text-white">
                Client Memory
              </h3>
              <p className="text-sm text-muted-foreground">
                AI remembers each client's payment history and preferences to
                optimize follow-up timing and tone.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Built with Smart AI */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built with Smart AI. Trained to Get You Paid.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI doesn't just send emails—it understands your clients,
              learns from every interaction, and gets smarter with each payment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left - Features */}
            <div className="space-y-8">
              <Card className="glass p-6 border-brand-purple/30">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-purple/20 flex items-center justify-center">
                    <Brain className="h-6 w-6 text-brand-purple" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Neural Payment Intelligence
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Predicts when to follow up, in what tone, and how often —
                  based on your client's behavior.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-muted-foreground">
                      97% accuracy in payment prediction
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-muted-foreground">
                      Real-time sentiment shift detection
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-muted-foreground">
                      Understands 40+ languages
                    </span>
                  </div>
                </div>
              </Card>

              <Card className="glass p-6 border-brand-blue/30">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/20 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Adaptive Learning Engine
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Every email improves it. The AI learns from your clients — not
                  just the internet.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-muted-foreground">
                      Learns tone preferences for each client
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-muted-foreground">
                      Personalizes follow-up timing
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-muted-foreground">
                      Constantly optimizes success rate
                    </span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right - Performance Dashboard */}
            <div>
              <Card className="glass p-6 border-brand-cyan/30">
                <h3 className="text-xl font-semibold text-white mb-6 text-center">
                  AI Performance Boost
                </h3>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">
                        Reply Rate Increase
                      </span>
                      <span className="text-2xl font-bold text-brand-purple">
                        +340%
                      </span>
                    </div>
                    <div className="w-full bg-background/30 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-brand-purple to-brand-blue h-2 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">
                        Time to Payment Cut By
                      </span>
                      <span className="text-2xl font-bold text-brand-blue">
                        −75%
                      </span>
                    </div>
                    <div className="w-full bg-background/30 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-brand-blue to-brand-cyan h-2 rounded-full"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">
                        Client Experience Score
                      </span>
                      <span className="text-2xl font-bold text-brand-cyan">
                        9.2/10
                      </span>
                    </div>
                    <div className="w-full bg-background/30 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-brand-cyan to-brand-purple h-2 rounded-full"
                        style={{ width: "92%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-xs text-muted-foreground">
                    Based on test invoices processed • Real data from Q4 2024
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Calculate your ROI potential
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how much revenue you could recover with InvoIQ's AI-powered
              follow-ups
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left - Business Metrics */}
            <Card className="glass p-8 space-y-8">
              <h3 className="text-xl font-semibold text-white">
                Your Business Metrics
              </h3>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground">
                    Monthly Invoice Volume
                  </span>
                  <span className="text-xl font-bold text-white">50</span>
                </div>
                <div className="w-full bg-background/30 rounded-full h-2 mb-2">
                  <div
                    className="bg-brand-purple h-2 rounded-full"
                    style={{ width: "25%" }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>10 invoices</span>
                  <span>200 invoices</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground">
                    Average Invoice Value
                  </span>
                  <span className="text-xl font-bold text-white">$500</span>
                </div>
                <div className="w-full bg-background/30 rounded-full h-2 mb-2">
                  <div
                    className="bg-brand-blue h-2 rounded-full"
                    style={{ width: "15%" }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>$500</span>
                  <span>$10,000</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground">
                    Current Late Payment Rate
                  </span>
                  <span className="text-xl font-bold text-red-400">25%</span>
                </div>
                <div className="w-full bg-background/30 rounded-full h-2 mb-2">
                  <div
                    className="bg-red-500 h-2 rounded-full"
                    style={{ width: "40%" }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>5%</span>
                  <span>50%</span>
                </div>
              </div>
            </Card>

            {/* Right - Revenue Recovery */}
            <Card className="glass p-8 space-y-8">
              <h3 className="text-xl font-semibold text-white">
                Your Revenue Recovery Potential
              </h3>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground">
                    Monthly Revenue at Risk
                  </span>
                  <span className="text-2xl font-bold text-red-400">
                    $6,250
                  </span>
                </div>
                <div className="w-full bg-red-500/20 rounded-full h-1">
                  <div
                    className="bg-red-500 h-1 rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground">
                    Recovery with InvoIQ
                  </span>
                  <span className="text-2xl font-bold text-green-400">
                    $5,625
                  </span>
                </div>
                <div className="w-full bg-green-500/20 rounded-full h-1">
                  <div
                    className="bg-green-500 h-1 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground">Monthly ROI</span>
                  <span className="text-2xl font-bold text-brand-purple">
                    62,400%
                  </span>
                </div>
                <div className="w-full bg-brand-purple/20 rounded-full h-1">
                  <div
                    className="bg-brand-purple h-1 rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>

              <div className="border-t border-border/20 pt-6 text-center">
                <div className="text-sm text-muted-foreground mb-2">
                  Annual Revenue Recovery
                </div>
                <div className="text-4xl font-bold gradient-text mb-2">
                  $67,500
                </div>
                <div className="text-xs text-green-400">
                  That's $625/profit after InvoIQ costs
                </div>
              </div>

              <Button className="w-full gradient-bg hover:opacity-90 text-lg py-4">
                $ Get Started - Recover Your Revenue →
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                No setup fees • Cancel anytime • 14-day free trial
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Simple pricing that pays for itself
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get paid faster with automated follow-ups. Choose the plan that
              fits your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="glass p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Free</h3>
              <div className="text-4xl font-bold mb-6">$0</div>
              <p className="text-muted-foreground mb-6">
                Perfect for getting started
              </p>

              <div className="space-y-3 mb-8 text-left">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-sm">5 invoices per month</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-sm">Basic follow-up templates</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-sm">Email support</span>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                Get Started Free
              </Button>
            </Card>

            <Card className="glass p-8 text-center border-brand-purple/50 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-purple">
                Most Popular
              </Badge>
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$9</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-muted-foreground mb-6">
                For growing freelancers
              </p>

              <div className="space-y-3 mb-8 text-left">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-sm">50 invoices per month</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-sm">AI-generated follow-ups</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-sm">Tone customization</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-sm">Payment tracking dashboard</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-sm">Priority support</span>
                </div>
              </div>

              <Button className="w-full gradient-bg hover:opacity-90">
                Start Pro Trial
              </Button>
            </Card>

            <Card className="glass p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Premium</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-muted-foreground mb-6">
                For agencies and teams
              </p>

              <div className="space-y-3 mb-8 text-left">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-sm">Unlimited invoices</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-sm">Advanced AI features</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-sm">Client memory & insights</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-sm">Team collaboration</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-sm">White-label options</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-sm">Phone support</span>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                Start Premium Trial
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 px-4 bg-gradient-to-r from-background via-background/95 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Enterprise-grade security & compliance
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built with security-first architecture and compliance standards
              that enterprise customers demand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
            <Card className="glass p-6 text-center">
              <Shield className="h-12 w-12 text-brand-purple mx-auto mb-4" />
              <h3 className="font-semibold mb-2">SOC 2 Type II</h3>
              <p className="text-sm text-muted-foreground">
                Certified security controls and auditing
              </p>
            </Card>

            <Card className="glass p-6 text-center">
              <Lock className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">GDPR Compliant</h3>
              <p className="text-sm text-muted-foreground">
                Full data protection and privacy compliance
              </p>
            </Card>

            <Card className="glass p-6 text-center">
              <FileText className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">256-bit Encryption</h3>
              <p className="text-sm text-muted-foreground">
                End-to-end encryption for all data
              </p>
            </Card>

            <Card className="glass p-6 text-center border-brand-blue/50">
              <Zap className="h-12 w-12 text-brand-blue mx-auto mb-4" />
              <h3 className="font-semibold mb-2">99.9% Uptime SLA</h3>
              <p className="text-sm text-muted-foreground">
                Enterprise reliability guarantee
              </p>
            </Card>
          </div>

          <div className="text-center">
            <div className="flex justify-center items-center gap-8 text-muted-foreground font-semibold text-lg">
              <span>SOC 2</span>
              <span>GDPR</span>
              <span>HIPAA</span>
              <span>ISO 27001</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 relative bg-gradient-to-br from-brand-purple via-brand-blue to-brand-cyan">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            The future of B2B payments isautonomous
          </h2>

          <p className="text-xl text-white/80 mb-12 max-w-4xl mx-auto">
            Join the revenue acceleration revolution. FollowUpAI is transforming
            how 10,000+ businesses collect payments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">$2.4M+</div>
              <div className="text-white/80">Revenue Recovered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">340%</div>
              <div className="text-white/80">ROI Average</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">40%</div>
              <div className="text-white/80">Faster Collections</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-white text-brand-purple hover:bg-white/90 px-8 py-4 text-lg"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Start Free Trial →
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Demo
            </Button>
          </div>

          <p className="text-white/60 text-sm">
            No credit card required • 14-day free trial • Enterprise SSO
            available
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                FollowUpAI
              </h3>
              <p className="text-muted-foreground text-sm">
                Agentic invoice reminders that get you paid faster.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Features</div>
                <div>Enterprise</div>
                <div>API & Integrations</div>
                <div>Security</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Case Studies</div>
                <div>ROI Calculator</div>
                <div>AI Technology</div>
                <div>Documentation</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>About</div>
                <div>Careers</div>
                <div>Investors</div>
                <div>Press Kit</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}