import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION_BOOK } from "../constants";

// Ensure API key is present
const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export const generateBookResponse = async (
  userMessage: string,
  history: { role: 'user' | 'model'; parts: { text: string }[] }[]
) => {
  if (!apiKey) {
    throw new Error("API Key is missing. Please configure process.env.API_KEY.");
  }

  try {
    const model = 'gemini-2.5-flash';
    
    // We construct the chat with the system instruction containing the book context (RAG-lite)
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION_BOOK,
        temperature: 0.7,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message: userMessage });
    return result.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw error;
  }
};

export const askChapter = async (chapterContent: string, question: string): Promise<string> => {
   if (!apiKey) {
    return "Erro: Chave de API não configurada.";
  }

  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      Você é um assistente especializado que responde perguntas APENAS com base no trecho do livro fornecido abaixo.
      Não use conhecimento externo. Se a resposta não estiver no texto, diga "O texto não aborda essa informação".
      Seja conciso e didático.

      TRECHO DO CAPÍTULO:
      "${chapterContent}"

      PERGUNTA DO USUÁRIO:
      "${question}"
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "Não foi possível gerar a resposta.";
  } catch (error) {
    console.error("Error generating chapter answer:", error);
    return "Erro ao consultar a IA. Tente novamente.";
  }
};

export const summarizeContent = async (content: string): Promise<string> => {
  if (!apiKey) {
    return "Erro: Chave de API não configurada.";
  }

  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      Resuma o seguinte conteúdo de forma concisa e executiva, destacando os pontos principais.
      Use formatação HTML simples (como <b> para negrito) se necessário para melhor leitura.

      CONTEÚDO:
      "${content}"
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "Não foi possível gerar o resumo.";
  } catch (error) {
    console.error("Error generating summary:", error);
    return "Erro ao gerar resumo. Tente novamente.";
  }
};