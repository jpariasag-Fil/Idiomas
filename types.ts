export enum UnitLevel {
  A1 = 'A1',
  A2 = 'A2',
}

export interface VocabularyItem {
  french: string;
  english: string;
  pronunciation: string; // IPA or phonetic
  example: string;
}

export interface GrammarPoint {
  title: string;
  explanation: string;
  examples: Array<{ french: string; english: string }>;
}

export interface ExerciseQuestion {
  question: string;
  options?: string[];
  answer: string;
}

export interface Exercise {
  instruction: string;
  type: 'fill-in-blank' | 'multiple-choice' | 'translation';
  questions: ExerciseQuestion[];
}

export interface DialogueLine {
  speaker: string;
  text: string;
  translation: string;
}

export interface UnitContent {
  title: string;
  subtitle: string;
  level: UnitLevel;
  introduction: string;
  culturalNote: string;
  vocabulary: VocabularyItem[];
  grammar: GrammarPoint[];
  dialogue: DialogueLine[];
  exercises: Exercise[];
}

export interface UnitDefinition {
  id: number;
  title: string;
  level: UnitLevel;
  topics: string;
  content?: UnitContent; // Optional, populated after generation
  isGenerating?: boolean;
}