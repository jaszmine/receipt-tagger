'use client';

import React, { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, Loader2 } from 'lucide-react';

interface DropzoneProps {
  loading: boolean;
  error: string | null;
  onFileSelected: (file: File) => void;
}

export function Dropzone({ loading, error, onFileSelected }: DropzoneProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files?.[0]) {
      onFileSelected(e.dataTransfer.files[0]);
    }
  };

  return (
    <Card
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDrop}
      className="border-dashed border-2 border-slate-300 hover:border-slate-400 bg-white transition-all cursor-pointer p-8 text-center"
      onClick={() => fileInputRef.current?.click()}
    >
      <CardContent className="flex flex-col items-center justify-center space-y-4 pt-6">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => e.target.files?.[0] && onFileSelected(e.target.files[0])}
        />
        <div className="p-4 bg-slate-100 rounded-full">
          {loading ? (
            <Loader2 className="w-8 h-8 animate-spin text-slate-700" />
          ) : (
            <Upload className="w-8 h-8 text-slate-700" />
          )}
        </div>
        <div className="space-y-1">
          <p className="font-semibold text-lg">
            {loading ? 'Analyzing receipt...' : 'Click to upload or drag & drop'}
          </p>
          <p className="text-sm text-slate-500">Supports PNG, JPG, JPEG, and WEBP</p>
        </div>
        {error && <p className="text-sm text-red-500 font-medium">{error}</p>}
      </CardContent>
    </Card>
  );
}