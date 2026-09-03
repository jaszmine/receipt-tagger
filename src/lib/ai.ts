import { google } from '@ai-sdk/google';

/**
 * Model Provider Switchboard
 * To switch to OpenAI or Anthropic later:
 * 1. npm install @ai-sdk/openai or @ai-sdk/anthropic
 * 2. Add OPENAI_API_KEY to .env.local
 * 3. Uncomment the provider and swap the export
 */
// DEPRECATED: export const visionModel = google('gemini-2.5-flash');
export const visionModel = google('gemini-3.6-flash');
// export const visionModel = openai('gpt-4o-mini');
// export const visionModel = anthropic('claude-3-5-sonnet-latest');


// Option 2: Azure OpenAI
// Requires: npm install @ai-sdk/azure
// Env vars: AZURE_RESOURCE_NAME, AZURE_API_KEY (or Entra ID auth)
// import { azure } from '@ai-sdk/azure';
// export const visionModel = azure('your-gpt-4o-deployment-name');

// Option 3: Qwen Vision (via an OpenAI-compatible endpoint like OpenRouter, Together AI, or vLLM)
// Requires: npm install @ai-sdk/openai-compatible
// Env vars: OPENROUTER_API_KEY
// import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
// const openRouter = createOpenAICompatible({
//   name: 'openrouter',
//   baseURL: 'https://openrouter.ai/api/v1',
//   apiKey: process.env.OPENROUTER_API_KEY,
// });
// export const visionModel = openRouter.chatModel('qwen/qwen-2.5-vl-72b-instruct');
// or qwen3 (probs the 8B version)

// Option 4: PaddleOCR (Traditional OCR Engine)
// NOTE: PaddleOCR is a standalone Python/C++ OCR library (not an LLM), so it does not
// provide a Vercel AI SDK language model driver. To use PaddleOCR:
// 1. Host a lightweight FastAPI / Flask Python microservice running paddleocr.
// 2. Call the microservice endpoint via standard fetch() in the API route instead of generateObject.
// export const PADDLE_OCR_ENDPOINT = process.env.PADDLE_OCR_URL || 'http://localhost:8000/ocr';