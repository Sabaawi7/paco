import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, first } from 'rxjs/operators';
import { Question } from '../../chatbot-page/interview/question.model';

@Injectable({
  providedIn: 'root'
})
export class TokenSucheService {
  constructor(private httpClient: HttpClient) {}

  getAnswers(token: string, questionId: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = {
      userid: token,
      question_type_id: 1,
      question_id: questionId,
      request_type: 'get'
    };

    return this.httpClient.post<any>("http://localhost:8000/api/answers", body, { headers });
  }

  getApiAnswer(token: string, questionId: number): Promise<Question> {
    const body = {
      userid: token,
      question_type_id: 1,
      question_id: questionId,
      request_type: 'get'
    };

    return new Promise<Question>((resolve, reject) => {
      this.httpClient.post<any>("http://localhost:8000/api/answers", body).subscribe({
        next: (response: { question_title: any; all_elements: any; io_type: any; answer_label: any; selected_elements: any; menue_pages: any }) => {
          const question: Question = {
            question: String(response.question_title),
            answers: response.all_elements,
            answer_type: response.io_type,
            answer_label: response.answer_label,
            selected_elements: response.selected_elements
          };
          resolve(question);
        },
        error: (error: any) => {
          reject(error);
        }
      });
    });
  }
}
