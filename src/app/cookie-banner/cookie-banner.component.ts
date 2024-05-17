import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [NgIf, MaterialModule],
  templateUrl: './cookie-banner.component.html',
  styleUrl: './cookie-banner.component.scss'
})
export class CookieBannerComponent {
  /**
   * Text auf der Seite und die Übersetzung
  */
  //default werte
  cookie_h2: string = '';
  cookie_p: string = '';
  accept_button: string = '';
  notaccept_button: string = '';

  ngOnInit(): void {
     const selectedLang = localStorage.getItem('lang'); 
     if (selectedLang === 'de' || selectedLang== null) {
       this.cookie_h2 ='Cookie-Einstellungen';
       this.cookie_p ='Wir verwenden Cookies, um Inhalte und Anzeigen zu personalisieren, Funktionen für soziale Medien anbieten zu können und die Zugriffe auf unsere Website zu analysieren. Außerdem geben wir Informationen über Ihre Nutzung unserer Website an unsere Partner für soziale Medien, Werbung und Analysen weiter. Unsere Partner können diese Informationen möglicherweise mit weiteren Daten zusammenführen, die Sie ihnen bereitgestellt haben oder die sie im Rahmen Ihrer Nutzung der Dienste gesammelt haben.';
       this.accept_button ='Akzeptieren';
       this.notaccept_button ='Ablehnen';
      
     } else if (selectedLang === 'en' ) {
       this.cookie_h2 ='Cookie Settings';
       this.cookie_p ='We use cookies to personalize content and ads, to provide social media features, and to analyze our website traffic. We also share information about your use of our site with our social media, advertising, and analytics partners. Our partners may combine this information with other data that you’ve provided to them or that they’ve collected from your use of their services.';
       this.accept_button ='Accept';
       this.notaccept_button ='Decline'; 
     }
  }

    // Variable, die den Zustand der Cookie-Benachrichtigung speichert
showCookieNotification = true;

// Methode, die aufgerufen wird, wenn der Benutzer die Cookies akzeptiert
onAccept(): void {
  // Setze den Zustand von showCookieNotification auf false, um die Benachrichtigung auszublenden
  this.showCookieNotification = false;
}

// Methode, die aufgerufen wird, wenn der Benutzer die Cookies ablehnt
onDecline(): void {
  // Setze den Zustand von showCookieNotification auf false, um die Benachrichtigung auszublenden
  this.showCookieNotification = false;
}
}