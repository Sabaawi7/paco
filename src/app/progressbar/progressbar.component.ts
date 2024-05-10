import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from './question.model';
import { QuestionService } from './question.service';



@Component({
  selector: 'app-progressbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progressbar.component.html',
  styleUrl: './progressbar.component.scss'
})
export class ProgressbarComponent {
  questions: Question[] = [];
  currentQuestionIndex: number = 0;
  answeredQuestions: Set<number> = new Set<number>();

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.questions = this.questionService.getQuestions();
  }

  navigateToQuestion(index: number) {
    this.currentQuestionIndex = index;
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
