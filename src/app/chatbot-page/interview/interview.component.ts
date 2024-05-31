import { Component, OnInit, ViewChild, Input } from '@angular/core';
import interviewJson from '../../../assets/interview.json';
import { Question } from './question.model';
import { MaterialModule } from '../../material/material.module';
import { InterviewService } from '../interview-service.service';
import { CommonModule } from '@angular/common';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  imports: [MaterialModule, CommonModule, FormsModule],
  standalone: true,
  styleUrls: ['./interview.component.scss']
})
export class InterviewComponent implements OnInit {

  @Input() questions: Question[] = [];
  @Input() selectedQuestionIndex: number = 0;
  currentQuestion: Question | null = null;
  TextInput: string = '';
  selected: string | number | null = null;
  constructor(private interviewService: InterviewService) { }

  ngOnInit(): void {
    this.questions = interviewJson;
    this.currentQuestion = this.getQuestion(this.selectedQuestionIndex);
  }

  getQuestion(index: number): Question | null {
    return this.questions[index] || null;
  }

  navigateToQuestion(index: number): void {
    this.selectedQuestionIndex = index;
    this.currentQuestion = this.getQuestion(index);
  }

  navigateToPreviousQuestion(): void {
    if (this.selectedQuestionIndex > 0) {
      this.navigateToQuestion(this.selectedQuestionIndex - 1);
    }
  }

  navigateToNextQuestion(): void {
    if (this.selectedQuestionIndex < this.questions.length - 1) {
      this.navigateToQuestion(this.selectedQuestionIndex + 1);
    }
  }
}
