import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  totalQuestions: number = this.interviewService.questions.length;
  
 
  // Variables for selected answer and text input;
  question: Question = {question: 'h', answers: [], answer_type: '', subtext_info: ''};

  selected: any;
  TextInput: String = '';
  timeoutId: any;
  currentQuestionText: string = this.question.question;
  showButtons: boolean = false; // Flag to control button visibility

  constructor(private answersService: AnswersService, private interviewService: InterviewService, private router: Router) { }

  
  // Initialize component;
  async ngOnInit(): Promise<void> {
    (async () => { 
      try {
        console.log("ICH BIN IM NGONINIT");
        this.question = await this.interviewService.getApiAnswer(this.selectedQuestion);
        console.log("NGONINIT NACH API AUFRUF");
        console.log("question2", this.question);
        console.log("selectedQuestion NACH NGONINIT", this.selectedQuestion)
        this.changeAnswerText();
      } catch (error) {
        console.error("Fehler in ngOnInit:", error);
      }
    })();
  
    // Subscribe to selectedQuestion changes;
    this.interviewService.selectedQuestion$.subscribe(questionNumber => {
      // Update selectedQuestion and currentQuestionText;
      //this.selectedQuestion = questionNumber;
      //this.currentQuestionText = this.question.question;
      console.log("question3", this.question)


      // Start typeWriter animation;
      this.typeWriter(this.currentQuestionText, 0);

      // Set selected and TextInput based on question type;
      if (this.getQuestion(this.selectedQuestion).answer_type === 'dropdown') {
        this.selected = this.answersService.getAnswers(this.selectedQuestion)[0];
      } else {
        this.selected = undefined;
      }

      if (this.getQuestion(this.selectedQuestion).answer_type === 'writing') {
        this.TextInput = this.answersService.getAnswers(this.selectedQuestion)[0];
      } else {
        this.TextInput = '';
      }

      // Reset selection for multiple choice questions;
     /* if (this.userSelection) {
        this.userSelection.value = this.answersService.getAnswers(this.selectedQuestion);
      }
*/
      this.showButtons = false; // Hide buttons initially
    });
  }


  
  // Toggle multiple choice answer;
  toggleAnswer(questionNumber: any, answer: any, isSelected: boolean) {
    if (isSelected) {
      this.answersService.saveAnswer(questionNumber, answer);
    } else {
      this.answersService.deleteAnswer(questionNumber, answer);
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

  // Save single answer (single choice, text, dropdown);
  saveAnswerText(arg0: any, arg1: any) {
    this.answersService.saveOnlyOneAnswer(arg0, arg1);
  }

  // Typewriter animation for displaying question text;
  typeWriter(text: string, i: number) {
    if (i < text.length) {
      this.currentQuestionText = text.substring(0, i + 1);
      this.timeoutId = setTimeout(() => this.typeWriter(text, i + 1), 50);
    } else {
      this.showButtons = true; // Show buttons after text is fully rendered
    }
  }
/*
  // Select a specific question;
  selectQuestion(questionNumber: number) {
    this.interviewService.selectQuestion(questionNumber);
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

  // Check if an answer is selected for the current question;
  isAnswerSelected(answer: any): boolean {
    const selectedAnswers = this.answersService.getAnswers(this.selectedQuestion);
    return selectedAnswers.includes(answer);
  }

  // Navigate to the next question;
  async navigateToNextQuestion(userSelection: MatButtonToggleGroup | undefined) {
    this.selectedQuestion = this.selectedQuestion + 1;
    this.question= await this.interviewService.getApiAnswer(this.selectedQuestion);
    console.log("selectedQuestion NACH NEXT",this.selectedQuestion)
    this.changeAnswerText();
    console.log("SEE IO TYPE",this.question.answer_type)
    if(this.question.answer_label==='generated'){
      this.router.navigate(['/loading']);
      console.log("GENERATED AND ROUTER TO LOADING")
    }
    //this.updateToggleButtons();
    // Clear timeout if not the last question;
    //if (this.selectedQuestion != this.totalQuestions - 1) {
    //  clearTimeout(this.timeoutId)
    //}

    // Mark question as answered based on user selection;
    /*const currentValue = this.userSelection?.value;
    if (this.userSelection !== undefined && this.userSelection.name.startsWith('mat-button-toggle-group')) {
      if (currentValue !== undefined && currentValue.length > 0) {
        this.interviewService.markQuestionAsAnswered(this.selectedQuestion);
      }
    } else if (this.selected !== undefined) {
      this.interviewService.markQuestionAsAnswered(this.selectedQuestion);
    } else if (this.TextInput !== '') {
      this.interviewService.markQuestionAsAnswered(this.selectedQuestion);
    } else {
      console.log(this.userSelection)
    }
*/
/*
    if (this.selectedQuestion < this.totalQuestions -1) {
      this.selectQuestion(this.selectedQuestion + 1);
    } else {
      this.router.navigate(['/loading']);
    }
*/
    // Reset selections and prepare for the next question;
    //this.resetToggleButtons();

    //this.selected = undefined;
    //this.TextInput = '';
    // Set selected answer for dropdown and writing questions;
   /* if (this.getQuestion(this.selectedQuestion).answer_type === 'dropdown') {
      this.selected = this.answersService.getAnswers(this.selectedQuestion)[0];
    } else {
      this.selected = undefined;
    }
    //writing;
    if (this.getQuestion(this.selectedQuestion).answer_type === 'writing') {
      this.TextInput = this.answersService.getAnswers(this.selectedQuestion)[0];
    } else {
      this.TextInput = '';
    }
    // Reset selection for multiple choice questions;
    if (this.userSelection) {
      this.userSelection.value = this.answersService.getAnswers(this.selectedQuestion);
    }
      */
  }

  // Reset toggle buttons for multiple choice questions
  resetToggleButtons() {
    if (this.userSelection) {
      this.userSelection._buttonToggles.forEach((toggle: any) => toggle.checked = false);
    }
  }

  async navigateToPreviousQuestion() {
    this.selectedQuestion = this.selectedQuestion - 1;
    this.question= await this.interviewService.getApiAnswer(this.selectedQuestion);
    console.log("selectedQuestion NACH PREVIUOS",this.selectedQuestion)
    this.changeAnswerText();
    /*
    if (this.selectedQuestion != 0) {
      clearTimeout(this.timeoutId)
    } else {
      return;
    }
    /*
    if (this.selectedQuestion > 0) {
      this.selectQuestion(this.selectedQuestion - 1);
    }
      *
    this.resetToggleButtons();

    //Set the selected answer if it is a dropdown question;
    if (this.getQuestion(this.selectedQuestion).answer_type === 'dropdown') {
      this.selected = this.answersService.getAnswers(this.selectedQuestion)[0];
    } else {
      this.selected = undefined;
    }
    //writing
    if (this.getQuestion(this.selectedQuestion).answer_type === 'writing') {
      this.TextInput = this.answersService.getAnswers(this.selectedQuestion)[0];
    } else {
      this.TextInput = '';
    }

    // Reset the selection for multiple choice questions;
    if (this.userSelection) {
      this.userSelection.value = this.answersService.getAnswers(this.selectedQuestion);
    }
      */
  }

  getQuestion(questionNumber: number): Question {
    return this.interviewService.getQuestion(questionNumber);
    //return this.interviewService.getApiAnswer();
  }

  getAnswersArray(answers: string[] | number[]): (string | number)[] {
    if (Array.isArray(answers)) {
      return answers;
    }
    return [];
  }

  getAnswersArray2():(string | number)[] {
    console.log("question answers on GETANSWERSARRAY2",this.question.answers)
    if (Array.isArray(this.question.answers)) {
      return this.question.answers;
    }
    return [];
  }


  changeAnswerText(){
    const p = document.querySelector('h2');
    console.log("p", p)
    if (p) {
      p.textContent=this.question.question;
      console.log("ICH ÄNDERE P")
    }
  }

  updateToggleButtons(): void {
    console.log("updateToggleButtons", this.question.answers)
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
  
