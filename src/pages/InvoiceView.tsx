import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Send, Edit, MoreVertical } from "lucide-react";
import { Link, useParams } from "react-router-dom";

// Mock invoice data
const mockInvoice = {
  id: "1",
  invoiceNumber: "INV-001",
  clientName: "Acme Corp",
  clientEmail: "contact@acme.com",
  clientAddress: "123 Business Street\nNew York, NY 10001",
  amount: 2500.0,
  status: "sent",
  dueDate: "2024-01-15",
  createdAt: "2024-01-01",
  items: [
    {
      description: "Website Development",
      quantity: 1,
      rate: 2000.0,
      amount: 2000.0,
    },
    {
      description: "Logo Design",
      quantity: 2,
      rate: 250.0,
      amount: 500.0,
    },
  ],
  notes: "Payment is due within 30 days. Thank you for your business!",
};

export default function InvoiceView() {
  const { id } = useParams();

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
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/40 bg-background/95 backdrop-blur">
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
                <h1 className="text-2xl font-bold">
                  Invoice {mockInvoice.invoiceNumber}
                </h1>
                <p className="text-muted-foreground">
                  Created {formatDate(mockInvoice.createdAt)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className={getStatusColor(mockInvoice.status)}
              >
                {mockInvoice.status}
              </Badge>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
              <Button variant="outline" size="sm">
                <Send className="h-4 w-4 mr-2" />
                Send
              </Button>
              <Button variant="outline" size="sm">
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Button>
              <Button variant="ghost" size="sm">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Invoice Content */}
        <Card className="glass">
          <CardContent className="p-8">
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-3xl font-bold gradient-text mb-2">
                  InvoIQ
                </h2>
                <p className="text-muted-foreground">
                  123 Business Ave
                  <br />
                  San Francisco, CA 94105
                  <br />
                  hello@invoiq.com
                </p>
              </div>
              <div className="text-right">
                <h3 className="text-2xl font-bold mb-2">INVOICE</h3>
                <p className="text-muted-foreground">
                  Invoice #{mockInvoice.invoiceNumber}
                  <br />
                  Date: {formatDate(mockInvoice.createdAt)}
                  <br />
                  Due: {formatDate(mockInvoice.dueDate)}
                </p>
              </div>
            </div>

            {/* Bill To */}
            <div className="mb-8">
              <h4 className="font-semibold mb-2">Bill To:</h4>
              <div className="text-muted-foreground">
                <p className="font-medium text-foreground">
                  {mockInvoice.clientName}
                </p>
                <p>{mockInvoice.clientEmail}</p>
                <p className="whitespace-pre-line">
                  {mockInvoice.clientAddress}
                </p>
              </div>
            </div>

            {/* Items Table */}
            <div className="mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3">Description</th>
                      <th className="text-right py-3">Qty</th>
                      <th className="text-right py-3">Rate</th>
                      <th className="text-right py-3">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockInvoice.items.map((item, index) => (
                      <tr key={index} className="border-b border-border/40">
                        <td className="py-3">{item.description}</td>
                        <td className="text-right py-3">{item.quantity}</td>
                        <td className="text-right py-3">
                          {formatCurrency(item.rate)}
                        </td>
                        <td className="text-right py-3">
                          {formatCurrency(item.amount)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Totals */}
            <div className="flex justify-end mb-8">
              <div className="w-64">
                <div className="flex justify-between py-2">
                  <span>Subtotal:</span>
                  <span>{formatCurrency(mockInvoice.amount)}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Tax:</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between py-2 border-t border-border font-semibold text-lg">
                  <span>Total:</span>
                  <span className="gradient-text">
                    {formatCurrency(mockInvoice.amount)}
                  </span>
                </div>
              </div>
            </div>

            {/* Notes */}
            {mockInvoice.notes && (
              <div className="border-t border-border pt-6">
                <h4 className="font-semibold mb-2">Notes:</h4>
                <p className="text-muted-foreground">{mockInvoice.notes}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          <Button className="gradient-bg hover:opacity-90">Mark as Paid</Button>
          <Button variant="outline" className="glass border-brand-purple/30">
            Send Reminder
          </Button>
          <Button variant="outline" className="glass border-brand-blue/30">
            Duplicate Invoice
          </Button>
        </div>
      </div>
    </div>
  );
}
