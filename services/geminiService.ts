
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

export const reviewCodeWithGemini = async (code: string, language: string): Promise<string> => {
  if (!API_KEY) {
    console.error("Gemini API Key not configured. Please set the API_KEY environment variable.");
    throw new Error("Gemini API Key not configured. Please set the API_KEY environment variable.");
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });

  const model = 'gemini-2.5-flash-preview-04-17';
  
  const languageOrDefault = language || 'plaintext';

  const prompt = `
You are an expert senior software engineer performing a detailed code review.
Please analyze the following ${languageOrDefault} code.
Provide feedback in Markdown format, covering these aspects:
1.  **Potential Bugs & Errors**: Identify any logical errors, off-by-one errors, null pointer issues, race conditions, etc.
2.  **Code Quality & Readability**: Suggest improvements for clarity, conciseness, naming conventions, comments, and overall structure.
3.  **Maintainability**: How easy is it to understand, modify, and extend this code? Offer suggestions.
4.  **Performance Optimizations**: Point out any performance bottlenecks and suggest ways to optimize.
5.  **Security Vulnerabilities**: Identify common security flaws (e.g., XSS, SQL injection, insecure handling of secrets, if applicable to the language/context).
6.  **Best Practices & Conventions**: Does the code adhere to idiomatic ${languageOrDefault} style and common design patterns?
7.  **Suggestions for Refactoring**: If applicable, suggest specific refactoring steps.

For each point, provide a clear explanation and, if possible, a corrected code snippet (use Markdown for code blocks).
If the code is excellent, acknowledge that as well.

Code to review:
\`\`\`${languageOrDefault}
${code}
\`\`\`
`;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      // No thinkingConfig specified, defaults to enabled for higher quality for this type of task.
    });
    
    // Access the text directly from the response object
    const feedbackText = response.text;
    if (typeof feedbackText !== 'string') {
        console.error("Unexpected response format from Gemini API:", response);
        throw new Error("Received an unexpected response format from the AI. The 'text' property was not a string.");
    }
    return feedbackText;

  } catch (error) {
    console.error('Error calling Gemini API:', error);
    if (error instanceof Error) {
      // Check for specific error messages if needed, e.g. API key issues
      if (error.message.includes('API key not valid')) {
        throw new Error('The configured Gemini API Key is invalid. Please check your API_KEY environment variable.');
      }
      throw new Error(`Failed to get review from AI: ${error.message}`);
    }
    throw new Error('An unknown error occurred while communicating with the AI.');
  }
};
