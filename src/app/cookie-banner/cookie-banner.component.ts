import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [NgIf],
  templateUrl: './cookie-banner.component.html',
  styleUrl: './cookie-banner.component.scss'
})
export class CookieBannerComponent {

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
