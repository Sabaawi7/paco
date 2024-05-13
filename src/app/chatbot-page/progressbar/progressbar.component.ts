import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { Question } from '../interview/question.model';
import interviewJson from '../../../assets/interview.json';
import { InterviewService } from '../interview-service.service';

@Component({
  selector: 'app-progressbar',
  standalone: true,
  imports: [CommonModule, MaterialModule, FormsModule],
  templateUrl: './progressbar.component.html',
  styleUrl: './progressbar.component.scss'
})
export class ProgressbarComponent implements OnInit{
  questions: Question[] = interviewJson; // Direkter Zugriff auf das interviewJson-Array
  currentQuestionIndex: number = 0;
  answeredQuestions: Set<number> = new Set<number>();

  currentQuestion: Question | null = null;

  constructor(private interviewService: InterviewService) {}

  ngOnInit(): void {
    // Subscribe to answeredQuestions$ to get notified of changes
    this.interviewService.answeredQuestions$.subscribe(questions => {
      this.answeredQuestions = new Set<number>(questions);
    });
  }

  navigateToQuestion(questionNumber: number) {
    this.currentQuestionIndex = questionNumber;
    this.currentQuestion = this.questions[questionNumber];
    this.interviewService.selectQuestion(questionNumber);
    this.getBackgroundColor(questionNumber);

  }

  isQuestionAnswered(questionNumber: number): boolean {
    return this.answeredQuestions.has(questionNumber);
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
    } else if (this.isQuestionAnswered(index)) {
      return 'var(--color-primary)'; // Hintergrundfarbe für beantwortete Fragen
    } else {
      return '#ccc'; // Standard-Hintergrundfarbe für unbeantwortete Fragen
    }
  }
}
