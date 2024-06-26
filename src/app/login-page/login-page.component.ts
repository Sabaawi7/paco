import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule,NavigationBarComponent, RouterLink, RouterLinkActive, RouterOutlet, MaterialModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})

export class LoginPageComponent {
  /**
   * Text auf der Seite und die Übersetzung
  */
  //default werte
  text_p: string = '';
  password_field: string = '';
  forgot_password: string = '';
  guest_login: string = '';
  remain_signedIn:string ='';

  ngOnInit(): void {
     const selectedLang = localStorage.getItem('lang'); 
     if (selectedLang === 'de' || selectedLang== null) {
         this.text_p = 'Bitte meldet euch als Mitarbeiter:in der Universität zu Köln mit euren Unidaten an oder wählt als Studierende den link zur Gastanmeldung.';
         this.password_field = 'Passwort *:';
         this.forgot_password = 'Passwort vergessen?';
         this.guest_login = 'Gastanmeldung';
         this.remain_signedIn= 'Angemeldet bleiben';

     } else if (selectedLang === 'en' ) {
         this.text_p = 'Please log in as a University of Cologne staff member using your university credentials, or select the link for guest registration if you are a student.';
         this.password_field = 'Password *:';
         this.forgot_password = 'Forgot password?';
         this.guest_login = 'Guest Registration';
         this.remain_signedIn = 'Stay Signed In';
     }
  }

handleLogin() {
throw new Error('Method not implemented.');
}
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