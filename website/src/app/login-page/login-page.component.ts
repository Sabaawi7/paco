import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})


export class LoginPageComponent {
  passwordFieldType: string = 'password'; // Standardwert: Passwort versteckt
  email: string = ''; // Variable für E-Mail
  password: string = ''; // Variable für Passwort



  togglePasswordVisibility() {
    this.passwordFieldType = (this.passwordFieldType === 'password') ? 'text' : 'password';
  }

  checkInput() {
    // Überprüfe, ob E-Mail und Passwort mindestens ein Zeichen enthalten
    if (this.email.length > 0) {
      this.setFieldBackgroundColor('emailInput', '#b4f152');
    } else {
      this.setFieldBackgroundColor('emailInput', '');
    }

    if (this.password.length > 0) {
      this.setFieldBackgroundColor('passwordField', '#b4f152');
    } else {
      this.setFieldBackgroundColor('passwordField', '');
    }
  }

  // Methode zur Änderung der Hintergrundfarbe eines Feldes
  private setFieldBackgroundColor(fieldId: string, color: string) {
    const field = document.getElementById(fieldId);
    if (field) {
      field.style.backgroundColor = color;
    }
  }


 




    
  }


