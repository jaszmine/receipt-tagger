'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Image as ImageIcon } from 'lucide-react';

interface ReceiptPreviewProps {
  imageSrc: string;
}

export function ReceiptPreview({ imageSrc }: ReceiptPreviewProps) {
  return (
    <Card className="lg:col-span-1 border-slate-200 shadow-sm overflow-hidden flex flex-col">
      <CardHeader>
        <CardTitle className="text-md flex items-center gap-2">
          <ImageIcon className="w-4 h-4" /> Uploaded Image
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex items-center justify-center p-4 bg-slate-100">
        <img
          src={imageSrc}
          alt="Receipt scan"
          className="max-h-96 w-auto object-contain rounded border border-slate-200"
        />
      </CardContent>
    </Card>
  );
}