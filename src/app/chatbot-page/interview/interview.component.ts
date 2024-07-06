import { Component, OnInit, ViewChild, ElementRef , Output, EventEmitter } from '@angular/core';
import { Question } from './question.model';
import { MaterialModule } from '../../material/material.module';
import { InterviewService } from '../interview-service.service';
import { CommonModule } from '@angular/common';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { AnswersService } from './answers.service';
import { Router } from '@angular/router';
import { __importStar } from 'tslib';
import { ProgressbarComponent } from '../progressbar/progressbar.component';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  imports: [MaterialModule, CommonModule, FormsModule, ProgressbarComponent],
  standalone: true,
  styleUrls: ['./interview.component.scss']
})
export class InterviewComponent implements OnInit {

  // ViewChild to access MatButtonToggleGroup;
  @ViewChild('userSelection', { static: false }) userSelection: any;

  // Default selected question and total number of questions;
  selectedQuestion: number = 1; // Assuming the default selected question is 1;
 // totalQuestions: number = this.interviewService.questions.length;
  
 
  // Variables for selected answer and text input;
  question: Question = {question: 'h', answers: [], answer_type: '', subtext_info: ''};

  selected: any;
  TextInput: String = 'TEST TEST';
  timeoutId: any;
  currentQuestionText: string = this.question.question;
  showButtons: boolean = false; // Flag to control button visibility
  allSelectedAnswers: String[] = [];


  constructor(private answersService: AnswersService, private interviewService: InterviewService, private router: Router) { }

  
  // Initialize component;
  async ngOnInit(): Promise<void> {
    (async () => { 
      try {
        this.question = await this.interviewService.getApiAnswer(this.selectedQuestion);
        this.changeAnswerText();
      } catch (error) {
        console.error("Fehler in ngOnInit:", error);
      }
    })();
  
    this.interviewService.selectedQuestion$.subscribe(questionNumber => {

      // Start typeWriter animation;
      this.typeWriter(this.currentQuestionText, 0);
      this.showButtons = false; // Hide buttons initially
    });

   
  }





  
  

  toggleAnswer2(answer: any, isSelected: boolean) {
    if (isSelected) {
      this.saveAnswer2(this.selectedQuestion, answer);
    } else {
      this.deleteAnswer2(this.selectedQuestion, answer);
    }
  } 

  saveAnswer2(questionNumber: any, answer: any){
    this.allSelectedAnswers.push(answer);
  }
  
  deleteAnswer2(questionNumber: any, answer: any){
    const answerIndex = this.allSelectedAnswers.indexOf(answer);
    if (answerIndex >= 0) {
      this.allSelectedAnswers.splice(answerIndex, 1);
    }
  }


  // Toggle single choice answer;
  toggleOnlyOneAnswer(questionNumber: any, answer: any, isSelected: boolean) {
    if (isSelected) {
      this.answersService.saveOnlyOneAnswer(questionNumber, answer);
    } else {
      this.answersService.deleteAnswer(questionNumber, answer);
    }
  }



  saveAnswerText2(arg1: any) {
    if( this.question.selected_elements != undefined && this.question.selected_elements.length > 0 ){
    this.allSelectedAnswers[0] = arg1;
    }else{
    //this.allSelectedAnswers.push(arg1);
    this.allSelectedAnswers=[arg1];
    }
  }
/*
  // Typewriter animation for displaying question text;
  typeWriter(text: string, i: number) {
    if (i < text.length) {
      this.currentQuestionText = text.substring(0, i + 1);
      this.timeoutId = setTimeout(() => this.typeWriter(text, i + 1), 50);
    } else {
      this.showButtons = true; // Show buttons after text is fully rendered
    }
  }
*/
  // Check if a question is selected;
  isQuestionSelected(questionNumber: number): boolean {
    return this.selectedQuestion === questionNumber;
  }

  // Get selected answer for a question;
  getSelectedAnswer(questionNumber: number): any {
    const answers = this.answersService.getAnswers(questionNumber);
    return answers.length > 0 ? answers[0] : null;
  }

 
  
  isAnswerSelected2(answer: any): boolean {
    if(this.question.selected_elements!=undefined){
    const selectedAnswers = this.question.selected_elements;
    return selectedAnswers.includes(answer);
    }
    return false;
  }


