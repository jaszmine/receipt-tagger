'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, RefreshCw, PieChart as PieChartIcon } from 'lucide-react';
import { ReceiptData } from '@/lib/schema';

interface ActionBarProps {
  receipt: ReceiptData;
  onReset: () => void;
  onExportCSV: () => void;
  onExportPNG: () => void;
}

export function ActionBar({ receipt, onReset, onExportCSV, onExportPNG }: ActionBarProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
      <div>
        <h2 className="text-xl font-bold">{receipt.merchant}</h2>
        <p className="text-sm text-slate-500">
          {receipt.date} • Currency: {receipt.currency}
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button variant="outline" size="sm" onClick={onReset}>
          <RefreshCw className="w-4 h-4 mr-1" /> New Receipt
        </Button>
        <Button variant="outline" size="sm" onClick={onExportCSV}>
          <Download className="w-4 h-4 mr-1" /> Export CSV
        </Button>
        <Button size="sm" onClick={onExportPNG}>
          <PieChartIcon className="w-4 h-4 mr-1" /> Export Charts (PNG)
        </Button>
      </div>
    </div>
  );
}