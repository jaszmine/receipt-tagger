'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Trash2 } from 'lucide-react';
import { ExpenseItem, ReceiptData } from '@/lib/schema';

export const CATEGORY_COLORS: Record<string, string> = {
  'Food & Dining': '#f97316',
  Groceries: '#10b981',
  Transportation: '#06b6d4',
  'Office & Supplies': '#8b5cf6',
  'Electronics & Software': '#3b82f6',
  Utilities: '#eab308',
  'Health & Wellness': '#ec4899',
  Other: '#64748b',
};

interface LineItemsTableProps {
  receipt: ReceiptData;
  onUpdateItem: (index: number, field: keyof ExpenseItem, value: any) => void;
  onRemoveItem: (index: number) => void;
  onAddItem: () => void;
  hasPreview: boolean;
}

export function LineItemsTable({
  receipt,
  onUpdateItem,
  onRemoveItem,
  onAddItem,
  hasPreview,
}: LineItemsTableProps) {
  return (
    <Card className={hasPreview ? 'lg:col-span-2' : 'lg:col-span-3'}>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Line Items</CardTitle>
          <CardDescription>Click any value to modify before exporting.</CardDescription>
        </div>
        <Button size="sm" variant="outline" onClick={onAddItem}>
          <Plus className="w-4 h-4 mr-1" /> Add Row
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {receipt.items.map((item, idx) => (
              <TableRow key={idx}>
                <TableCell>
                  <Input
                    value={item.name}
                    onChange={(e) => onUpdateItem(idx, 'name', e.target.value)}
                    className="h-8 text-sm"
                  />
                </TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    style={{
                      backgroundColor: `${CATEGORY_COLORS[item.category] || '#64748b'}20`,
                      color: CATEGORY_COLORS[item.category] || '#64748b',
                    }}
                  >
                    {item.category}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Input
                    type="number"
                    step="0.01"
                    value={item.price}
                    onChange={(e) => onUpdateItem(idx, 'price', parseFloat(e.target.value) || 0)}
                    className="h-8 text-sm w-24 ml-auto text-right"
                  />
                </TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onRemoveItem(idx)}
                    className="h-8 w-8 text-slate-400 hover:text-red-500"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="mt-4 pt-4 border-t space-y-1 text-sm text-right">
          <p className="text-slate-500">
            Subtotal: <span className="font-semibold text-slate-900">${receipt.subtotal.toFixed(2)}</span>
          </p>
          <p className="text-slate-500">
            Tax: <span className="font-semibold text-slate-900">${receipt.tax.toFixed(2)}</span>
          </p>
          <p className="text-lg font-bold text-slate-900">
            Total: ${receipt.total.toFixed(2)} {receipt.currency}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}