import { Component, OnInit, ViewChild } from '@angular/core';
import interviewJson from '../../../assets/interview.json';
import { Question } from './question.model';
import { MaterialModule } from '../../material/material.module';
import { InterviewService } from '../interview-service.service';
import { CommonModule } from '@angular/common';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { AnswersService } from './answers.service';


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
  timeoutId: any;

  currentQuestionText: string = '';

  constructor(private answersService: AnswersService, private interviewService: InterviewService) { }


  ngOnInit(): void {

    this.interviewService.selectedQuestion$.subscribe(questionNumber => {
      this.selectedQuestion = questionNumber;
      this.currentQuestionText = this.getQuestion(this.selectedQuestion).question;

      // Starten Sie hier die Typewriter-Animation
      this.typeWriter(this.currentQuestionText, 0);

      // dropdown
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
      // Zurücksetzen der Auswahl für Multiple-Choice-Fragen
      if (this.userSelection) {
        this.userSelection.value = this.answersService.getAnswers(this.selectedQuestion);
      }
    });
  }

  
  toggleAnswer(questionNumber: any, answer: any, isSelected: boolean) {
    if (isSelected) {
      this.answersService.saveAnswer(questionNumber, answer);
    } else {
      this.answersService.deleteAnswer(questionNumber, answer);
    }
  }
  
  toggleOnlyOneAnswer(questionNumber: any, answer: any, isSelected: boolean) {
    if (isSelected) {
      this.answersService.saveOnlyOneAnswer(questionNumber, answer);
    } else {
      this.answersService.deleteAnswer(questionNumber, answer);
    }
  }


  //Nur eine einzige Antwort soll gespeichert werden (single choice, Text, dropdown)
  saveAnswerText(arg0: any, arg1: any) {
    this.answersService.saveOnlyOneAnswer(arg0, arg1);
  }

  //Stream der Antworten
  typeWriter(text: string, i: number) {
    if (i < text.length) {
      this.currentQuestionText = text.substring(0, i + 1);
      this.timeoutId = setTimeout(() => this.typeWriter(text, i + 1), 100);
    }
  }

  selectQuestion(questionNumber: number) {
    this.interviewService.selectQuestion(questionNumber);
  }

  isQuestionSelected(questionNumber: number): boolean {
    return this.selectedQuestion === questionNumber;
  }

  //Gibt nur die erste Antwort zurück(Sinnvoll bei single choice, Text, dropdown)
  getSelectedAnswer(questionNumber: number): any {
    const answers = this.answersService.getAnswers(questionNumber);
    return answers.length > 0 ? answers[0] : null;
  }

  //guckt ob eine Antwort einer speziellen frage ausgewählt wurde
  isAnswerSelected(answer: any): boolean {
    const selectedAnswers = this.answersService.getAnswers(this.selectedQuestion);
    return selectedAnswers.includes(answer);
  }


  navigateToNextQuestion(userSelection: MatButtonToggleGroup | undefined) {
    if (this.selectedQuestion != this.totalQuestions - 1) {
      clearTimeout(this.timeoutId)
    }
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

    if (this.selectedQuestion < this.totalQuestions - 1) {
      this.selectQuestion(this.selectedQuestion + 1);
    }
    this.resetToggleButtons();

    this.selected = undefined;
    this.TextInput = '';
    // Setzen Sie die ausgewählte Antwort, wenn es sich um eine Dropdown-Frage handelt
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
    // Zurücksetzen der Auswahl für Multiple-Choice-Fragen
    if (this.userSelection) {
      this.userSelection.value = this.answersService.getAnswers(this.selectedQuestion);
    }

  }



  resetToggleButtons() {
    if (this.userSelection) {
      this.userSelection._buttonToggles.forEach((toggle: any) => toggle.checked = false);
    }
  }


  navigateToPreviousQuestion() {
    if (this.selectedQuestion != 0) {
      clearTimeout(this.timeoutId)
    }else{
      return;
    }
    if (this.selectedQuestion > 0) {
      this.selectQuestion(this.selectedQuestion - 1);
    }
    this.resetToggleButtons();
    // Setzen Sie die ausgewählte Antwort, wenn es sich um eine Dropdown-Frage handelt
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
    // Zurücksetzen der Auswahl für Multiple-Choice-Fragen
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


}