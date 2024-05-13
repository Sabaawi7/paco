// question.model.ts

export interface Question {
    question: string;
    answers: string[] | number[] | null; // Antwortmöglichkeiten
    answer_type: string; // Typ der Antwort
    subtext_info?: string | null; // Zusätzliche Information zur Frage
  }
  
