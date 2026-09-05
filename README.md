This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.



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



<table>

  <thead>
    <tr>
      <th width="15%">Category</th>
      <th width="25%">Tool</th>
      <th width="20%">Version</th>
      <th width="40%">Description</th>
    </tr>
    <!-- <tr>
      <th width="22%">Category</th>
      <th width="20%">Tool</th>
      <th width="12%">Version</th>
      <th width="46%">Description</th>
    </tr> -->
  </thead>
  <tbody>
    <!-- Core UI, Framework & Runtime -->
    <tr>
      <td rowspan="3"><b>Core UI, Framework &amp; Runtime</b></td>
      <td>
        <a href="https://nextjs.org/">
          <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js">
        </a>
      </td>
      <td><code>v16.3.4</code></td>
      <td>Full-stack React framework managing App Router navigation, serverless routes, and client bundling.</td>
    </tr>
    <tr>
      <td>
        <a href="https://react.dev/">
          <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
        </a>
      </td>
      <td><code>v19.2.8</code></td>
      <td><i>(Library)</i> Core declarative UI engine managing component state, reactivity, and DOM reconciliation.</td>
    </tr>
    <tr>
      <td>
        <a href="https://nodejs.org/">
          <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
        </a>
      </td>
      <td><code>v24.11.0</code></td>
      <td>JavaScript server runtime executing Next.js build scripts and local development server processes.</td>
    </tr>
    <!-- Language & Type Safety -->
    <tr>
      <td rowspan="2"><b>Language &amp; Type Safety</b></td>
      <td>
        <a href="https://www.typescriptlang.org/">
          <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
        </a>
      </td>
      <td><code>v5.9.3</code></td>
      <td>Static typing system providing compile-time type safety across props, data structures, and API contracts.</td>
    </tr>
    <tr>
      <td>
        <a href="https://zod.dev/">
          <img src="https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white" alt="Zod">
        </a>
      </td>
      <td><code>v4.5.4</code></td>
      <td><i>(Library)</i> Declarative TypeScript-first schema declaration and runtime object validation library.</td>
    </tr>
    <!-- AI & Multimodal Vision -->
    <tr>
      <td rowspan="3"><b>AI &amp; Multimodal Vision</b></td>
      <td>
        <a href="https://sdk.vercel.ai/docs">
          <img src="https://img.shields.io/badge/Vercel_AI_SDK-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel AI SDK">
        </a>
      </td>
      <td><code>v7.0.92</code></td>
      <td><i>(Library)</i> Model-agnostic AI integration SDK orchestrating structured multimodal outputs via <code>Output.object</code>.</td>
    </tr>
    <tr>
      <td>
        <a href="https://sdk.vercel.ai/providers/ai-sdk-providers/google-generative-ai">
          <img src="https://img.shields.io/badge/Google_Provider-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="@ai-sdk/google">
        </a>
      </td>
      <td><code>v4.0.63</code></td>
      <td><i>(Library)</i> Official Google AI provider binding the Vercel AI SDK to Gemini foundation models.</td>
    </tr>
    <tr>
      <td>
        <a href="https://aistudio.google.com/">
          <img src="https://img.shields.io/badge/Google_Gemini-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white" alt="Google Gemini">
        </a>
      </td>
      <td><code>gemini-3.6-flash</code></td>
      <td>Multimodal vision model parsing receipt images, performing OCR, and extracting structured line items.</td>
    </tr>
    <!-- Styling & Component Architecture -->
    <tr>
      <td rowspan="5"><b>Styling &amp; Components</b></td>
      <td>
        <a href="https://tailwindcss.com/">
          <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
        </a>
      </td>
      <td><code>v4.3.3</code></td>
      <td>Utility-first CSS styling engine paired with <code>@tailwindcss/postcss</code> for optimized compilation.</td>
    </tr>
    <tr>
      <td>
        <a href="https://ui.shadcn.com/">
          <img src="https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white" alt="shadcn/ui">
        </a>
      </td>
      <td><code>v4.20.1</code></td>
      <td>Component architecture CLI generating unstyled, customizable design primitives.</td>
    </tr>
    <tr>
      <td>
        <a href="https://lucide.dev/">
          <img src="https://img.shields.io/badge/Lucide_React-F56565?style=for-the-badge&logo=lucide&logoColor=white" alt="Lucide React">
        </a>
      </td>
      <td><code>v1.40.0</code></td>
      <td><i>(Library)</i> Lightweight SVG icon pack providing crisp UI glyphs for actions and status cues.</td>
    </tr>
    <tr>
      <td>
        <a href="https://cva.style/docs">
          <img src="https://img.shields.io/badge/CVA-111827?style=for-the-badge&logo=styledcomponents&logoColor=white" alt="Class Variance Authority">
        </a>
      </td>
      <td><code>v0.7.1</code></td>
      <td><i>(Library)</i> Utility for composing type-safe, variant-driven UI component classes.</td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/dcastilho/tailwind-merge">
          <img src="https://img.shields.io/badge/tailwind--merge-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="tailwind-merge">
        </a>
      </td>
      <td><code>v3.6.0</code></td>
      <td><i>(Library)</i> Utility function for cleanly merging Tailwind classes without CSS specificity collisions (with <code>clsx v2.1.1</code>).</td>
    </tr>
    <!-- Visualization & Export -->
    <tr>
      <td rowspan="3"><b>Visualization &amp; Export</b></td>
      <td>
        <a href="https://recharts.org/">
          <img src="https://img.shields.io/badge/Recharts-22B5BF?style=for-the-badge&logo=chartdotjs&logoColor=white" alt="Recharts">
        </a>
      </td>
      <td><code>v3.10.1</code></td>
      <td><i>(Library)</i> Responsive charting library rendering category donut graphs and item cost bar charts.</td>
    </tr>
    <tr>
      <td>
        <a href="https://www.papaparse.com/">
          <img src="https://img.shields.io/badge/PapaParse-FF6B6B?style=for-the-badge&logo=javascript&logoColor=white" alt="PapaParse">
        </a>
      </td>
      <td><code>v5.7.0</code></td>
      <td><i>(Library)</i> Client-side CSV parser and serializer converting structured receipt data to downloadable spreadsheets.</td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/bubkoo/html-to-image">
          <img src="https://img.shields.io/badge/html--to--image-4B32C3?style=for-the-badge&logo=html5&logoColor=white" alt="html-to-image">
        </a>
      </td>
      <td><code>v1.11.13</code></td>
      <td><i>(Library)</i> Rasterization utility capturing Recharts DOM nodes directly into downloadable high-res PNG images.</td>
    </tr>
    <!-- Development, Linting & Version Control -->
    <tr>
      <td rowspan="3"><b>Tooling &amp; Environment</b></td>
      <td>
        <a href="https://www.cursor.com/">
          <img src="https://img.shields.io/badge/Cursor_IDE-000000?style=for-the-badge&logo=cursor&logoColor=white" alt="Cursor IDE">
        </a>
      </td>
      <td><code>v3.18.25</code></td>
      <td>AI-native IDE and code editor providing agentic workspace intelligence and refactoring.</td>
    </tr>
    <tr>
      <td>
        <a href="https://eslint.org/">
          <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint">
        </a>
      </td>
      <td><code>v9.39.5</code></td>
      <td>Pluggable JavaScript/TypeScript static code analysis engine using <code>eslint-config-next v16.3.4</code>.</td>
    </tr>
    <tr>
      <td>
        <a href="https://git-scm.com/">
          <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git">
        </a>
      </td>
      <td><code>v2.39.2</code></td>
      <td>Distributed version control system maintaining branch workflows, commits, and project history.</td>
    </tr>
  </tbody>
