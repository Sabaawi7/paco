import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClient } from '@angular/common/http';
import { TokenSucheService } from './token-suche.service';
import { AnswersService } from '../../chatbot-page/interview/answers.service';
import { InterviewService } from '../../chatbot-page/interview-service.service';
import { Question } from '../../chatbot-page/interview/question.model';

@Component({
  selector: 'app-tokensuche-page',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule, FormsModule, MaterialModule, MatInputModule],
  templateUrl: './tokensuche-page.component.html',
  styleUrls: ['./tokensuche-page.component.scss']
})
export class TokensuchePageComponent implements OnInit {
  TextInput: string = '';
  CheckedToken: string = '';
  answers: any = {};

  constructor(
    private http: HttpClient,
    private tokenSuche: TokenSucheService,
    private answersService: AnswersService,
    private interviewService: InterviewService
  ) {}

  question: Question = { question: 'a', answers: [], answer_type: '', answer_label: '', selected_elements: [] || String };
  question_ids: number[] = [2, 3, 4, 5, 6, 7, 9, 10, 11];
  totalQuestions: number = this.interviewService.questions.length;
  questions: Question[] = [];
  selectedIndex = 0;
  currentQuestion: string = '';
  currentAnswerType: string = '';
  currentSelectedAnswer: any = this.answersService.getAnswers(this.selectedIndex);
  currentAnswer: any[] = [];

  async ngOnInit(): Promise<void> {
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

  saveAnswerText(personalizedQuestion: string, textInput: string) {
    // Your save logic here
    console.log('Personalized Question:', personalizedQuestion);
    console.log('Text Input:', textInput);
  }

  async searchToken() {
    if (!this.TextInput) {
      alert('Please enter a token');
      return;
    }

    try {
      this.answers = await this.tokenSuche.getAnswers(this.TextInput, 1).toPromise();
      console.log('Search successful', this.answers);

      this.questions = [];
      const promises = this.question_ids.map(async id => {
        const question = await this.tokenSuche.getApiAnswer(this.TextInput, id);
        this.questions.push(question);
      });

      await Promise.all(promises);

      if (this.questions.length > 0) {
        this.showDetails(this.selectedIndex);
      }
    } catch (error) {
      console.error('Search failed', error);
    }
  }


  showDetails(index: number): void {
    this.selectedIndex = index;
    this.currentQuestion = this.questions[this.selectedIndex].question;
    this.currentAnswerType = this.getQuestionTypeDisplay(this.questions[this.selectedIndex].answer_type);
    this.currentSelectedAnswer = this.addSpaceToArray(this.questions[this.selectedIndex].selected_elements);
    this.currentAnswer = this.addSpaceToArray(this.getAnswersArray(this.questions[this.selectedIndex].answers || []));
    this.currentAnswer = this.compareArrays(this.currentAnswer, this.currentSelectedAnswer);
  }

  selectButton(index: number): void {
    this.selectedIndex = index;
    this.showDetails(index);
  }

  addSpaceAfterComma(inputString: string): string {
    return inputString.replace(/,/g, ', ');
  }

  addSpaceToArray(inputArray: any): any {
    return inputArray.map((entry: string) => ' ' + entry);
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

  // To access all answers;
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