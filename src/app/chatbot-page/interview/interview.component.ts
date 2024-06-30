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
import { TokenService } from '../token.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
  selected: any;
  TextInput: String = '';
  timeoutId: any;
  currentQuestionText: string = '';
  showButtons: boolean = false; // Flag to control button visibility
  userid: string = ''; // Benutzer-ID hier speichern

  private apiUrl = 'http://localhost:8000/api/answers'; // Hier die URL Ihrer Backend-API einfügen

  constructor(private answersService: AnswersService, private interviewService: InterviewService, 
    private tokenService: TokenService, private router: Router,
    private http: HttpClient) { }

  
  // Initialize component;
  ngOnInit(): void {
    this.loadInitialAnswers(); // Lade die Antworten beim Initialisieren
    // Subscribe to selectedQuestion changes;
    this.interviewService.selectedQuestion$.subscribe(questionNumber => {
      // Update selectedQuestion and currentQuestionText;
      this.selectedQuestion = questionNumber;
      this.currentQuestionText = this.getQuestion(this.selectedQuestion).question;

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
      if (this.userSelection) {
        this.userSelection.value = this.answersService.getAnswers(this.selectedQuestion);
      }

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

  // Select a specific question;
  selectQuestion(questionNumber: number) {
    this.interviewService.selectQuestion(questionNumber);
  }

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
  navigateToNextQuestion(userSelection: MatButtonToggleGroup | undefined) {
    // Clear timeout if not the last question;
    if (this.selectedQuestion != this.totalQuestions - 1) {
      clearTimeout(this.timeoutId)
    }

    // Mark question as answered based on user selection;
    const currentValue = this.userSelection?.value;
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

    this.saveAnswerToBackend();





    if (this.selectedQuestion < this.totalQuestions -1) {
      this.selectQuestion(this.selectedQuestion + 1);
    } else {
   
      this.router.navigate(['/loading']);
    }

    // Reset selections and prepare for the next question;
    this.resetToggleButtons();

    this.selected = undefined;
    this.TextInput = '';
    // Set selected answer for dropdown and writing questions;
    if (this.getQuestion(this.selectedQuestion).answer_type === 'dropdown') {
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
  }

  // Reset toggle buttons for multiple choice questions
  resetToggleButtons() {
    if (this.userSelection) {
      this.userSelection._buttonToggles.forEach((toggle: any) => toggle.checked = false);
    }
  }

  navigateToPreviousQuestion() {
    if (this.selectedQuestion != 0) {
      clearTimeout(this.timeoutId)
    } else {
      return;
    }
    if (this.selectedQuestion > 0) {
      this.selectQuestion(this.selectedQuestion - 1);
    }
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

  saveAnswerToBackend() {
    const questionType = 1; // Set the appropriate question type
    const answers = this.answersService.getAnswers(this.selectedQuestion);
    this.answersService.saveAnswersToBackend(questionType, this.selectedQuestion, answers).subscribe({
      next: (response) => {
        console.log('Antworten erfolgreich gespeichert:', response);
      },
      error: (error) => {
        console.error('Fehler beim Speichern der Antworten:', error);
      }
    });
  }

  loadInitialAnswers() {
    const userid = this.tokenService.getToken();
    this.http.post<any>(`${this.apiUrl}`, {
      userid: userid,
      question_type_id: 1, // Passen Sie dies an Ihre Bedürfnisse an
      question_id: 1, // Passen Sie dies an Ihre Bedürfnisse an
      request_type: 'get'
    }).subscribe({
      next: (response) => {
        console.log('Antworten erfolgreich abgerufen:', response);
        // Antworten im answersService speichern
        response.data.forEach((answer: any) => {
          this.answersService.saveAnswer(answer.question_id, answer.answer);
        });
      },
      error: (error) => {
        console.error('Fehler beim Abrufen der Antworten:', error);
      }
    });
  }



}
