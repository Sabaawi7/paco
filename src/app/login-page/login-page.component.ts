import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationsbarComponent } from '../navigationsbar/navigationsbar.component';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, NavigationsbarComponent, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})


export class LoginPageComponent {
  passwordFieldType: string = 'password'; // Variable für den Anzeigetyp des Passwortfelds (standardmäßig versteckt)
  email: string = ''; // Variable für die E-Mail-Adresse
  password: string = ''; // Variable für das Passwort

  // Methode zum Umschalten der Sichtbarkeit des Passwortfelds zwischen Text und Passwort
  togglePasswordVisibility() {
    this.passwordFieldType = (this.passwordFieldType === 'password') ? 'text' : 'password'; // Ändert den Anzeigetyp des Passwortfelds
  }

  // Methode zur Überprüfung der Eingabe in E-Mail- und Passwortfeldern
  checkInput() {
    // Überprüft, ob E-Mail und Passwort mindestens ein Zeichen enthalten
    if (this.email.length > 0) {
      this.setFieldBackgroundColor('emailInput', '#b4f152'); // Setzt die Hintergrundfarbe des E-Mail-Felds
    } else {
      this.setFieldBackgroundColor('emailInput', ''); // Setzt die Hintergrundfarbe des E-Mail-Felds zurück
    }

    if (this.password.length > 0) {
      this.setFieldBackgroundColor('passwordField', '#b4f152'); // Setzt die Hintergrundfarbe des Passwortfelds
    } else {
      this.setFieldBackgroundColor('passwordField', ''); // Setzt die Hintergrundfarbe des Passwortfelds zurück
    }
  }

  // Private Methode zum Ändern der Hintergrundfarbe eines Feldes
  private setFieldBackgroundColor(fieldId: string, color: string) {
    const field = document.getElementById(fieldId); // Holt das HTML-Element mit der angegebenen ID
    if (field) {
      field.style.backgroundColor = color; // Setzt die Hintergrundfarbe des Elements
    }
  }

  constructor(private router: Router) {}

  navigateToRoleSelection() {
    this.router.navigate(['/role']);
  }



    
  }


