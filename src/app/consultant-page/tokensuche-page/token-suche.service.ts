import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenSucheService {

  constructor(private httpClient: HttpClient) {}

  getAnswers(userId: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = { userid: userId,
      question_type_id: 1,
      question_id: 1,
      request_type: "get"
      };

    return this.httpClient.post("http://localhost:8000/api/answers", body, { headers });
  }

}
