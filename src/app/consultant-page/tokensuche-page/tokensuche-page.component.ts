import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClient } from '@angular/common/http';
import { TokenSucheService } from './token-suche.service';

@Component({
  selector: 'app-tokensuche-page',
  standalone: true,
  imports: [ CommonModule, FormsModule,  MaterialModule, MatInputModule ],
  templateUrl: './tokensuche-page.component.html',
  styleUrl: './tokensuche-page.component.scss'
})
export class TokensuchePageComponent {
  TextInput: string = '';
  CheckedToken: string = '';
  answers: any = {};

  constructor(private http: HttpClient, private tokenSuche: TokenSucheService) {}
  
  saveAnswerText(personalizedQuestion: string, textInput: string) {
    // Your save logic here
    console.log('Personalized Question:', personalizedQuestion);
    console.log('Text Input:', textInput);
}
searchToken(){
  if (!this.TextInput) {
    alert('Please enter a token');
    return;
  }

  this.http.post('localhost:8000/api/answers', {
    token: this.TextInput,
    request_type: 'getSelectedAnswers',
    question_type_id: 1
  }).subscribe(
    (response: any) => {
      this.answers = response;
      console.log('Answers:', this.answers);
    },
    (error) => {
      console.error('Error fetching answers:', error);
    }
  );
}
getAnswerKeys() {
  return Object.keys(this.answers);
}
}
