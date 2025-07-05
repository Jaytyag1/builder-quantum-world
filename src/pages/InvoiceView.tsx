import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Edit,
  Send,
  Download,
  Copy,
  DollarSign,
  Trash2,
  MoreHorizontal,
} from "lucide-react";
import { useInvoices } from "@/hooks/useInvoices";
import { toast } from "sonner";
import MouseFollower from "@/components/MouseFollower";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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

export default function InvoiceView() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getInvoiceById, updateInvoice, deleteInvoice } = useInvoices();

  const invoice = id ? getInvoiceById(id) : null;

  if (!invoice) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <MouseFollower />
        <Card className="glass p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Invoice Not Found</h2>
          <p className="text-muted-foreground mb-6">
            The invoice you're looking for doesn't exist.
          </p>
          <Button asChild className="gradient-bg">
            <Link to="/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
        </Card>
      </div>
    );
  }

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
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleStatusUpdate = (newStatus: "sent" | "paid" | "overdue") => {
    updateInvoice(invoice.id, { status: newStatus });
    toast.success(`Invoice marked as ${newStatus}`);
  };

  const handleDelete = () => {
    deleteInvoice(invoice.id);
    toast.success("Invoice deleted successfully");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background">
      <MouseFollower />

      {/* Header */}
      <div className="border-b border-border/40 bg-background/95 backdrop-blur sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/dashboard">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Link>
              </Button>
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-2xl font-bold">
                    {invoice.invoiceNumber}
                  </h1>
                  <Badge
                    variant="outline"
                    className={getStatusColor(invoice.status)}
                  >
                    {invoice.status}
                  </Badge>
                </div>
                <p className="text-muted-foreground">
                  Created on {formatDate(invoice.createdAt)}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className="glass border-brand-purple/30"
              >
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>

              {invoice.status === "draft" && (
                <Button
                  onClick={() => handleStatusUpdate("sent")}
                  className="gradient-bg"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Invoice
                </Button>
              )}

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="glass">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="glass border-brand-purple/30"
                >
                  <DropdownMenuItem>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit Invoice
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Copy className="mr-2 h-4 w-4" />
                    Duplicate
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  {invoice.status !== "paid" && (
                    <>
                      <DropdownMenuItem
                        onClick={() => handleStatusUpdate("paid")}
                      >
                        <DollarSign className="mr-2 h-4 w-4" />
                        Mark as Paid
                      </DropdownMenuItem>
                      {invoice.status !== "sent" && (
                        <DropdownMenuItem
                          onClick={() => handleStatusUpdate("sent")}
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
                        <AlertDialogTitle>Delete Invoice</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to delete this invoice? This
                          action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={handleDelete}
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
        </div>
      </div>

      {/* Invoice Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className="glass">
          <CardContent className="p-8">
            {/* Invoice Header */}
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-3xl font-bold gradient-text mb-2">
                  INVOICE
                </h2>
                <p className="text-muted-foreground">
                  #{invoice.invoiceNumber}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Issue Date</p>
                <p className="font-medium">{formatDate(invoice.createdAt)}</p>
                <p className="text-sm text-muted-foreground mt-2">Due Date</p>
                <p className="font-medium">{formatDate(invoice.dueDate)}</p>
              </div>
            </div>

            {/* From/To Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold mb-2">From:</h3>
                <div className="text-muted-foreground">
                  <p className="font-medium text-white">Your Company</p>
                  <p>123 Business Street</p>
                  <p>City, State 12345</p>
                  <p>contact@yourcompany.com</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Bill To:</h3>
                <div className="text-muted-foreground">
                  <p className="font-medium text-white">{invoice.clientName}</p>
                  {invoice.clientAddress && (
                    <p className="whitespace-pre-line">
                      {invoice.clientAddress}
                    </p>
                  )}
                  {invoice.clientEmail && <p>{invoice.clientEmail}</p>}
                </div>
              </div>
            </div>

            {/* Items Table */}
            <div className="mb-8">
              <div className="glass rounded-lg overflow-hidden">
                <div className="grid grid-cols-12 gap-4 p-4 bg-brand-purple/10 font-medium">
                  <div className="col-span-6">Description</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-center">Rate</div>
                  <div className="col-span-2 text-right">Amount</div>
                </div>
                {invoice.items.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-12 gap-4 p-4 border-t border-border/20"
                  >
                    <div className="col-span-6">{item.description}</div>
                    <div className="col-span-2 text-center">
                      {item.quantity}
                    </div>
                    <div className="col-span-2 text-center">
                      {formatCurrency(item.rate)}
                    </div>
                    <div className="col-span-2 text-right font-medium">
                      {formatCurrency(item.amount)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Total Section */}
            <div className="flex justify-end mb-8">
              <div className="w-64">
                <div className="flex justify-between py-2">
                  <span>Subtotal:</span>
                  <span>{formatCurrency(invoice.amount)}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Tax:</span>
                  <span>$0.00</span>
                </div>
                <div className="border-t border-border/20 pt-2">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span className="gradient-text">
                      {formatCurrency(invoice.amount)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes */}
            {invoice.notes && (
              <div className="border-t border-border/20 pt-6">
                <h3 className="font-semibold mb-2">Notes:</h3>
                <p className="text-muted-foreground whitespace-pre-line">
                  {invoice.notes}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
