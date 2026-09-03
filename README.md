This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


---

# Overview
- Receipt & Invoice OCR (rather than a general-purpose multimodal model, for cost-effectiveness, processing speed, and exact text extraction fidelity at scale)
- Extracting text from receipts, invoices, and financial documents. Needs high accuracy on printed text, numbers, and tables.
- want to avoid provider-specific boilerplate code so that if i want to switch models later, it's just a matter of changing a single line of code (why using Next.js is Vercel's AI SDK (ai) paired with Zod)

## Tech Stack
- libraries
- tools
- model
- model provider

## File Structure

## Ideation

### Model Selection

### Requirements:
* Free and no credit card required: The model/service must have a free tier with no upfront payment or credit card details (duh).
* High-accuracy OCR: Must be able to extract text from receipts, invoices, and financial documents, with high precision on printed text, numbers, and tables.
* Multimodal vision capability: Must be able to handle wrinkled paper, faded thermal ink, skewed angles, and noisy lighting.
* Strict JSON schema adherence: Must return valid, parseable JSON with:
    * Numbers as floats
    * Valid dates
    * Categorized arrays
    * No markdown preamble or extra formatting
* Cloud-based: Must run on the cloud, not locally on my laptop (ur gurl's runnin out of storage yall).

### Non-Critical Requirements:
* Tech Stack Alignment: Preference for models or tools already in the company's stack; bonus if it's a new model I haven't used before. 

### Out of Scope

The following items are not priorities for this project:

- **Scalability** – This is a personal project for practicing tool integration; enterprise-level scaling is not required.
- **Multi-user authentication** – Single-user only.
- **Real-time processing** – Batch processing is acceptable.
- **Mobile optimization** – Web-only interface.
- **Data persistence** – No database required; JSON outputs stored locally.


#### Model Comparison Table
| Factor | PaddleOCR | Gemini | Qwen | Azure Document Intelligence |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Strength** | Traditional OCR speed & efficiency | Superior accuracy & document understanding | Balance of OCR + understanding | Prebuilt financial document models & structured extraction |
| **OCR Accuracy** | High CA ~89%, near-perfect FCA ~98% | Higher accuracy (CA ~96.94%) | Weaker than PaddleOCR in direct OCR testing | Top-tier accuracy (CA ~97.87%) on printed text; **93% field accuracy on invoices** |
| **Document Understanding** | Primarily text extraction; serialization issues on complex layouts | Excellent contextual understanding | Good for post-processing/correction | **Prebuilt models** for invoices, receipts, tax forms, ID documents, and contracts |
| **Structured JSON Output** | ✅ Returns JSON via cloud API | ✅ Structured JSON | ✅ Structured JSON | ✅ **Returns structured JSON** with key-value pairs, tables, and confidence scores |
| **Speed** | Very fast (~0.11s/page GPU) | Moderate (~3.4s/page) | Slower (~6.37s) | ~1.5–3 seconds per document (async polling) |
| **Free Tier (No CC)** | **Free & open-source** (self-hosted) | 1,500 requests/day, 1M tokens/day | Limited free tier (90 days in certain regions) | **500 pages/month free** (F0 tier) |
| **Paid Pricing** | Official API has free daily quota | Pay-as-you-go | Pay-as-you-go | $15–20 / 1,000 pages (Read/Layout); $100–110 for prebuilt receipt/invoice |

## Storage/Data
- didn't want login for this mini-project bc don't want to have to worry about tying/associating financial data to an individual
- address model/provider storage/usage of uploaded data

## Process/Steps
- include qml diagrams of pipeline/flow


## Next Steps
- analyzing loading time
- comparing models on more metrics (latency, accuracy, etc)


## Literature review:
- "Popular open-source OCR models and how they work", July 7, 2025, https://www.ultralytics.com/blog/popular-open-source-ocr-models-and-how-they-work
-  "I Spent May Evaluating Different Engines for OCR", June 3, 2026, https://towardsdatascience.com/i-spent-may-evaluating-different-engines-for-ocr/
- "Supercharge your OCR Pipelines with Open Models", October 21, 2025, https://huggingface.co/blog/ocr-open-models#comparing-latest-models
- "8 Top Open-Source OCR Models Compared: A Complete Guide" March 31, 2025, https://modal.com/blog/8-top-open-source-ocr-models-compared
- "Best Open Source OCR Tools & Models in 2026 — Developer’s Guide" June 12, 2026, https://unstract.com/blog/best-opensource-ocr-tools/
- "I Evaluated the 8 Best Free OCR Tools for Document Conversion" Jan 2, 2026, https://learn.g2.com/free-ocr-software
- "OCR (Optical Character Recognition) with world-class Google Cloud AI", [as of Sep 3, 2026], https://cloud.google.com/use-cases/ocr
- "Google Vision vs AWS Textract vs Azure: Cloud OCR Comparison 2026", June 30, 2026, https://imagetotable.ai/blog/google-vs-aws-vs-azure-ocr-2026