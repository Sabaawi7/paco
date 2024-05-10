// question.service.ts
import { Injectable } from '@angular/core';
import { Question } from './question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private questions: Question[] = [
    { id: 1, text: 'Frage 1' },
    { id: 2, text: 'Frage 2' },
    { id: 3, text: 'Frage 3' },
    { id: 4, text: 'Frage 4' },
    { id: 5, text: 'Frage 4' },
    { id: 6, text: 'Frage 4' },
    { id: 7, text: 'Frage 4' },
    { id: 8, text: 'Frage 4' },
    { id: 9, text: 'Frage 4' },
    // Weitere Fragen hinzufügen
  ];

  getQuestions(): Question[] {
    return this.questions;
  }
}
