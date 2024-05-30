import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private tokenSource = new BehaviorSubject<string>('');
  currentToken = this.tokenSource.asObservable();

  constructor() { }

  changeToken(token: string) {
    this.tokenSource.next(token);
  }
}