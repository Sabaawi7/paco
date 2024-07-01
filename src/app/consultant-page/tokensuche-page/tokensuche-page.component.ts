import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
  
  saveAnswerText(personalizedQuestion: string, textInput: string) {
    // Your save logic here
    console.log('Personalized Question:', personalizedQuestion);
    console.log('Text Input:', textInput);
}
}