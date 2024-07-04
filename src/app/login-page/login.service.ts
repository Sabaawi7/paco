import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private authStateSource = new BehaviorSubject<boolean>(false);
  currentAuthState = this.authStateSource.asObservable();

  constructor(private httpClient: HttpClient) {}

  private changeAuthState(isAuthenticated: boolean) {
    this.authStateSource.next(isAuthenticated);
  }

  isAuthenticated(): boolean {
    return this.authStateSource.value;
  }

  // Register method returns an Observable
  register(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = { username: email, email, password };

    return this.httpClient.post("http://localhost:8000/api/register", body, { headers, withCredentials: true });
  }
}
