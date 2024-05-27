import { Component, OnInit } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { CookieBannerComponent } from '../cookie-banner/cookie-banner.component';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../material/material.module';

@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.scss',
    imports: [NavigationBarComponent,CookieBannerComponent,CommonModule, RouterLink, RouterLinkActive, RouterOutlet,MaterialModule]
})

export class LandingPageComponent implements OnInit{

  /**
   * Text auf der Seite und die Übersetzung
  */
 
  //default werte
  title_h1: string = '';
  title_p: string = ''; 
  title_h2: string = '';
  kasten1_h3:string='';
  kasten1_p:string='';
  kasten2_h3:string='';
  kasten2_p:string='';
  kasten3_h3:string='';
  kasten3_p:string='';

  ngOnInit(): void {
     const selectedLang = localStorage.getItem('lang'); 
     if (selectedLang === 'de' || selectedLang== null) {
         this.title_h1 = 'Willkommen bei PACO';
         this.title_p = 'Wir helfen Ihnen, Ihre Studienwahl zu treffen.'
         this.title_h2 = 'Merkmale';
         this.kasten1_h3 = 'Beratung';
         this.kasten1_p = 'Individuelle Beratung, um Ihnen bei der Wahl des besten Weges zu helfen.';
         this.kasten2_h3 = 'Ressourcen';
         this.kasten2_p = 'Zugang zu einer Vielzahl von Bildungsressourcen.';
         this.kasten3_h3 = 'Unterstützung';
         this.kasten3_p = 'Erhalten Sie prompt Antworten auf all Ihre Fragen.';
     } else if (selectedLang === 'en' ) {
         this.title_h1 = 'Welcome to PACO';
         this.title_p = 'We will help you choose your major.';
         this.title_h2 = 'Features';
         this.kasten1_h3 = 'Consultation';
         this.kasten1_p = 'Individual consultation to assist you in choosing the best path.';
         this.kasten2_h3 = 'Resources'
         this.kasten2_p = 'Access to a wide range of educational resources.';
         this.kasten3_h3 = 'Support';
         this.kasten3_p = 'Receive prompt answers to all your questions.';
     }
  }

   // Variable, die den Zustand der Cookie-Benachrichtigung speichert
   showCookieNotification = true;

   // Methode, die aufgerufen wird, wenn der Benutzer die Cookies akzeptiert oder ablehnt
   onClose(): void {
     // Setze den Zustand von showCookieNotification auf false, um die Benachrichtigung auszublenden
     this.showCookieNotification = false;
   }
 
   // Methode, die aufgerufen wird, wenn der Benutzer die Cookies akzeptiert
   onAccept(): void {
     // Rufe die Methode onClose auf, um die Benachrichtigung auszublenden
     this.onClose();
     // Weitere Logik hier ...
   }
 
   // Methode, die aufgerufen wird, wenn der Benutzer die Cookies ablehnt
   onDecline(): void {
     // Rufe die Methode onClose auf, um die Benachrichtigung auszublenden
     this.onClose();
     // Weitere Logik hier ...
   }
}