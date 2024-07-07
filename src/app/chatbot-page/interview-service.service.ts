import {  EventEmitter, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, firstValueFrom, Observable } from 'rxjs';
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

 
  private menuPagesSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public menuPages$ = this.menuPagesSubject.asObservable();  
  questions: Question[] = interviewJson;
  private answeredQuestionsSubject = new BehaviorSubject<number[]>([]);
  answeredQuestions$ = this.answeredQuestionsSubject.asObservable();
  private selectedQuestionSubject = new BehaviorSubject<number>(0);
  selectedQuestion$ = this.selectedQuestionSubject.asObservable();
  questionIndex = 1;
  token='';
  i=false; //damit menuPages nur einmal initialisert wird

  personalQuestion: Question = {question: 'a', answers: [], answer_type: '', subtext_info: ''};

/*
  private selectedQuestionSubject2 = new BehaviorSubject<number>(1);
  selectedQuestion2$: Observable<number> = this.selectedQuestionSubject.asObservable();


  updateSelectedQuestion(question: number) {
    this.selectedQuestionSubject2.next(question);
  }

  getCurrentSelectedQuestion(): number {
    return this.selectedQuestionSubject.getValue();
  }
*/
  private navigateToQuestionSource: EventEmitter<number> = new EventEmitter<number>();
  navigateToQuestion$ = this.navigateToQuestionSource.asObservable();

  triggerNavigateToQuestion(index: any) {
    console.log("Navigating to question2:", index);
    this.navigateToQuestionSource.emit(index);
  }


  ngOnInit() {
    this.tokenService.currentToken.subscribe(token => {
    this.token = token;
    });
  }

  getQuestionIndex() : number {
    return this.questionIndex; 
  }

  selectQuestion(questionNumber: number) {
    this.selectedQuestionSubject.next(questionNumber);
    this.questionIndex = questionNumber + 1;
  }

  getQuestion(questionNumber: number): Question {

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
    return this.ensureToken().then(() => {
      return new Promise<Question>((resolve, reject) => {
        const payload = {
          "userid": this.token,
          "question_type_id": 1,
          "question_id": number,
          "request_type": 'get'
        };


        this.httpClient.post<any>("http://localhost:8000/api/answers", payload).subscribe({
          next: (response: { question_title: any; all_elements: any;io_type: any; 
            answer_label:any ; selected_elements:any ; menue_pages: any}) => {

            const question: Question = {
              question: String(response.question_title),
              answers: response.all_elements,
              answer_type: response.io_type,
              answer_label: response.answer_label,
              selected_elements: response.selected_elements
            };
            if(!this.i){//Menupages initialisiren nur einmal
              this.i=true;
              const menuPages= response.menue_pages;
              menuPages.splice(-2,2)
              this.menuPagesSubject.next(menuPages);
              console.log("Menu pages:", this.menuPages$);
            }
            if(response.io_type === 'generated'){
              this.personalQuestion = question;
            }

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

  


  async postApiAnswer(number: number, answer: string[] | any[]): Promise<void> {
  
    this.ensureToken().then(() => {
      const payload = {
        userid: this.token,
        question_type_id: 1,
        question_id: number,
        request_type: 'post',
        dataToPost: answer
      };
  
      this.httpClient.post<any>("http://localhost:8000/api/answers", payload).subscribe({
        next: () => {},
        error: (error: any) => {
          console.error("Error in postApiAnswer:", error);
        }
      });
    }).catch(error => {
      console.error("Token retrieval error:", error);
    });
  }


/*Wird sichergestellt, dass ein Token vorhanden ist.
Ein POST-Request wird an das Backend gesendet, um die menue_pages-Daten abzurufen.
Die menue_pages-Daten werden in der Variablen menuePages gespeichert.
Die title-Eigenschaften aus menuePages werden extrahiert und in einer neuen Variablen titles gespeichert.
Die titles-Variablen werden zurückgegeben.
*/
   // Neue Methode um die menue_pages Daten zu holen und die "title" zu filtern
   async getMenuePages(): Promise<any[]> {
    await this.menuPages$.toPromise(); // Warten, bis menuPages initialisiert ist
    console.log("Menu pages: in getmenupages", this.menuPagesSubject.getValue());
    return this.menuPagesSubject.getValue();
  }





}