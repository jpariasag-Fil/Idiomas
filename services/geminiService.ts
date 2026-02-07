import { GoogleGenAI, SchemaType } from "@google/generative-ai";
import { UnitContent, UnitDefinition } from "../types";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenAI(apiKey);

const UNIT_SCHEMA = {
  type: SchemaType.OBJECT,
  properties: {
    title: { type: SchemaType.STRING },
    subtitle: { type: SchemaType.STRING },
    level: { type: SchemaType.STRING },
    introduction: { type: SchemaType.STRING },
    culturalNote: { type: SchemaType.STRING },
    vocabulary: {
      type: SchemaType.ARRAY,
      items: {
        type: SchemaType.OBJECT,
        properties: {
          french: { type: SchemaType.STRING },
          english: { type: SchemaType.STRING },
          pronunciation: { type: SchemaType.STRING },
          example: { type: SchemaType.STRING }
        }
      }
    },
    grammar: {
      type: SchemaType.ARRAY,
      items: {
        type: SchemaType.OBJECT,
        properties: {
          title: { type: SchemaType.STRING },
          explanation: { type: SchemaType.STRING },
          examples: {
            type: SchemaType.ARRAY,
            items: {
              type: SchemaType.OBJECT,
              properties: {
                french: { type: SchemaType.STRING },
                english: { type: SchemaType.STRING }
              }
            }
          }
        }
      }
    },
    dialogue: {
      type: SchemaType.ARRAY,
      items: {
        type: SchemaType.OBJECT,
        properties: {
          speaker: { type: SchemaType.STRING },
          text: { type: SchemaType.STRING },
          translation: { type: SchemaType.STRING }
        }
      }
    },
    exercises: {
      type: SchemaType.ARRAY,
      items: {
        type: SchemaType.OBJECT,
        properties: {
          instruction: { type: SchemaType.STRING },
          type: { type: SchemaType.STRING },
          questions: {
            type: SchemaType.ARRAY,
            items: {
              type: SchemaType.OBJECT,
              properties: {
                question: { type: SchemaType.STRING },
                options: { type: SchemaType.ARRAY, items: { type: SchemaType.STRING } },
                answer: { type: SchemaType.STRING }
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

  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: UNIT_SCHEMA,
    },
  });

  const prompt = `Create a French unit for level ${unitDef.level}. Topic: ${unitDef.title}. Topics to cover: ${unitDef.topics}`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return JSON.parse(text) as UnitContent;
  } catch (error) {
    console.error("Error generating unit:", error);
    throw error;
  }
};