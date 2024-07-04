import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { LoginService } from './login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, NavigationBarComponent, RouterLink, RouterLinkActive, RouterOutlet, MaterialModule, CommonModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  // Text and translations for the page
  text_p: string = '';
  password_field: string = '';
  forgot_password: string = '';
  guest_login: string = '';
  remain_signedIn: string = '';

  email: string = ''; // Variable for the email address
  password: string = ''; // Variable for the password
  passwordFieldType: string = 'password'; // Variable for the type of password field (hidden by default)
  registrationSuccessful: boolean = false; // Variable to track registration status
  loginError: string = ''; // Variable to track login error message

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    const selectedLang = localStorage.getItem('lang');
    // Set text based on selected language
    if (selectedLang === 'de' || selectedLang == null) {
      this.text_p = 'Bitte meldet euch als Mitarbeiter:in der Universität zu Köln mit euren Unidaten an oder wählt als Studierende den link zur Gastanmeldung.';
      this.password_field = 'Passwort *:';
      this.forgot_password = 'Passwort vergessen?';
      this.guest_login = 'Gastanmeldung';
      this.remain_signedIn = 'Angemeldet bleiben';
    } else if (selectedLang === 'en') {
      this.text_p = 'Please log in as a University of Cologne staff member using your university credentials, or select the link for guest registration if you are a student.';
      this.password_field = 'Password *:';
      this.forgot_password = 'Forgot password?';
      this.guest_login = 'Guest Registration';
      this.remain_signedIn = 'Stay Signed In';
    }
  }

  // Method to handle login
  handleLogin(event: Event) {
    event.preventDefault(); // Prevent form submission
    this.loginService.login(this.email, this.password).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        this.loginService.saveTokens(response.access, response.refresh);
        this.router.navigate(['/']); // Navigate to the dashboard or desired route
      },
      error: (error) => {
        console.error('Login failed', error);
        this.loginError = 'Login failed. Please check your credentials and try again.';
      },
      complete: () => {
        console.log('Login request completed');
      }
    });
  }

  // Method to register a new user
  register() {
    this.loginService.register(this.email, this.password).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
        this.registrationSuccessful = true; // Set registration status to true on successful registration
        this.clearForm(); // Clear form fields
      },
      error: (error) => {
        console.error('Registration failed', error);
      },
      complete: () => {
        console.log('Registration request completed');
      }
    });
  }

  // Method to clear form fields
  clearForm() {
    this.email = '';
    this.password = '';
  }

  // Method to toggle password visibility
  togglePasswordVisibility() {
    this.passwordFieldType = (this.passwordFieldType === 'password') ? 'text' : 'password';
  }

  // Method to check input fields and set background color accordingly
  checkInput() {
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

  // Private method to set background color of a field
  private setFieldBackgroundColor(fieldId: string, color: string) {
    const field = document.getElementById(fieldId);
    if (field) {
      field.style.backgroundColor = color;
    }
  }

  // Method to navigate to the role selection page
  navigateToRoleSelection() {
    this.router.navigate(['/role']);
  }
}
