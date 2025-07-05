import { useState, useEffect } from "react";

export interface Invoice {
  id: string;
  invoiceNumber: string;
  clientName: string;
  clientEmail: string;
  clientAddress: string;
  amount: number;
  status: "draft" | "sent" | "paid" | "overdue";
  dueDate: string;
  createdAt: string;
  items: InvoiceItem[];
  notes?: string;
  file?: File;
}

export interface InvoiceItem {
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

const STORAGE_KEY = "invoiq_invoices";

// Mock initial data
const initialInvoices: Invoice[] = [
  {
    id: "1",
    invoiceNumber: "INV-001",
    clientName: "Acme Corp",
    clientEmail: "contact@acme.com",
    clientAddress: "123 Business St, City, State 12345",
    amount: 2500.0,
    status: "paid",
    dueDate: "2024-01-15",
    createdAt: "2024-01-01",
    items: [
      { description: "Web Development", quantity: 1, rate: 2500, amount: 2500 },
    ],
    notes: "Thank you for your business!",
  },
  {
    id: "2",
    invoiceNumber: "INV-002",
    clientName: "TechStart Inc",
    clientEmail: "billing@techstart.com",
    clientAddress: "456 Tech Ave, Silicon Valley, CA 94000",
    amount: 1800.0,
    status: "sent",
    dueDate: "2024-01-20",
    createdAt: "2024-01-05",
    items: [
      { description: "UI/UX Design", quantity: 30, rate: 60, amount: 1800 },
    ],
  },
  {
    id: "3",
    invoiceNumber: "INV-003",
    clientName: "Global Solutions",
    clientEmail: "payments@globalsolutions.com",
    clientAddress: "789 Enterprise Blvd, Corporate City, NY 10001",
    amount: 3200.0,
    status: "overdue",
    dueDate: "2024-01-10",
    createdAt: "2023-12-28",
    items: [
      {
        description: "Full Stack Development",
        quantity: 40,
        rate: 80,
        amount: 3200,
      },
    ],
  },
  {
    id: "4",
    invoiceNumber: "INV-004",
    clientName: "Startup Hub",
    clientEmail: "finance@startuphub.io",
    clientAddress: "321 Innovation Dr, Startup City, TX 73000",
    amount: 950.0,
    status: "draft",
    dueDate: "2024-01-25",
    createdAt: "2024-01-12",
    items: [
      {
        description: "Consulting Services",
        quantity: 19,
        rate: 50,
        amount: 950,
      },
    ],
  },
];

export function useInvoices() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);

  // Load invoices from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setInvoices(JSON.parse(stored));
      } else {
        setInvoices(initialInvoices);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initialInvoices));
      }
    } catch (error) {
      console.error("Error loading invoices:", error);
      setInvoices(initialInvoices);
    } finally {
      setLoading(false);
    }
  }, []);

  // Save to localStorage whenever invoices change
  useEffect(() => {
    if (!loading) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(invoices));
    }
  }, [invoices, loading]);

  const createInvoice = (invoiceData: Omit<Invoice, "id" | "createdAt">) => {
    const newInvoice: Invoice = {
      ...invoiceData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString().split("T")[0],
    };
    setInvoices((prev) => [newInvoice, ...prev]);
    return newInvoice;
  };

  const updateInvoice = (id: string, updates: Partial<Invoice>) => {
    setInvoices((prev) =>
      prev.map((invoice) =>
        invoice.id === id ? { ...invoice, ...updates } : invoice,
      ),
    );
  };

  const deleteInvoice = (id: string) => {
    setInvoices((prev) => prev.filter((invoice) => invoice.id !== id));
  };

  const getInvoiceById = (id: string) => {
    return invoices.find((invoice) => invoice.id === id);
  };

  const getInvoiceStats = () => {
    const totalRevenue = invoices
      .filter((inv) => inv.status === "paid")
      .reduce((sum, inv) => sum + inv.amount, 0);

    const pendingAmount = invoices
      .filter((inv) => inv.status === "sent" || inv.status === "overdue")
      .reduce((sum, inv) => sum + inv.amount, 0);

    const paidInvoices = invoices.filter((inv) => inv.status === "paid").length;
    const overdueInvoices = invoices.filter(
      (inv) => inv.status === "overdue",
    ).length;

    return {
      totalRevenue,
      pendingAmount,
      paidInvoices,
      totalInvoices: invoices.length,
      overdueInvoices,
    };
  };

  return {
    invoices,
    loading,
    createInvoice,
    updateInvoice,
    deleteInvoice,
    getInvoiceById,
    getInvoiceStats,
  };
}
