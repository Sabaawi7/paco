import { Component, OnInit } from '@angular/core';
import interviewJson from '../../../assets/interview.json';
import { Question } from './question.model';
import { MaterialModule } from '../../material/material.module';
import { InterviewService } from '../interview-service.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  imports: [MaterialModule, CommonModule],
  standalone: true,
  styleUrls: ['./interview.component.scss']
})
export class InterviewComponent implements OnInit {


  selectedQuestion: number = 1; // Assuming the default selected question is 1
  totalQuestions: number = 10; // Assuming there are 10 questions in total, adjust according to your requirement

  constructor(private interviewService: InterviewService) { }

  ngOnInit(): void {
    // Subscribe to selectedQuestion$ to get notified of changes
    this.interviewService.selectedQuestion$.subscribe(questionNumber => {
      this.selectedQuestion = questionNumber;
    });
  }

  selectQuestion(questionNumber: number) {
    this.interviewService.selectQuestion(questionNumber);
  }

  isQuestionSelected(questionNumber: number): boolean {
    return this.selectedQuestion === questionNumber;
  }

  navigateToNextQuestion() {
    if (this.selectedQuestion < this.totalQuestions) {
      this.selectQuestion(this.selectedQuestion + 1);
    }
  }

  navigateToPreviousQuestion() {
    if (this.selectedQuestion > 1) {
      this.selectQuestion(this.selectedQuestion - 1);
    }
  }

  getQuestion(questionNumber: number): Question {
    return this.interviewService.getQuestion(questionNumber);
  }

  getAnswersArray(answers: string[] | number[]): (string | number)[] {
    if (Array.isArray(answers)) {
      return answers;
    }
    return [];
  }
}