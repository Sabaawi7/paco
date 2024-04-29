import { Component } from '@angular/core';
import { NavigationsbarComponent } from "../navigationsbar/navigationsbar.component";
import { CookieBannerComponent } from '../cookie-banner/cookie-banner.component';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.scss',
    imports: [NavigationsbarComponent,CookieBannerComponent,CommonModule]
})
export class LandingPageComponent {

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
