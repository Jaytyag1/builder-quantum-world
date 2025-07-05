import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

// Get all invoices for a user
export const getInvoices = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    const invoices = await ctx.db
      .query("invoices")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .order("desc")
      .collect();
    return invoices;
  },
});

// Get single invoice
export const getInvoice = query({
  args: { invoiceId: v.id("invoices") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.invoiceId);
  },
});

// Create new invoice
export const createInvoice = mutation({
  args: {
    invoiceNumber: v.string(),
    clientName: v.string(),
    clientEmail: v.string(),
    amount: v.number(),
    dueDate: v.string(),
    items: v.array(
      v.object({
        description: v.string(),
        quantity: v.number(),
        rate: v.number(),
        amount: v.number(),
      }),
    ),
    notes: v.optional(v.string()),
    userId: v.id("users"),
  },
  handler: async (ctx, args) => {
    const invoiceId = await ctx.db.insert("invoices", {
      ...args,
      status: "draft",
      createdAt: new Date().toISOString(),
    });
    return invoiceId;
  },
});

// Update invoice status
export const updateInvoiceStatus = mutation({
  args: {
    invoiceId: v.id("invoices"),
    status: v.union(
      v.literal("draft"),
      v.literal("sent"),
      v.literal("paid"),
      v.literal("overdue"),
    ),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.invoiceId, {
      status: args.status,
    });
  },
});

// Delete invoice
export const deleteInvoice = mutation({
  args: { invoiceId: v.id("invoices") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.invoiceId);
  },
});

// Get invoice analytics
export const getInvoiceAnalytics = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    const invoices = await ctx.db
      .query("invoices")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .collect();

    const totalInvoices = invoices.length;
    const paidInvoices = invoices.filter((inv) => inv.status === "paid").length;
    const pendingInvoices = invoices.filter(
      (inv) => inv.status === "sent",
    ).length;
    const overdueInvoices = invoices.filter(
      (inv) => inv.status === "overdue",
    ).length;

    const totalRevenue = invoices
      .filter((inv) => inv.status === "paid")
      .reduce((sum, inv) => sum + inv.amount, 0);

    const pendingAmount = invoices
      .filter((inv) => inv.status === "sent" || inv.status === "overdue")
      .reduce((sum, inv) => sum + inv.amount, 0);

    return {
      totalInvoices,
      paidInvoices,
      pendingInvoices,
      overdueInvoices,
      totalRevenue,
      pendingAmount,
    };
  },
});
