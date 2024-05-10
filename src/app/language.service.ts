// language.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage: string = 'de'; // Standardmäßig Deutsch

  constructor() {}

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }

  setCurrentLanguage(language: string): void {
    this.currentLanguage = language;
    // Hier kannst du die Anwendung entsprechend neu laden oder die Benutzeroberfläche dynamisch aktualisieren, um die Spracheffekte zu übernehmen
  }
}