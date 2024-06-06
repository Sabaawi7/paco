import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private tokenSource = new BehaviorSubject<string>('');
  currentToken = this.tokenSource.asObservable();
  token='';
  constructor() { }

  changeToken(token: string) {
    this.token = token;
    this.tokenSource.next(token);
  }

  getToken(): any {
    return this.token;
  }
}