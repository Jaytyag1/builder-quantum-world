import { useState } from "react";
import { useUser, useClerk } from "@clerk/clerk-react";
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
  Plus,
  DollarSign,
  Clock,
  TrendingUp,
  Eye,
  Edit,
  Trash2,
  Zap,
  LogOut,
  Settings,
  User,
  Upload,
  MoreHorizontal,
  Send,
  Copy,
  Download,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useConvexInvoices } from "@/hooks/useConvexInvoices";
import { useInvoices } from "@/hooks/useInvoices";
import { toast } from "sonner";
import MouseFollower from "@/components/MouseFollower";

export default function Dashboard() {
  const [selectedTab, setSelectedTab] = useState("all");
  const { user } = useUser();
  const { signOut } = useClerk();

  // Try to use Convex first, fallback to localStorage if needed
  const convexUrl = import.meta.env.VITE_CONVEX_URL;
  const clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

  const convexHook = useConvexInvoices();
  const localHook = useInvoices();

  // Use Convex if available and user is authenticated, otherwise use localStorage
  const useConvex = convexUrl && clerkKey && user;
  const { invoices, loading, deleteInvoice, updateInvoice, getInvoiceStats } =
    useConvex ? convexHook : localHook;

  const stats = getInvoiceStats();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "sent":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "overdue":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      case "draft":
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const filteredInvoices = invoices.filter((invoice) => {
    if (selectedTab === "all") return true;
    return invoice.status === selectedTab;
  });

  const handleDeleteInvoice = async (id: string, invoiceNumber: string) => {
    try {
      if (useConvex) {
        await deleteInvoice(id as any);
      } else {
        (deleteInvoice as any)(id);
      }
      toast.success(`Invoice ${invoiceNumber} deleted successfully`);
    } catch (error) {
      toast.error("Failed to delete invoice");
    }
  };

  const handleStatusUpdate = async (
    id: string,
    newStatus: "sent" | "paid" | "overdue",
    invoiceNumber: string,
  ) => {
    try {
      if (useConvex) {
        await updateInvoice(id as any, newStatus);
      } else {
        (updateInvoice as any)(id, { status: newStatus });
      }
      toast.success(`Invoice ${invoiceNumber} marked as ${newStatus}`);
    } catch (error) {
      toast.error("Failed to update invoice");
    }
  };

  const handleSendInvoice = async (id: string, invoiceNumber: string) => {
    await handleStatusUpdate(id, "sent", invoiceNumber);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 rounded-full border-2 border-brand-purple border-t-transparent animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <MouseFollower />
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/dashboard" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg gradient-bg">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">InvoIQ</span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/dashboard"
                className="text-sm font-medium text-primary"
              >
                Dashboard
              </Link>
              <Link
                to="/invoice/create"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Create Invoice
              </Link>
              <Link
                to="/dashboard"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Reports
              </Link>
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <Button asChild className="gradient-bg hover:opacity-90">
                <Link to="/invoice/create">
                  <Plus className="h-4 w-4 mr-2" />
                  New Invoice
                </Link>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user?.imageUrl} alt="User" />
                      <AvatarFallback className="gradient-bg text-white">
                        {user?.firstName?.charAt(0) || "U"}
                        {user?.lastName?.charAt(0) || ""}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56 glass border-brand-purple/30"
                  align="end"
                  forceMount
                >
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {user?.fullName ||
                          `${user?.firstName || ""} ${user?.lastName || ""}`.trim() ||
                          "User"}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user?.primaryEmailAddress?.emailAddress || "No email"}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="text-red-400 hover:text-red-300"
                    onClick={() => signOut()}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>

      {/* Dashboard Header */}
      <div className="border-b border-border/40 bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-6">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back! Here's an overview of your invoices and payments.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="glass">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-brand-purple" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold gradient-text">
                {formatCurrency(stats.totalRevenue)}
              </div>
              <p className="text-xs text-muted-foreground">
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="glass">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <Clock className="h-4 w-4 text-brand-blue" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-400">
                {formatCurrency(stats.pendingAmount)}
              </div>
              <p className="text-xs text-muted-foreground">
                {
                  invoices.filter(
                    (inv) => inv.status === "sent" || inv.status === "overdue",
                  ).length
                }{" "}
                invoices pending
              </p>
            </CardContent>
          </Card>

          <Card className="glass">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Paid Invoices
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-brand-cyan" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-400">
                {stats.paidInvoices}
              </div>
              <p className="text-xs text-muted-foreground">
                of {stats.totalInvoices} total
              </p>
            </CardContent>
          </Card>

          <Card className="glass">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Invoices
              </CardTitle>
              <FileText className="h-4 w-4 text-brand-purple" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalInvoices}</div>
              <p className="text-xs text-muted-foreground">
                {stats.overdueInvoices} overdue
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Invoices Table */}
        <Card className="glass">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Invoices</CardTitle>
                <CardDescription>
                  Track and manage your invoice status
                </CardDescription>
              </div>
              <div className="flex gap-2 items-center">
                <Button asChild size="sm" className="gradient-bg mr-4">
                  <Link to="/invoice/create">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Invoice
                  </Link>
                </Button>
                {["all", "draft", "sent", "paid", "overdue"].map((tab) => (
                  <Button
                    key={tab}
                    variant={selectedTab === tab ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setSelectedTab(tab)}
                    className={
                      selectedTab === tab ? "gradient-bg" : "hover:bg-secondary"
                    }
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    {tab !== "all" && (
                      <span className="ml-1 text-xs">
                        ({invoices.filter((inv) => inv.status === tab).length})
                      </span>
                    )}
                  </Button>
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredInvoices.map((invoice) => {
                const invoiceId = useConvex
                  ? (invoice as any)._id
                  : (invoice as any).id;
                return (
                  <div
                    key={invoiceId}
                    className="flex items-center justify-between p-4 rounded-lg border border-border/40 hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-purple/10">
                        <FileText className="h-5 w-5 text-brand-purple" />
                      </div>
                      <div>
                        <p className="font-medium">{invoice.invoiceNumber}</p>
                        <p className="text-sm text-muted-foreground">
                          {invoice.clientName}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">
                        {formatCurrency(invoice.amount)}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Due {formatDate(invoice.dueDate)}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className={getStatusColor(invoice.status)}
                    >
                      {invoice.status}
                    </Badge>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" asChild>
                        <Link to={`/invoice/${invoiceId}`}>
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>

                      {invoice.status === "draft" && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            handleSendInvoice(invoiceId, invoice.invoiceNumber)
                          }
                        >
                          <Send className="h-4 w-4" />
                        </Button>
                      )}

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          align="end"
                          className="glass border-brand-purple/30"
                        >
                          <DropdownMenuItem asChild>
                            <Link to={`/invoice/${invoiceId}`}>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Copy className="mr-2 h-4 w-4" />
                            Duplicate
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download className="mr-2 h-4 w-4" />
                            Download PDF
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          {invoice.status !== "paid" && (
                            <>
                              <DropdownMenuItem
                                onClick={() =>
                                  handleStatusUpdate(
                                    invoiceId,
                                    "paid",
                                    invoice.invoiceNumber,
                                  )
                                }
                              >
                                <DollarSign className="mr-2 h-4 w-4" />
                                Mark as Paid
                              </DropdownMenuItem>
                              {invoice.status !== "sent" && (
                                <DropdownMenuItem
                                  onClick={() =>
                                    handleStatusUpdate(
                                      invoiceId,
                                      "sent",
                                      invoice.invoiceNumber,
                                    )
                                  }
                                >
                                  <Send className="mr-2 h-4 w-4" />
                                  Mark as Sent
                                </DropdownMenuItem>
                              )}
                              <DropdownMenuSeparator />
                            </>
                          )}
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <DropdownMenuItem
                                onSelect={(e) => e.preventDefault()}
                                className="text-red-400 hover:text-red-300"
                              >
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete
                              </DropdownMenuItem>
                            </AlertDialogTrigger>
                            <AlertDialogContent className="glass border-brand-purple/30">
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  Delete Invoice
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  Are you sure you want to delete invoice{" "}
                                  {invoice.invoiceNumber}? This action cannot be
                                  undone.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() =>
                                    handleDeleteInvoice(
                                      invoiceId,
                                      invoice.invoiceNumber,
                                    )
                                  }
                                  className="bg-red-600 hover:bg-red-700"
                                >
                                  Delete
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
