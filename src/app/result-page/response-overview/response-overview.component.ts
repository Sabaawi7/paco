import { Component, OnInit } from '@angular/core';
import { NgFor,NgIf } from '@angular/common';
import { AnswersService } from '../../chatbot-page/interview/answers.service';
import { InterviewService } from '../../chatbot-page/interview-service.service';
import { CommonModule } from '@angular/common';
import { Question } from '../../chatbot-page/interview/question.model';

@Component({
  selector: 'app-response-overview',
  standalone: true,
  imports: [NgFor,NgIf,CommonModule],
  templateUrl: './response-overview.component.html',
  styleUrl: './response-overview.component.scss'
})
export class ResponseOverviewComponent implements OnInit{


  constructor(private answersService: AnswersService, private interviewService: InterviewService) { }

  totalQuestions: number = this.interviewService.questions.length;
  questions: string[] = [];
  selectedIndex = 0; 
  currentQuestion: string = this.questions[this.selectedIndex]; 
  currentAnswerType: string= this.getQuestionTypeDisplay(this.interviewService.getQuestion(this.selectedIndex).answer_type);
  currentSelectedAnswer: any = this.answersService.getAnswers(this.selectedIndex);
  currentAnswer: any[] = [];
  
  
ngOnInit(): void {
  for(let i=0; i < this.totalQuestions; i++){
    this.questions.push(this.interviewService.getQuestion(i).question);
  }
  this.currentQuestion= this.questions[this.selectedIndex];
  this.currentAnswerType= this.getQuestionTypeDisplay(this.interviewService.getQuestion(this.selectedIndex).answer_type);
  this.currentSelectedAnswer= this.answersService.getAnswers(this.selectedIndex); 
  this.currentAnswer = this.addSpaceToArray(this.getAnswersArray(this.getQuestion(this.selectedIndex).answers || []));
}

showDetails(question: number): void {
  this.currentQuestion= this.questions[this.selectedIndex];
  this.currentAnswerType= this.getQuestionTypeDisplay(this.interviewService.getQuestion(this.selectedIndex).answer_type);
  this.currentSelectedAnswer= this.answersService.getAnswers(this.selectedIndex); 
  this.currentAnswer = this.addSpaceToArray(this.getAnswersArray(this.getQuestion(question).answers || []));
}

selectButton(index: number): void {
  this.selectedIndex = index;
}

addSpaceAfterComma(inputString: string): string {
  return inputString.replace(/,/g, ', ');
}

addSpaceToArray(inputArray: any): any {
  console.log(inputArray)
  return inputArray.map((entry: string) => ' '+entry );
}

getQuestionTypeDisplay(questionType: string): string {
  switch (questionType) {
      case 'single_choice':
          return 'Single-Choice Frage';
      case 'multiple_choice':
          return 'Multiple-Choice Frage';
      case 'dropdown':
          return 'Dropdown auswahl';
      case 'writing':
          return 'Schreibfrage';
      default:
          return questionType;
  }
}




//Für den Zugriff auf alle Antworten
getAnswersArray(answers: string[] | number[]): (string | number)[] {
  if (Array.isArray(answers)) {
    return answers;
  }
  return [];
}
getQuestion(questionNumber: number): Question {
  return this.interviewService.getQuestion(questionNumber);
}
}