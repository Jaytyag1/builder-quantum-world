import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  Plus,
  Trash2,
  Upload,
  Edit3,
  FileText,
  Check,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useInvoices, InvoiceItem } from "@/hooks/useInvoices";
import { toast } from "sonner";
import MouseFollower from "@/components/MouseFollower";
import { Badge } from "@/components/ui/badge";

export default function InvoiceCreate() {
  const navigate = useNavigate();
  const { createInvoice } = useInvoices();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [mode, setMode] = useState<"choose" | "upload" | "manual">("choose");
  const [uploading, setUploading] = useState(false);

  // Form state
  const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: `INV-${Date.now().toString().slice(-6)}`,
    clientName: "",
    clientEmail: "",
    clientAddress: "",
    dueDate: "",
    notes: "",
  });

  const [items, setItems] = useState<InvoiceItem[]>([
    { description: "", quantity: 1, rate: 0, amount: 0 },
  ]);

  const addItem = () => {
    setItems([...items, { description: "", quantity: 1, rate: 0, amount: 0 }]);
  };

  const removeItem = (index: number) => {
    if (items.length > 1) {
      setItems(items.filter((_, i) => i !== index));
    }
  };

  const updateItem = (index: number, field: keyof InvoiceItem, value: any) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };

    // Calculate amount when quantity or rate changes
    if (field === "quantity" || field === "rate") {
      newItems[index].amount = newItems[index].quantity * newItems[index].rate;
    }

    setItems(newItems);
  };

  const updateInvoiceData = (field: string, value: string) => {
    setInvoiceData((prev) => ({ ...prev, [field]: value }));
  };

  const totalAmount = items.reduce((sum, item) => sum + item.amount, 0);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);

    // Simulate file processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Simulate AI extraction (in real app, this would call your AI service)
    const extractedData = {
      invoiceNumber: `INV-${Date.now().toString().slice(-6)}`,
      clientName: "Extracted Client Name",
      clientEmail: "client@example.com",
      clientAddress: "123 Extracted St, City, State 12345",
      dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0],
      notes: "Extracted from uploaded file",
    };

    const extractedItems = [
      {
        description: "Extracted Service",
        quantity: 1,
        rate: 1500,
        amount: 1500,
      },
    ];

    setInvoiceData(extractedData);
    setItems(extractedItems);
    setMode("manual");
    setUploading(false);

    toast.success(
      "Invoice data extracted successfully! Please review and edit as needed.",
    );
  };

  const handleSaveDraft = () => {
    if (!invoiceData.clientName || items.some((item) => !item.description)) {
      toast.error("Please fill in required fields");
      return;
    }

    const newInvoice = createInvoice({
      ...invoiceData,
      amount: totalAmount,
      status: "draft" as const,
      items,
    });

    toast.success("Invoice saved as draft");
    navigate("/dashboard");
  };

  const handleSendInvoice = () => {
    if (
      !invoiceData.clientName ||
      !invoiceData.clientEmail ||
      items.some((item) => !item.description)
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    const newInvoice = createInvoice({
      ...invoiceData,
      amount: totalAmount,
      status: "sent" as const,
      items,
    });

    toast.success("Invoice sent successfully!");
    navigate("/dashboard");
  };

  if (mode === "choose") {
    return (
      <div className="min-h-screen bg-background">
        <MouseFollower />
        {/* Header */}
        <div className="border-b border-border/40 bg-background/95 backdrop-blur">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/dashboard">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Link>
              </Button>
              <div>
                <h1 className="text-2xl font-bold">Create New Invoice</h1>
                <p className="text-muted-foreground">
                  Choose how you'd like to create your invoice
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Choice Section */}
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Upload Option */}
            <Card
              className="glass p-8 text-center hover:border-brand-purple/50 transition-all cursor-pointer group"
              onClick={() => fileInputRef.current?.click()}
            >
              <div className="w-20 h-20 rounded-full bg-brand-purple/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Upload className="h-10 w-10 text-brand-purple" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Upload Invoice</h3>
              <p className="text-muted-foreground mb-6">
                Upload an existing invoice and let AI extract all the details
                automatically. Supports PDF, images, and documents.
              </p>
              <Badge className="bg-brand-purple/20 text-brand-purple">
                🤖 AI-Powered Extraction
              </Badge>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                onChange={handleFileUpload}
                className="hidden"
              />
            </Card>

            {/* Manual Option */}
            <Card
              className="glass p-8 text-center hover:border-brand-blue/50 transition-all cursor-pointer group"
              onClick={() => setMode("manual")}
            >
              <div className="w-20 h-20 rounded-full bg-brand-blue/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Edit3 className="h-10 w-10 text-brand-blue" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Create Manually</h3>
              <p className="text-muted-foreground mb-6">
                Create a new invoice from scratch with our intuitive form.
                Perfect for custom invoices and detailed billing.
              </p>
              <Badge className="bg-brand-blue/20 text-brand-blue">
                ✏️ Full Control
              </Badge>
            </Card>
          </div>

          {uploading && (
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
              <Card className="glass p-8 text-center">
                <div className="w-16 h-16 rounded-full border-4 border-brand-purple border-t-transparent animate-spin mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">
                  Processing Invoice
                </h3>
                <p className="text-muted-foreground">
                  AI is extracting data from your file...
                </p>
              </Card>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <MouseFollower />
      {/* Header */}
      <div className="border-b border-border/40 bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/dashboard">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Link>
            </Button>
            <div className="flex-1">
              <div className="flex items-center gap-4">
                <div>
                  <h1 className="text-2xl font-bold">Create New Invoice</h1>
                  <p className="text-muted-foreground">
                    {mode === "upload"
                      ? "AI extracted data - please review"
                      : "Fill in the details to create your invoice"}
                  </p>
                </div>
                {mode === "upload" && (
                  <Badge className="bg-green-500/20 text-green-400">
                    <Check className="h-3 w-3 mr-1" />
                    AI Extracted
                  </Badge>
                )}
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setMode("choose")}
              className="glass border-brand-purple/30"
            >
              Change Method
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Invoice Details */}
            <Card className="glass">
              <CardHeader>
                <CardTitle>Invoice Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="invoiceNumber">Invoice Number</Label>
                    <Input
                      id="invoiceNumber"
                      value={invoiceData.invoiceNumber}
                      onChange={(e) =>
                        updateInvoiceData("invoiceNumber", e.target.value)
                      }
                      placeholder="INV-001"
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <Label htmlFor="dueDate">Due Date</Label>
                    <Input
                      id="dueDate"
                      type="date"
                      value={invoiceData.dueDate}
                      onChange={(e) =>
                        updateInvoiceData("dueDate", e.target.value)
                      }
                      className="bg-background/50"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Client Information */}
            <Card className="glass">
              <CardHeader>
                <CardTitle>Client Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="clientName">Client Name</Label>
                    <Input
                      id="clientName"
                      value={invoiceData.clientName}
                      onChange={(e) =>
                        updateInvoiceData("clientName", e.target.value)
                      }
                      placeholder="Acme Corp"
                      className="bg-background/50"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="clientEmail">Client Email</Label>
                    <Input
                      id="clientEmail"
                      type="email"
                      value={invoiceData.clientEmail}
                      onChange={(e) =>
                        updateInvoiceData("clientEmail", e.target.value)
                      }
                      placeholder="contact@acme.com"
                      className="bg-background/50"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="clientAddress">Client Address</Label>
                  <Textarea
                    id="clientAddress"
                    value={invoiceData.clientAddress}
                    onChange={(e) =>
                      updateInvoiceData("clientAddress", e.target.value)
                    }
                    placeholder="123 Business St, City, State 12345"
                    className="bg-background/50"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Invoice Items */}
            <Card className="glass">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Invoice Items</CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={addItem}
                    className="glass border-brand-purple/30"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Item
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-12 gap-2 items-end"
                  >
                    <div className="col-span-5">
                      <Label>Description</Label>
                      <Input
                        placeholder="Service or product description"
                        value={item.description}
                        onChange={(e) =>
                          updateItem(index, "description", e.target.value)
                        }
                        className="bg-background/50"
                      />
                    </div>
                    <div className="col-span-2">
                      <Label>Quantity</Label>
                      <Input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateItem(index, "quantity", Number(e.target.value))
                        }
                        className="bg-background/50"
                      />
                    </div>
                    <div className="col-span-2">
                      <Label>Rate</Label>
                      <Input
                        type="number"
                        min="0"
                        step="0.01"
                        value={item.rate}
                        onChange={(e) =>
                          updateItem(index, "rate", Number(e.target.value))
                        }
                        className="bg-background/50"
                      />
                    </div>
                    <div className="col-span-2">
                      <Label>Amount</Label>
                      <Input
                        value={`$${item.amount.toFixed(2)}`}
                        readOnly
                        className="bg-muted/50"
                      />
                    </div>
                    <div className="col-span-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(index)}
                        disabled={items.length === 1}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Notes */}
            <Card className="glass">
              <CardHeader>
                <CardTitle>Additional Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={invoiceData.notes}
                  onChange={(e) => updateInvoiceData("notes", e.target.value)}
                  placeholder="Payment terms, thank you note, or any additional information..."
                  className="bg-background/50"
                  rows={4}
                />
              </CardContent>
            </Card>
          </div>

          {/* Preview/Summary */}
          <div className="space-y-6">
            <Card className="glass sticky top-4">
              <CardHeader>
                <CardTitle>Invoice Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal:</span>
                    <span>${totalAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax:</span>
                    <span>$0.00</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between font-semibold">
                      <span>Total:</span>
                      <span className="gradient-text">
                        ${totalAmount.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-4">
                  <Button
                    onClick={handleSaveDraft}
                    className="w-full gradient-bg hover:opacity-90"
                  >
                    Save Draft
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full glass border-brand-purple/30"
                    asChild
                  >
                    <Link to={`/invoice/preview`}>Preview</Link>
                  </Button>
                  <Button
                    onClick={handleSendInvoice}
                    variant="outline"
                    className="w-full glass border-brand-blue/30"
                  >
                    Send Invoice
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
