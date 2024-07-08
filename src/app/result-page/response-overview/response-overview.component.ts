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

  question: Question = {question: 'a', answers: [], answer_type: '', answer_label: '', selected_elements: [] || String};
  question_ids: number[] = [2,3,4,5,6,7,9,10,11];
  totalQuestions: number = this.interviewService.questions.length;
  questions: Question[] = [];
  selectedIndex = 0; 
  currentQuestion: string = ""; 
  currentAnswerType: string= "";
  currentSelectedAnswer: any = this.answersService.getAnswers(this.selectedIndex);
  currentAnswer: any[] = [];  
  
  async ngOnInit(): Promise<void> {
    const promises = this.question_ids.map(async id => {
      const question = await this.interviewService.getApiAnswer(id);
      this.questions.push(question);
    });
  
    await Promise.all(promises);
  
    // Ensure selectedIndex is within bounds
    if (this.selectedIndex < this.questions.length) {
      this.currentQuestion = this.questions[this.selectedIndex].question;
      this.currentAnswerType = this.getQuestionTypeDisplay(this.questions[this.selectedIndex].answer_type);
      this.currentSelectedAnswer = this.addSpaceToArray(this.questions[this.selectedIndex].selected_elements); 
      this.currentAnswer = this.addSpaceToArray(this.getAnswersArray(this.questions[this.selectedIndex].answers || []));
      this.currentAnswer = this.compareArrays(this.currentAnswer, this.currentSelectedAnswer);
    } else {
      console.error('Selected index is out of bounds.');
    }
  }
  

showDetails(question: number): void {
  this.currentQuestion= this.questions[this.selectedIndex].question;
  this.currentAnswerType= this.getQuestionTypeDisplay(this.questions[this.selectedIndex].answer_type);
  this.currentSelectedAnswer= this.addSpaceToArray(this.questions[this.selectedIndex].selected_elements); 
  console.log(this.currentSelectedAnswer)
  this.currentAnswer = this.addSpaceToArray(this.getAnswersArray(this.questions[this.selectedIndex].answers || []));
  this.currentAnswer = this.compareArrays(this.currentAnswer, this.currentSelectedAnswer);
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

compareArrays(allArray: any[], selectedArray: any[]): any[] {
  return allArray.filter(item => !selectedArray.includes(item));
}




//To access all answers;
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