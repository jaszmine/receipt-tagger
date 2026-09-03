'use client';

import React, { useState, useRef } from 'react';
import Papa from 'papaparse';
import { toPng } from 'html-to-image';
import { ReceiptData, ExpenseItem } from '@/lib/schema';

import { Dropzone } from '@/components/receipt/dropzone';
import { ReceiptPreview } from '@/components/receipt/receipt-preview';
import { LineItemsTable } from '@/components/receipt/line-items-table';
import { ExpenseCharts } from '@/components/receipt/expense-charts';
import { ActionBar } from '@/components/receipt/action-bar';

export default function ReceiptDashboard() {
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [receipt, setReceipt] = useState<ReceiptData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const chartRef = useRef<HTMLDivElement>(null);

  const handleFileUpload = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Please upload a valid image file (PNG, JPG, WEBP).');
      return;
    }

    setError(null);
    setLoading(true);

    const reader = new FileReader();
    reader.onload = async () => {
      const base64Data = reader.result as string;
      setImagePreview(base64Data);

      try {
        const response = await fetch('/api/parse-receipt', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ image: base64Data }),
        });

        const json = await response.json();
        if (!response.ok) throw new Error(json.error || 'Failed to process receipt.');

        setReceipt(json.data);
      } catch (err: any) {
        setError(err.message || 'Something went wrong while analyzing the receipt.');
      } finally {
        setLoading(false);
      }
    };
    reader.readAsDataURL(file);
  };

  const updateItem = (index: number, field: keyof ExpenseItem, value: any) => {
    if (!receipt) return;
    const updatedItems = [...receipt.items];
    updatedItems[index] = { ...updatedItems[index], [field]: value };

    const newSubtotal = updatedItems.reduce((sum, item) => sum + (Number(item.price) || 0), 0);
    setReceipt({
      ...receipt,
      items: updatedItems,
      subtotal: Number(newSubtotal.toFixed(2)),
      total: Number((newSubtotal + receipt.tax).toFixed(2)),
    });
  };

  const removeItem = (index: number) => {
    if (!receipt) return;
    const updatedItems = receipt.items.filter((_, i) => i !== index);
    const newSubtotal = updatedItems.reduce((sum, item) => sum + (Number(item.price) || 0), 0);
    setReceipt({
      ...receipt,
      items: updatedItems,
      subtotal: Number(newSubtotal.toFixed(2)),
      total: Number((newSubtotal + receipt.tax).toFixed(2)),
    });
  };

  const addItem = () => {
    if (!receipt) return;
    const newItem: ExpenseItem = {
      name: 'New Item',
      category: 'Other',
      price: 0.0,
    };
    setReceipt({ ...receipt, items: [...receipt.items, newItem] });
  };

  const exportCSV = () => {
    if (!receipt) return;
    const flatData = receipt.items.map((item) => ({
      Merchant: receipt.merchant,
      Date: receipt.date,
      Currency: receipt.currency,
      Item: item.name,
      Category: item.category,
      Price: item.price.toFixed(2),
      Subtotal: receipt.subtotal.toFixed(2),
      Tax: receipt.tax.toFixed(2),
      Total: receipt.total.toFixed(2),
    }));

    const csv = Papa.unparse(flatData);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${receipt.merchant.toLowerCase().replace(/\s+/g, '-')}-receipt.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportChartPNG = async () => {
    if (!chartRef.current) return;
    try {
      const dataUrl = await toPng(chartRef.current, { backgroundColor: '#ffffff', quality: 0.95 });
      const link = document.createElement('a');
      link.download = `${receipt?.merchant || 'expense'}-breakdown.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Failed to export chart image:', err);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-12 text-slate-900">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight">Smart Receipt Auto-Tagger</h1>
          <p className="text-slate-600">Multimodal OCR and automatic categorization powered by AI.</p>
        </div>

        {!receipt ? (
          <Dropzone
            loading={loading}
            error={error}
            onFileSelected={handleFileUpload}
          />
        ) : (
          <div className="space-y-8">
            <ActionBar
              receipt={receipt}
              onReset={() => {
                setReceipt(null);
                setImagePreview(null);
              }}
              onExportCSV={exportCSV}
              onExportPNG={exportChartPNG}
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {imagePreview && <ReceiptPreview imageSrc={imagePreview} />}
              <LineItemsTable
                receipt={receipt}
                onUpdateItem={updateItem}
                onRemoveItem={removeItem}
                onAddItem={addItem}
                hasPreview={Boolean(imagePreview)}
              />
            </div>

            <ExpenseCharts ref={chartRef} receipt={receipt} />
          </div>
        )}
      </div>
    </main>
  );
}


// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert h-5 w-[100px]"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the{" "}
//             <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
//               page.tsx
//             </code>{" "}
//             file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert h-[14px] w-4"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={14}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }
