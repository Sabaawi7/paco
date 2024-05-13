import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { Question } from './question.model';
import interviewJson from '../../../assets/interview.json';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-progressbar',
  standalone: true,
  imports: [CommonModule, MaterialModule, FormsModule],
  templateUrl: './progressbar.component.html',
  styleUrl: './progressbar.component.scss'
})
export class ProgressbarComponent {
  questions: Question[] = interviewJson; // Direkter Zugriff auf das interviewJson-Array
  currentQuestionIndex: number = 0;
  answeredQuestions: Set<number> = new Set<number>();
  currentQuestion: Question | null = null;
  customAnswer: string = ''; // Variable für das Textfeld hinzugefügt

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

  handleCheckboxChange(index: number) {
    if (this.answeredQuestions.has(index)) {
      this.answeredQuestions.delete(index);
    } else {
      this.answeredQuestions.add(index);
    }
    // Farbe der Fortschrittsleiste aktualisieren, wenn eine Frage ausgewählt wird
    this.getBackgroundColor(index);
  }
  

  isAnswered(index: number) {
    return this.currentQuestionIndex === index && this.answeredQuestions.has(index);
  }

  submitAnswer() {
    this.answeredQuestions.add(this.currentQuestionIndex);
    // Hintergrund der aktuellen Frage aktualisieren, um sie als beantwortet anzuzeigen
    this.getBackgroundColor(this.currentQuestionIndex);
  }

  isChecked(index: number) {
    return this.answeredQuestions.has(index) && this.currentQuestionIndex === index;
  }

  getBackgroundColor(index: number) {
    if (index === this.currentQuestionIndex) {
      return 'var(--color-accent)'; // Hintergrundfarbe für die aktuelle Frage
    } else if (this.isAnswered(index)) {
      return 'var(--color-primary)'; // Hintergrundfarbe für beantwortete Fragen
    } else {
      return '#ccc'; // Standard-Hintergrundfarbe für unbeantwortete Fragen
    }
  }
}
