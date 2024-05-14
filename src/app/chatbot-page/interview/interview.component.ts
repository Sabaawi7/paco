import { Component, OnInit, ViewChild } from '@angular/core';
import interviewJson from '../../../assets/interview.json';
import { Question } from './question.model';
import { MaterialModule } from '../../material/material.module';
import { InterviewService } from '../interview-service.service';
import { CommonModule } from '@angular/common';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';


@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  imports: [MaterialModule, CommonModule],
  standalone: true,
  styleUrls: ['./interview.component.scss']
})
export class InterviewComponent implements OnInit {

  @ViewChild('userSelection', { static: false }) userSelection: MatButtonToggleGroup | undefined;
  selectedQuestion: number = 1; // Assuming the default selected question is 1
  totalQuestions: number = this.interviewService.questions.length;
  
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

  navigateToNextQuestion(userSelection: MatButtonToggleGroup | undefined) {
    if (this.userSelection !== undefined ) {
      if(this.userSelection.value !== null) {
        this.interviewService.markQuestionAsAnswered(this.selectedQuestion);
      }
    }

    if (this.selectedQuestion < this.totalQuestions -1) {
      this.selectQuestion(this.selectedQuestion + 1);
    }

    
    
  }

  navigateToPreviousQuestion() {
    if (this.selectedQuestion > 0) {
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