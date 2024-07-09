import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  
  private tokenSource = new BehaviorSubject<string>(''); // Initialize with an empty string
  currentToken = this.tokenSource.asObservable(); // Exposed as an Observable for external subscription

  constructor(private httpClient: HttpClient) {
    this.fetchToken();
  }

  // Keep private since it's an internal helper method
  private changeToken(token: string) {
    this.tokenSource.next(token); // Update the BehaviorSubject's value
  }

  getToken(): string {
    return this.tokenSource.value; // Directly access the current value
  }

  fetchToken() {
    this.httpClient.post<{ userid: string; message: string }>("http://localhost:8000/api/userid", {}, {withCredentials : true})
      .subscribe({
        next: (response) => {
          this.changeToken(response.userid); // Set new token
        },
        error: (error) => {
          console.error('Failed to fetch token', error);
        },
        complete: () => {
          console.log('Token fetch completed');
        }
      });
  }
}
