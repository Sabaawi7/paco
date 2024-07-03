import {  Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { Question } from './interview/question.model';
import interviewJson from '../../assets/interview.json';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { filter, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterviewService implements OnInit{

  constructor(private httpClient: HttpClient, private tokenService: TokenService, ) {
     // Initiale Token-Abfrage und Speicherung
     this.tokenService.currentToken.pipe(
      filter(token => !!token), // Nur fortfahren, wenn ein gültiger Token vorhanden ist
      first() // Beendet die Subscription nach dem ersten gültigen Token
    ).subscribe(
      token => {
        this.token = token;
        console.log("Token abgerufen:", this.token);
      },
      error => {
        console.error('Fehler beim Abrufen des Tokens:', error);
      }
    );
  }
  
  questions: Question[] = interviewJson;
  private answeredQuestionsSubject = new BehaviorSubject<number[]>([]);
  answeredQuestions$ = this.answeredQuestionsSubject.asObservable();
  private selectedQuestionSubject = new BehaviorSubject<number>(0);
  selectedQuestion$ = this.selectedQuestionSubject.asObservable();
  questionIndex = 1;
  token='';

  ngOnInit() {
    this.tokenService.currentToken.subscribe(token => {
    this.token = token;
    });
  }
/*
  nextQuestion() : void {
    this.questionIndex += 1;
    //this.getApiAnswer();
  }

  prevQuestion() : void {
    this.questionIndex -= 1;
  }
*/
  getQuestionIndex() : number {
    return this.questionIndex; 
  }
/*
  markQuestionAsAnswered(questionNumber: number) {
    const answeredQuestions = this.answeredQuestionsSubject.value;
    if (!answeredQuestions.includes(questionNumber)) {
      answeredQuestions.push(questionNumber);
      this.answeredQuestionsSubject.next(answeredQuestions);
    }
  }
*/
  selectQuestion(questionNumber: number) {
    this.selectedQuestionSubject.next(questionNumber);
    this.questionIndex = questionNumber + 1;
  }

  getQuestion(questionNumber: number): Question {
    //console.log(this.questions[questionNumber])
    //console.log(this.questions)

    //return this.getApiAnswer();
    return this.questions[questionNumber];
    
  }


  question = '';
  answers = '';
  questionType = '';

  private ensureToken(): Promise<void> {
    if (this.token) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      this.tokenService.currentToken.pipe(
        filter(token => !!token),
        first()
      ).subscribe(
        token => {
          this.token = token;
          resolve();
        },
        error => {
          reject(new Error('Fehler beim Abrufen des Tokens'));
        }
      );
    });
  }


  getApiAnswer(number: number): Promise<Question> {
    console.log("ICH BIN IN DER API");
    return this.ensureToken().then(() => {
      return new Promise<Question>((resolve, reject) => {
        const payload = {
          "userid": this.token,
          "question_type_id": 1,
          "question_id": number,
          "request_type": 'get'
        };

        console.log(payload);

        this.httpClient.post<any>("http://localhost:8000/api/answers", payload).subscribe({
          next: (response: { question_title: any; all_elements: any;io_type: any; answer_label:any }) => {
            console.log("response", response);
            console.log("questionTitle", response.question_title);

            const question: Question = {
              question: String(response.question_title),
              answers: response.all_elements,
              answer_type: response.io_type,
              answer_label: response.answer_label
            };

            console.log('Type of question:', typeof question.question);
            console.log('Type of answers:', Array.isArray(question.answers) ? 'array' : typeof question.answers);
            console.log('Type of answer_type:', typeof question.answer_type);
            console.log("question", question);

            resolve(question);
          },
          error: (error: any) => {
            reject(error);
          }
        });
      });
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  





    

  


}
  
