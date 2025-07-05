import React from "react";
import { useQuery, useMutation } from "convex/react";
import { useSafeUser } from "@/hooks/useSafeAuth";
import { api } from "../../convex/_generated/api";
import type { Id } from "../../convex/_generated/dataModel";

export interface InvoiceItem {
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

export interface ConvexInvoice {
  _id: Id<"invoices">;
  _creationTime: number;
  invoiceNumber: string;
  clientName: string;
  clientEmail: string;
  amount: number;
  status: "draft" | "sent" | "paid" | "overdue";
  dueDate: string;
  createdAt: string;
  items: InvoiceItem[];
  notes?: string;
  userId: Id<"users">;
}

export function useConvexInvoices() {
  const { user } = useUser();
  const clerkId = user?.id;

  // Get or create user in Convex
  const getOrCreateUser = useMutation(api.users.getOrCreateUser);
  const currentUser = useQuery(
    api.users.getUserByClerkId,
    clerkId ? { clerkId } : "skip",
  );

  // Invoice operations
  const invoicesData = useQuery(
    api.invoices.getInvoices,
    currentUser ? { userId: currentUser._id } : "skip",
  );

  const analytics = useQuery(
    api.invoices.getInvoiceAnalytics,
    currentUser ? { userId: currentUser._id } : "skip",
  );

  const createInvoice = useMutation(api.invoices.createInvoice);
  const updateInvoiceStatus = useMutation(api.invoices.updateInvoiceStatus);
  const deleteInvoiceMutation = useMutation(api.invoices.deleteInvoice);

  // Initialize user if needed
  React.useEffect(() => {
    if (user && !currentUser && clerkId) {
      getOrCreateUser({
        clerkId,
        name: user.fullName || user.firstName || "User",
        email: user.primaryEmailAddress?.emailAddress || "",
      });
    }
  }, [user, currentUser, clerkId, getOrCreateUser]);

  const handleCreateInvoice = async (invoiceData: {
    invoiceNumber: string;
    clientName: string;
    clientEmail: string;
    amount: number;
    dueDate: string;
    items: InvoiceItem[];
    notes?: string;
  }) => {
    if (!currentUser) throw new Error("User not authenticated");

    return await createInvoice({
      ...invoiceData,
      userId: currentUser._id,
    });
  };

  const handleUpdateStatus = async (
    invoiceId: Id<"invoices">,
    status: "draft" | "sent" | "paid" | "overdue",
  ) => {
    await updateInvoiceStatus({ invoiceId, status });
  };

  const handleDeleteInvoice = async (invoiceId: Id<"invoices">) => {
    await deleteInvoiceMutation({ invoiceId });
  };

  const getInvoiceById = (id: string) => {
    return invoicesData?.find((invoice) => invoice._id === id);
  };

  const getInvoiceStats = () => {
    if (!analytics) {
      return {
        totalRevenue: 0,
        pendingAmount: 0,
        paidInvoices: 0,
        totalInvoices: 0,
        overdueInvoices: 0,
      };
    }
    return analytics;
  };

  return {
    invoices: invoicesData || [],
    loading: invoicesData === undefined || currentUser === undefined,
    currentUser,
    createInvoice: handleCreateInvoice,
    updateInvoice: handleUpdateStatus,
    deleteInvoice: handleDeleteInvoice,
    getInvoiceById,
    getInvoiceStats,
    isAuthenticated: !!user,
  };
}