</table>


<br> 

## Key Features

* **Multimodal AI Receipt Parsing**
  * Automated OCR and document understanding powered by Google Gemini via Vercel AI SDK.
  * Extracts structured metadata including merchant name, transaction date, currency, line items, subtotal, tax, and total.

* **Intelligent Expense Auto-Categorization**
  * Classifies individual line items into standard budget categories (*Food & Dining, Groceries, Transportation, Office, Electronics, Utilities, Health, Other*).
  * Color-coded category badges for fast scanning.

* **Interactive & Editable Data Grid**
  * Live inline editing for item names, prices, and categories to correct misread lines or adjust numbers.
  * Dynamic row management to add missing items or remove unwanted charges.
  * Real-time calculation engine that updates subtotals and grand totals immediately upon edit.

* **Expense Analytics & Visualizations**
  * **Category Breakdown:** Donut chart illustrating relative spend distribution across categories.
  * **Itemized Cost Comparison:** Bar chart highlighting individual item price distribution.
  * Built using responsive, theme-aware Recharts components.

* **One-Click Export Capabilities**
  * **CSV Export:** Converts structured receipt records into standard CSV format via PapaParse for bookkeeping, expense reports, or Google Sheets/Excel.
  * **PNG Chart Capture:** High-resolution DOM-to-image export using `html-to-image` to save clean graphical snapshots of analytics.

* **Modular & Swappable Architecture**
  * Decoupled model switchboard (`src/lib/ai.ts`) allowing seamless migration to Azure OpenAI, Anthropic, or open-source vision models (e.g., Qwen-VL) without rewriting application logic.
  * Strictly typed validation layer using Zod schemas for deterministic JSON parsing.

## Tech Stack

* **Framework & Runtime:**
  * **[Next.js](https://nextjs.org/) (App Router):** Full-stack React framework managing client UI and serverless API endpoints.
  * **[Node.js](https://nodejs.org/):** Server runtime environment.

* **Language & Type Safety:**
  * **[TypeScript](https://www.typescriptlang.org/):** Strict compile-time typing for receipt models, API contracts, and component props.
  * **[Zod](https://zod.dev/):** Schema validation and runtime type inference for structured LLM outputs.

* **AI & Multimodal Vision:**
  * **[Vercel AI SDK](https://sdk.vercel.ai/docs):** Unified, provider-agnostic interface (`ai` and `@ai-sdk/google`) for handling structured model generation.
  * **[Google Gemini 3.6 Flash](https://aistudio.google.com/):** Multimodal LLM engine extracting OCR text and structured JSON data from receipt images.

* **Styling & UI Components:**
  * **[Tailwind CSS](https://tailwindcss.com/):** Utility-first styling framework.
  * **[shadcn/ui](https://ui.shadcn.com/):** Accessible, unstyled primitive component architecture (Card, Table, Badge, Button, Input).
  * **[Lucide React](https://lucide.dev/):** Clean, consistent iconography.

* **Data Visualization & Analytics:**
  * **[Recharts](https://recharts.org/):** Declarative charting library for responsive Category Donut and Item Cost Bar charts.

* **Export & Processing Utilities:**
  * **[PapaParse](https://www.papaparse.com/):** Client-side CSV serialization for structured expense downloads.
  * **[html-to-image](https://github.com/bubkoo/html-to-image):** Canvas-based DOM snapshotting for exporting high-resolution PNG chart assets.

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
