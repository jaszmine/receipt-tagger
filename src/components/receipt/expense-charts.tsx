'use client';

import React, { forwardRef } from 'react';
import {
  PieChart,
  Pie,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { ReceiptData } from '@/lib/schema';
import { CATEGORY_COLORS } from './line-items-table';

interface ExpenseChartsProps {
  receipt: ReceiptData;
}

export const ExpenseCharts = forwardRef<HTMLDivElement, ExpenseChartsProps>(
  ({ receipt }, ref) => {
    // Attach 'fill' directly to the object so Recharts colors each slice automatically
    const categoryData = receipt.items.reduce((acc, item) => {
      const existing = acc.find((c) => c.name === item.category);
      if (existing) {
        existing.value += item.price;
      } else {
        acc.push({
          name: item.category,
          value: item.price,
          fill: CATEGORY_COLORS[item.category] || '#94a3b8',
        });
      }
      return acc;
    }, [] as { name: string; value: number; fill: string }[]);

    return (
      <div ref={ref} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
        <div>
          <h3 className="text-lg font-bold">Expense Analytics</h3>
          <p className="text-sm text-slate-500">Visual breakdown by category and line item expense.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Category Donut */}
          <div className="flex flex-col items-center">
            <h4 className="text-sm font-semibold mb-4 text-slate-700">Spending by Category</h4>
            <div className="w-full h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={4}
                  />
                  <Tooltip formatter={(val: any) => [`$${Number(val).toFixed(2)}`, 'Spent']} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Line Item Bar Chart */}
          <div className="flex flex-col items-center">
            <h4 className="text-sm font-semibold mb-4 text-slate-700">Cost per Line Item</h4>
            <div className="w-full h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={receipt.items}
                  margin={{ top: 10, right: 10, left: -20, bottom: 20 }}
                >
                  <XAxis
                    dataKey="name"
                    tick={{ fontSize: 11 }}
                    interval={0}
                    angle={-20}
                    textAnchor="end"
                  />
                  <YAxis tick={{ fontSize: 11 }} />
                  <Tooltip formatter={(val: any) => [`$${Number(val).toFixed(2)}`, 'Cost']} />
                  <Bar dataKey="price" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

ExpenseCharts.displayName = 'ExpenseCharts';