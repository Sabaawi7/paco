import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Question } from './interview/question.model';
import interviewJson from '../../assets/interview.json';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {
  
  questions: Question[] = interviewJson;
  private answeredQuestionsSubject = new BehaviorSubject<number[]>([]);
  answeredQuestions$ = this.answeredQuestionsSubject.asObservable();
  private selectedQuestionSubject = new BehaviorSubject<number>(0);
  selectedQuestion$ = this.selectedQuestionSubject.asObservable();

  constructor() {}



  markQuestionAsAnswered(questionNumber: number) {
    const answeredQuestions = this.answeredQuestionsSubject.value;
    if (!answeredQuestions.includes(questionNumber)) {
      answeredQuestions.push(questionNumber);
      this.answeredQuestionsSubject.next(answeredQuestions);
    }
  }

  selectQuestion(questionNumber: number) {
    this.selectedQuestionSubject.next(questionNumber);
  }

  getQuestion(questionNumber: number): Question {
    return this.questions[questionNumber];
  }
}