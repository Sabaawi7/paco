import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage: string = ''; 

  constructor() {}

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }

  setCurrentLanguage(language: string): void {
    this.currentLanguage = language;
    this.updateUiForLanguage(language);
  }

  private updateUiForLanguage(language: string): void {
     // Hier fügst du die Logik ein, um die Benutzeroberfläche basierend auf der ausgewählten Sprache zu aktualisieren.
    // Das könnte das Laden von Übersetzungen, das Anpassen von Texten, das Ändern von Stilen usw. umfassen.
    // Dies ist nur ein Beispiel. Du musst diese Methode entsprechend deinen Anforderungen implementieren.

    // Hier kannst du die Logik implementieren, um die Seite basierend auf der ausgewählten Sprache zu aktualisieren.
    // Zum Beispiel könntest du Routen neu laden oder Komponenten aktualisieren.
    // Du könntest auch eine Benachrichtigung senden, um Komponenten darüber zu informieren, dass sich die Sprache geändert hat.
    // Beispiel: window.location.reload(); um die gesamte Seite neu zu laden.
    // Diese Methode hängt von der Struktur und dem Verhalten deiner Anwendung ab.
    window.location.reload();
  }
}