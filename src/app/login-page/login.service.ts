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

  // Login method returns an Observable
  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = { username: email, password : password };

    return this.httpClient.post("http://localhost:8000/api/login", body, { headers, withCredentials: true });
  }

  // Save tokens to local storage
  saveTokens(accessToken: string, refreshToken: string) {
    localStorage.setItem('access', accessToken);
    localStorage.setItem('refresh', refreshToken);
    this.changeAuthState(true);
  }

  // Get access token from local storage
  getAccessToken(): string | null {
    return localStorage.getItem('access');
  }

  // Get refresh token from local storage
  getRefreshToken(): string | null {
    return localStorage.getItem('refresh');
  }

  // Clear tokens from local storage
  clearTokens() {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    this.changeAuthState(false);
  }
}
