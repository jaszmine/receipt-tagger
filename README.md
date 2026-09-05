This is a [Next.js](https://nextjs.org) project bootstrapped with `[create-next-app](https://nextjs.org/docs/app/api-reference/cli/create-next-app)`.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses `[next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)` to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---



# Overview

- Receipt & Invoice OCR (rather than a general-purpose multimodal model, for cost-effectiveness, processing speed, and exact text extraction fidelity at scale)
- Extracting text from receipts, invoices, and financial documents. Needs high accuracy on printed text, numbers, and tables.
- want to avoid provider-specific boilerplate code so that if i want to switch models later, it's just a matter of changing a single line of code (why using Next.js is Vercel's AI SDK (ai) paired with Zod)



## Motivation

  


## Tech Stack


| Category                                                                                                                       | Tool                                                                                                                    | Version                                                                                                                    | Description                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **Core UI, Framework & Runtime**                                                                                               | ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)              | `v16.3.4`                                                                                                                  | Full-stack React framework managing App Router navigation, serverless routes, and client bundling.             |
| ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)                            | `v19.2.8`                                                                                                               | *(Library)* Core declarative UI engine managing component state, reactivity, and DOM reconciliation.                       |                                                                                                                |
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)                     | `v24.11.0`                                                                                                              | JavaScript server runtime executing Next.js build scripts and local development server processes.                          |                                                                                                                |
| **Language & Type Safety**                                                                                                     | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)       | `v5.9.3`                                                                                                                   | Static typing system providing compile-time type safety across props, data structures, and API contracts.      |
| ![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white)                                   | `v4.5.4`                                                                                                                | *(Library)* Declarative TypeScript-first schema declaration and runtime object validation library.                         |                                                                                                                |
| **AI & Multimodal Vision**                                                                                                     | ![Vercel AI SDK](https://img.shields.io/badge/Vercel_AI_SDK-000000?style=for-the-badge&logo=vercel&logoColor=white)     | `v7.0.92`                                                                                                                  | *(Library)* Model-agnostic AI integration SDK orchestrating structured multimodal outputs via `Output.object`. |
| ![@ai-sdk/google](https://img.shields.io/badge/Google_Provider-4285F4?style=for-the-badge&logo=google&logoColor=white)         | `v4.0.63`                                                                                                               | *(Library)* Official Google AI provider binding the Vercel AI SDK to Gemini foundation models.                             |                                                                                                                |
| ![Google Gemini](https://img.shields.io/badge/Google_Gemini-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white)      | `gemini-3.6-flash`                                                                                                      | Multimodal vision model parsing receipt images, performing OCR, and extracting structured line items.                      |                                                                                                                |
| **Styling & Components**                                                                                                       | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) | `v4.3.3`                                                                                                                   | Utility-first CSS styling engine paired with `@tailwindcss/postcss` for optimized compilation.                 |
| ![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)                | `v4.20.1`                                                                                                               | Component architecture CLI generating unstyled, customizable design primitives.                                            |                                                                                                                |
| ![Lucide React](https://img.shields.io/badge/Lucide_React-F56565?style=for-the-badge&logo=lucide&logoColor=white)              | `v1.40.0`                                                                                                               | *(Library)* Lightweight SVG icon pack providing crisp UI glyphs for actions and status cues.                               |                                                                                                                |
| ![Class Variance Authority](https://img.shields.io/badge/CVA-111827?style=for-the-badge&logo=styledcomponents&logoColor=white) | `v0.7.1`                                                                                                                | *(Library)* Utility for composing type-safe, variant-driven UI component classes.                                          |                                                                                                                |
| ![tailwind-merge](https://img.shields.io/badge/tailwind--merge-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)   | `v3.6.0`                                                                                                                | *(Library)* Utility function for cleanly merging Tailwind classes without CSS specificity collisions (with `clsx v2.1.1`). |                                                                                                                |
| **Visualization & Export**                                                                                                     | ![Recharts](https://img.shields.io/badge/Recharts-22B5BF?style=for-the-badge&logo=chartdotjs&logoColor=white)           | `v3.10.1`                                                                                                                  | *(Library)* Responsive charting library rendering category donut graphs and item cost bar charts.              |
| ![PapaParse](https://img.shields.io/badge/PapaParse-FF6B6B?style=for-the-badge&logo=javascript&logoColor=white)                | `v5.7.0`                                                                                                                | *(Library)* Client-side CSV parser and serializer converting structured receipt data to downloadable spreadsheets.         |                                                                                                                |
| ![html-to-image](https://img.shields.io/badge/html--to--image-4B32C3?style=for-the-badge&logo=html5&logoColor=white)           | `v1.11.13`                                                                                                              | *(Library)* Rasterization utility capturing Recharts DOM nodes directly into downloadable high-res PNG images.             |                                                                                                                |
| **Tooling & Environment**                                                                                                      | ![Cursor IDE](https://img.shields.io/badge/Cursor_IDE-000000?style=for-the-badge&logo=cursor&logoColor=white)           | `v3.18.25`                                                                                                                 | AI-native IDE and code editor providing agentic workspace intelligence and refactoring.                        |
| ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)                          | `v9.39.5`                                                                                                               | Pluggable JavaScript/TypeScript static code analysis engine using `eslint-config-next v16.3.4`.                            |                                                                                                                |
| ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)                                   | `v2.39.2`                                                                                                               | Distributed version control system maintaining branch workflows, commits, and project history.                             |                                                                                                                |




  




## Key Features

- **Multimodal AI Receipt Parsing**
  - Automated OCR and document understanding powered by Google Gemini via Vercel AI SDK.
  - Extracts structured metadata including merchant name, transaction date, currency, line items, subtotal, tax, and total.
- **Intelligent Expense Auto-Categorization**
  - Classifies individual line items into standard budget categories (*Food & Dining, Groceries, Transportation, Office, Electronics, Utilities, Health, Other*).
  - Color-coded category badges for fast scanning.
- **Interactive & Editable Data Grid**
  - Live inline editing for item names, prices, and categories to correct misread lines or adjust numbers.
  - Dynamic row management to add missing items or remove unwanted charges.
  - Real-time calculation engine that updates subtotals and grand totals immediately upon edit.
- **Expense Analytics & Visualizations**
  - **Category Breakdown:** Donut chart illustrating relative spend distribution across categories.
  - **Itemized Cost Comparison:** Bar chart highlighting individual item price distribution.
  - Built using responsive, theme-aware Recharts components.
- **One-Click Export Capabilities**
  - **CSV Export:** Converts structured receipt records into standard CSV format via PapaParse for bookkeeping, expense reports, or Google Sheets/Excel.
  - **PNG Chart Capture:** High-resolution DOM-to-image export using `html-to-image` to save clean graphical snapshots of analytics.
- **Modular & Swappable Architecture**
  - Decoupled model switchboard (`src/lib/ai.ts`) allowing seamless migration to Azure OpenAI, Anthropic, or open-source vision models (e.g., Qwen-VL) without rewriting application logic.
  - Strictly typed validation layer using Zod schemas for deterministic JSON parsing.

  


## File Structure

  


## Ideation

  


### Model Selection

  


### Requirements:

- Free and no credit card required: The model/service must have a free tier with no upfront payment or credit card details (duh).
- High-accuracy OCR: Must be able to extract text from receipts, invoices, and financial documents, with high precision on printed text, numbers, and tables.
- Multimodal vision capability: Must be able to handle wrinkled paper, faded thermal ink, skewed angles, and noisy lighting.
- Strict JSON schema adherence: Must return valid, parseable JSON with:
  - Numbers as floats
  - Valid dates
  - Categorized arrays
  - No markdown preamble or extra formatting
- Cloud-based: Must run on the cloud, not locally on my laptop (ur gurl's runnin out of storage yall).



### Non-Critical Requirements:

- Tech Stack Alignment: Preference for models or tools already in the company's stack; bonus if it's a new model I haven't used before.



### Out of Scope

The following items are not priorities for this project:

- **Scalability** – This is a personal project for practicing tool integration; enterprise-level scaling is not required.
- **Multi-user authentication** – Single-user only.
- **Real-time processing** – Batch processing is acceptable.
- **Mobile optimization** – Web-only interface.
- **Data persistence** – No database required; JSON outputs stored locally.



#### Model Comparison Table


| Factor                     | PaddleOCR                                                          | Gemini                                     | Qwen                                           | Azure Document Intelligence                                                        |
| -------------------------- | ------------------------------------------------------------------ | ------------------------------------------ | ---------------------------------------------- | ---------------------------------------------------------------------------------- |
| **Primary Strength**       | Traditional OCR speed & efficiency                                 | Superior accuracy & document understanding | Balance of OCR + understanding                 | Prebuilt financial document models & structured extraction                         |
| **OCR Accuracy**           | High CA ~89%, near-perfect FCA ~98%                                | Higher accuracy (CA ~96.94%)               | Weaker than PaddleOCR in direct OCR testing    | Top-tier accuracy (CA ~97.87%) on printed text; **93% field accuracy on invoices** |
| **Document Understanding** | Primarily text extraction; serialization issues on complex layouts | Excellent contextual understanding         | Good for post-processing/correction            | **Prebuilt models** for invoices, receipts, tax forms, ID documents, and contracts |
| **Structured JSON Output** | ✅ Returns JSON via cloud API                                       | ✅ Structured JSON                          | ✅ Structured JSON                              | ✅ **Returns structured JSON** with key-value pairs, tables, and confidence scores  |
| **Speed**                  | Very fast (~0.11s/page GPU)                                        | Moderate (~3.4s/page)                      | Slower (~6.37s)                                | ~1.5–3 seconds per document (async polling)                                        |
| **Free Tier (No CC)**      | **Free & open-source** (self-hosted)                               | 1,500 requests/day, 1M tokens/day          | Limited free tier (90 days in certain regions) | **500 pages/month free** (F0 tier)                                                 |
| **Paid Pricing**           | Official API has free daily quota                                  | Pay-as-you-go                              | Pay-as-you-go                                  | $15–20 / 1,000 pages (Read/Layout); $100–110 for prebuilt receipt/invoice          |




## Storage/Data

- didn't want login for this mini-project bc don't want to have to worry about tying/associating financial data to an individual
- address model/provider storage/usage of uploaded data



## Process/Steps

- include qml diagrams of pipeline/flow




## Next Steps

**Core UX & Data Editing**

- [ ] Make receipt/merchant title editable inline
- [ ] Make categories editable per line item via dropdown
- [ ] Add `Services` to supported category list and color mapping
- [ ] Add Undo and Redo buttons for table edits (history state stack)

**File Support & Edge-Case Handling**

- [ ] Add support for `.pdf` document uploads
- [ ] Handle partial/cut-off receipts (detect truncation and flag incomplete scans)
- [ ] Handle crumpled paper, shadows, and low-contrast lighting (prompt refinement + client pre-processing)

**Analytics & Visual Insights**

- [ ] Expand actionable insights and executive summary reports
- [ ] Add automated presentation generation feature (slide export)

**Benchmarking & Performance**

- [ ] Analyze end-to-end loading times (network latency vs. model inference)
- [ ] Run multi-model evaluation benchmarks (comparing Gemini against alternatives on accuracy, latency, and cost)

<br>

**Post-MVP/Out of Scope**

* User authentication & cloud persistence
* Multi-receipt aggregation over time
* Expand Expense Analytics
  * Custom date range filtering & quarterly views (Q1–Q4)
  * Automated presentation/slide deck generation feature (slide export)
  * Expenses-over-time trend chart (line/area view)
  * Budget compliance visualizer (parallel actual vs. budget bar charts)



## Literature review:

- "Popular open-source OCR models and how they work", July 7, 2025, [https://www.ultralytics.com/blog/popular-open-source-ocr-models-and-how-they-work](https://www.ultralytics.com/blog/popular-open-source-ocr-models-and-how-they-work)
- "I Spent May Evaluating Different Engines for OCR", June 3, 2026, [https://towardsdatascience.com/i-spent-may-evaluating-different-engines-for-ocr/](https://towardsdatascience.com/i-spent-may-evaluating-different-engines-for-ocr/)
- "Supercharge your OCR Pipelines with Open Models", October 21, 2025, [https://huggingface.co/blog/ocr-open-models#comparing-latest-models](https://huggingface.co/blog/ocr-open-models#comparing-latest-models)
- "8 Top Open-Source OCR Models Compared: A Complete Guide" March 31, 2025, [https://modal.com/blog/8-top-open-source-ocr-models-compared](https://modal.com/blog/8-top-open-source-ocr-models-compared)
- "Best Open Source OCR Tools & Models in 2026 — Developer’s Guide" June 12, 2026, [https://unstract.com/blog/best-opensource-ocr-tools/](https://unstract.com/blog/best-opensource-ocr-tools/)
- "I Evaluated the 8 Best Free OCR Tools for Document Conversion" Jan 2, 2026, [https://learn.g2.com/free-ocr-software](https://learn.g2.com/free-ocr-software)
- "OCR (Optical Character Recognition) with world-class Google Cloud AI", [as of Sep 3, 2026], [https://cloud.google.com/use-cases/ocr](https://cloud.google.com/use-cases/ocr)
- "Google Vision vs AWS Textract vs Azure: Cloud OCR Comparison 2026", June 30, 2026, [https://imagetotable.ai/blog/google-vs-aws-vs-azure-ocr-2026](https://imagetotable.ai/blog/google-vs-aws-vs-azure-ocr-2026)

