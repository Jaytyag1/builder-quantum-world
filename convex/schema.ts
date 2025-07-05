import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Invoice management tables
  invoices: defineTable({
    invoiceNumber: v.string(),
    clientName: v.string(),
    clientEmail: v.string(),
    amount: v.number(),
    dueDate: v.string(),
    status: v.union(
      v.literal("draft"),
      v.literal("sent"),
      v.literal("paid"),
      v.literal("overdue"),
    ),
    createdAt: v.string(),
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
  }),

  // User management
  users: defineTable({
    name: v.string(),
    email: v.string(),
    clerkId: v.string(),
    businessName: v.optional(v.string()),
    businessAddress: v.optional(v.string()),
    createdAt: v.string(),
  }).index("by_clerk_id", ["clerkId"]),

  // Client management
  clients: defineTable({
    name: v.string(),
    email: v.string(),
    address: v.optional(v.string()),
    phone: v.optional(v.string()),
    userId: v.id("users"),
    createdAt: v.string(),
  }),

  // Example numbers table from template
  numbers: defineTable({
    value: v.number(),
  }),
});
