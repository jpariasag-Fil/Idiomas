import { GoogleGenAI, Type } from "@google/genai";
import { UnitContent, UnitDefinition, UnitLevel } from "../types";

// Initialize Gemini Client
// IMPORTANT: Access API key via process.env.API_KEY as per instructions
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

const UNIT_SCHEMA = {
  type: Type.OBJECT,
  properties: {
    title: { type: Type.STRING, description: "The French title of the unit" },
    subtitle: { type: Type.STRING, description: "English subtitle explaining the focus" },
    level: { type: Type.STRING, enum: ["A1", "A2"] },
    introduction: { type: Type.STRING, description: "A welcoming introduction paragraph in English/French mix explaining what will be learned." },
    culturalNote: { type: Type.STRING, description: "A 'Le Saviez-vous?' style cultural fact related to the topic." },
    vocabulary: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          french: { type: Type.STRING },
          english: { type: Type.STRING },
          pronunciation: { type: Type.STRING, description: "IPA or simple phonetic guide" },
          example: { type: Type.STRING, description: "A short sentence using the word" }
        }
      }
    },
    grammar: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          explanation: { type: Type.STRING, description: "Clear explanation in English about the French grammar rule." },
          examples: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                french: { type: Type.STRING },
                english: { type: Type.STRING }
              }
            }
          }
        }
      }
    },
    dialogue: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          speaker: { type: Type.STRING },
          text: { type: Type.STRING, description: "French text" },
          translation: { type: Type.STRING, description: "English translation" }
        }
      }
    },
    exercises: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          instruction: { type: Type.STRING },
          type: { type: Type.STRING, enum: ["fill-in-blank", "multiple-choice", "translation"] },
          questions: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                question: { type: Type.STRING },
                options: { type: Type.ARRAY, items: { type: Type.STRING } },
                answer: { type: Type.STRING }
              }
            }
          }
        }
      }
    }
  },
  required: ["title", "vocabulary", "grammar", "dialogue", "exercises"]
};

export const generateUnitContent = async (unitDef: UnitDefinition): Promise<UnitContent> => {
  if (!apiKey) {
    throw new Error("API Key is missing. Please check your environment configuration.");
  }

  const modelId = "gemini-3-pro-preview"; 

  const prompt = `
    You are a professional author of French language learning textbooks (similar to MacMillan or National Geographic Learning).
    Create a complete textbook unit for Level ${unitDef.level}.
    
    Topic: ${unitDef.title}
    Focus Areas: ${unitDef.topics}
    
    Requirements:
    1. Pedagogical Approach: Start with vocabulary, move to grammar, then a dialogue, then exercises.
    2. Tone: Engaging, academic yet accessible.
    3. Content:
       - 8-12 Vocabulary items.
       - 1-2 Key Grammar points explained clearly with examples.
       - A realistic dialogue (6-10 lines) relevant to the topic.
       - 3 Distinct exercises (one fill-in-blank, one multiple choice, one translation).
       - A short cultural note about France or Francophone countries related to the topic.
  `;

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: UNIT_SCHEMA,
        thinkingConfig: { thinkingBudget: 4096 } // Use thinking for better pedagogical structuring
      }
    });

    const textResponse = response.text;
    if (!textResponse) {
      throw new Error("No content generated from Gemini.");
    }

    const data = JSON.parse(textResponse) as UnitContent;
    return data;

  } catch (error) {
    console.error("Error generating unit:", error);
    throw error;
  }
};