  // Navigate to the next question;
  async navigateToNextQuestion(userSelection: MatButtonToggleGroup | undefined) {
    this.showButtons = false;
   //dropdown;
   if (this.question.answer_type === 'numerical' && this.allSelectedAnswers != null) {
    this.interviewService.postApiAnswer(this.selectedQuestion, this.allSelectedAnswers);
  } //writing; 
    else if (this.question.answer_type === 'editable' && this.allSelectedAnswers != null) {
    this.interviewService.postApiAnswer(this.selectedQuestion, this.allSelectedAnswers);
    } else{
    this.interviewService.postApiAnswer(this.selectedQuestion, this.allSelectedAnswers);
    }

    this.allSelectedAnswers = [];

    this.selectedQuestion = this.selectedQuestion + 1;
    this.question= await this.interviewService.getApiAnswer(this.selectedQuestion);
    this.changeAnswerText();
   
    if(this.question.answer_type==='generated'){
      this.router.navigate(['/loading']);
    }
    if(this.question.selected_elements != undefined){
    this.allSelectedAnswers = this.question.selected_elements;
    }
        
   //dropdown;
   if (this.question.answer_type === 'numerical' && this.question.selected_elements != undefined && this.question.selected_elements.length > 0) {
    this.selected = this.question.selected_elements[0];
  } else {
    this.selected = undefined;
  }
      
    //writing;
    if (this.question.answer_type === 'editable' && this.question.selected_elements != undefined && this.question.selected_elements.length > 0) {
      this.TextInput = this.question.selected_elements[0];
    } else {
      this.TextInput = '';
    }
  }



  async navigateToPreviousQuestion() {
    this.showButtons = false;
       //dropdown;
   if (this.question.answer_type === 'numerical' && this.allSelectedAnswers != null) {
    await this.interviewService.postApiAnswer(this.selectedQuestion, this.allSelectedAnswers);
  } //writing;
    else if (this.question.answer_type === 'editable' && this.allSelectedAnswers != null) {
    await this.interviewService.postApiAnswer(this.selectedQuestion, this.allSelectedAnswers);
    } else{
    await this.interviewService.postApiAnswer(this.selectedQuestion, this.allSelectedAnswers);
    }
    this.allSelectedAnswers = [];

    this.selectedQuestion = this.selectedQuestion - 1;
    this.question= await this.interviewService.getApiAnswer(this.selectedQuestion);
    this.changeAnswerText();
    if(this.question.selected_elements != undefined){
      this.allSelectedAnswers = this.question.selected_elements;
      }
    
  //dropdown;
   if (this.question.answer_type === 'numerical' && this.question.selected_elements != undefined && this.question.selected_elements.length > 0) {
    this.selected = this.question.selected_elements[0];
  } else {
    this.selected = undefined;
  }
    
   //writing;
    if (this.question.answer_type === 'editable' && this.question.selected_elements != undefined && this.question.selected_elements.length > 0  ) {
      this.TextInput = this.question.selected_elements[0];
    } else {
      this.TextInput = '';
    }

  }

  getQuestion(questionNumber: number): Question {
    return this.interviewService.getQuestion(questionNumber);
  }

  

  getAnswersArray2():(string | number)[] {
    if (Array.isArray(this.question.answers)) {
      return this.question.answers;
    }
    return [];
  }


  changeAnswerText(){
    if(this.question.answer_type === 'generated'){
      return;
    }
    this.showButtons = false;
    if (this.question && this.question.question) {
      // Initial delay before starting the typewriter effect
      setTimeout(() => {
        this.typeWriter(this.question.question, 0);
      }, );
    }
    //this.showButtons = true;
  }

  typeWriter(text: string, i: number) {
    const p = document.querySelector('h2');
    if (p && i < text.length) {
      p.textContent = text.substring(0, i + 1);
      this.timeoutId = setTimeout(() => this.typeWriter(text, i + 1), 50);
    } else if (p) {
      this.showButtons = true; // Show buttons after text is fully rendered
    }
  }
  updateToggleButtons(): void {
    if (this.userSelection) {
      const toggleGroup = this.userSelection.nativeElement;
      const buttons = toggleGroup.querySelectorAll('mat-button-toggle');

      buttons.forEach((button: HTMLElement, index: number) => {
        if (this.question.answers != null) {
        button.textContent = String(this.question.answers[index] || '');
        }
      });
    
  }
  }



  canIShowButtons(): String {
  return this.question.answer_type;
  }

  
}
  
