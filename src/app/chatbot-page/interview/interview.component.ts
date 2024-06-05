import { Component, OnInit, ViewChild } from '@angular/core';
import interviewJson from '../../../assets/interview.json';
import { Question } from './question.model';
import { MaterialModule } from '../../material/material.module';
import { InterviewService } from '../interview-service.service';
import { CommonModule } from '@angular/common';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  imports: [MaterialModule, CommonModule, FormsModule],
  standalone: true,
  styleUrls: ['./interview.component.scss']
})
export class InterviewComponent implements OnInit {

  @ViewChild('userSelection', { static: false }) userSelection: any;
  selectedQuestion: number = 1; // Assuming the default selected question is 1
  totalQuestions: number = this.interviewService.questions.length;
  selected: any;
  TextInput: String = '';
  isLoading: boolean = false;
  

  constructor(private interviewService: InterviewService, private router: Router) { }

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
    const currentValue = this.userSelection?.value;
    console.log(this.TextInput)
    if(this.userSelection !== undefined && this.userSelection.name.startsWith('mat-button-toggle-group') ){
      if (currentValue !== undefined && currentValue.length > 0) {
        this.interviewService.markQuestionAsAnswered(this.selectedQuestion);
      } 

    } else if (this.selected !== undefined){
      this.interviewService.markQuestionAsAnswered(this.selectedQuestion);
    } else if (this.TextInput !== '') {
      this.interviewService.markQuestionAsAnswered(this.selectedQuestion);
    } else {
      console.log(this.userSelection)
    }


    if (this.selectedQuestion < this.totalQuestions -1) {
      this.selectQuestion(this.selectedQuestion + 1);
    } else {
      this.router.navigate(['/loading']);
    }

    this.selected = undefined;
    this.TextInput = '';

    
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