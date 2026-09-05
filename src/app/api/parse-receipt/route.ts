import { NextResponse } from 'next/server';
import { generateText, Output } from 'ai';
import { visionModel } from '@/lib/ai';
import { receiptSchema } from '@/lib/schema';

export const maxDuration = 60;

export async function POST(req: Request) {
  try {
    const { image } = await req.json();

    if (!image || typeof image !== 'string') {
      return NextResponse.json(
        { error: 'A base64 receipt image or data URL is required.' },
        { status: 400 }
      );
    }

    const { output, usage } = await generateText({
      model: visionModel,
      output: Output.object({ schema: receiptSchema }),
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: 'Carefully analyze this receipt image. Extract the merchant name, transaction date (YYYY-MM-DD), currency code, each purchased line item with an appropriate category tag, the subtotal, taxes, and grand total. If tax or date cannot be found, make reasonable inferences based on standard defaults.',
            },
            {
              type: 'file',
              mediaType: 'image',
              data: image,
            },
          ],
        },
      ],
    });

    console.log('Prompt tokens:', usage.inputTokens);
    console.log('Completion tokens:', usage.outputTokens);
    console.log('Total tokens:', usage.totalTokens);

    return NextResponse.json({ success: true, data: output });
  } catch (error: any) {
    console.error('Receipt parsing error:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to parse receipt.' },
      { status: 500 }
    );
  }
}