import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from './question.model';
import interviewJson from '../../assets/interview.json';

@Component({
  selector: 'app-progressbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progressbar.component.html',
  styleUrl: './progressbar.component.scss'
})
export class ProgressbarComponent {
  questions: Question[] = interviewJson; // Direkter Zugriff auf das interviewJson-Array
  currentQuestionIndex: number = 0;
  answeredQuestions: Set<number> = new Set<number>();
  currentQuestion: Question | null = null;

  constructor() {}

  navigateToQuestion(index: number) {
    this.currentQuestionIndex = index;
    this.currentQuestion = this.questions[index];
  }

  getAnswersArray(answers: string[] | number[]): (string | number)[] {
    if (Array.isArray(answers)) {
      return answers;
    }
    return [];
  }

  handleCheckboxChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    const checkedIndex = parseInt(checkbox.value, 10);
    // Hier kannst du die Logik hinzufügen, um die ausgewählte Antwort zu verarbeiten
  }
  

  isAnswered(index: number) {
    return this.answeredQuestions.has(index);
  }

  getBackgroundColor(index: number) {
    if (index === this.currentQuestionIndex) {
      return '#ffc107'; // Hintergrundfarbe für die aktuelle Frage
    } else if (this.isAnswered(index)) {
      return '#28a745'; // Hintergrundfarbe für beantwortete Fragen
    } else {
      return '#ccc'; // Standard-Hintergrundfarbe für unbeantwortete Fragen
    }
  }
}
