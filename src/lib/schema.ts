// defines shape of receipt data 

import { z } from 'zod';

export const expenseCategorySchema = z.enum([
  'Food & Dining',
  'Groceries',
  'Transportation',
  'Office & Supplies',
  'Electronics & Software',
  'Utilities',
  'Health & Wellness',
  'Other',
]);

export type ExpenseCategory = z.infer<typeof expenseCategorySchema>;

export const expenseItemSchema = z.object({
  name: z.string().describe('Short name or description of the purchased item'),
  category: expenseCategorySchema.describe('Best matching expense category for this item'),
  price: z.number().describe('Unit or total price for this line item as a float'),
});

export type ExpenseItem = z.infer<typeof expenseItemSchema>;

export const receiptSchema = z.object({
  merchant: z.string().describe('Store or vendor name'),
  date: z.string().describe('Date of transaction in YYYY-MM-DD format, or today if absent'),
  currency: z.string().describe('Three-letter currency code, e.g. USD, EUR, CAD'),
  items: z.array(expenseItemSchema).describe('List of itemized goods or services purchased'),
  subtotal: z.number().describe('Subtotal before taxes and fees'),
  tax: z.number().describe('Sales tax or VAT amount'),
  total: z.number().describe('Grand total paid on the receipt'),
});

export type ReceiptData = z.infer<typeof receiptSchema>;