import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

// Initialize Gemini Client
// Assumption: process.env.API_KEY is available in the environment.
const apiKey = process.env.API_KEY;

// Using a factory function to ensure we get a fresh instance if needed, 
// though for this app a singleton pattern via module scope is fine.
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const sendMessageToGemini = async (message: string, history: {role: 'user' | 'model', text: string}[]) => {
  if (!ai) {
    throw new Error("API Key não configurada.");
  }

  try {
    const model = 'gemini-3-flash-preview'; 
    
    // Construct the prompt with context
    // Ideally we would use the 'chat' API, but for a simple stateless component or simple integration
    // we can format the contents manually or use chat.
    // Let's use the Chat API for better context handling.
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({
        message: message
    });

    return result.text;

  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    throw error;
  }
};