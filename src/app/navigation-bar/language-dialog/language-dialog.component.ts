import { Component } from '@angular/core';
import { LanguageService } from '../../language.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MaterialModule } from '../../material/material.module';

import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-language-dialog',
  standalone: true,
  imports: [NgIf, NgFor, MaterialModule],
  templateUrl: './language-dialog.component.html',
  styleUrl: './language-dialog.component.scss'
})
export class LanguageDialogComponent {
  
  constructor(
    private languageService: LanguageService,
    private dialogRef: MatDialogRef<LanguageDialogComponent>,
    private dialog: MatDialog
  ) {}

  changeLanguage(event: Event): void {
    const target = event.target as HTMLSelectElement;
    if (target instanceof HTMLSelectElement) {
      const selectedValue = target.value;
      this.languageService.setCurrentLanguage(selectedValue);
      this.closeLanguagePopup(); // Schließe das Dialogfenster nach der Auswahl
    }
  }

  applyLanguage(): void {

    // Schließe das Popup-Fenster
    this.closeLanguagePopup();
    const selectedLanguage = (document.getElementById('languageSelect') as HTMLSelectElement).value;
  
    // Setze die ausgewählte Sprache im LanguageService
    this.languageService.setCurrentLanguage(selectedLanguage);
  

      // Schließe das Popup-Fenster
  this.closeLanguagePopup();
    // Füge hier die Logik ein, um die Benutzeroberfläche basierend auf der ausgewählten Sprache zu aktualisieren
    // Zum Beispiel könntest du eine Methode im LanguageService aufrufen, die die Benutzeroberfläche dynamisch anpasst.
  
    // Anmerkung: Die genaue Logik hängt von der Art deiner Anwendung und der Implementierung im LanguageService ab.
  }

  closeLanguagePopup(): void {
    this.dialogRef.close(); // Schließe das Dialogfenster
  }



 
}
//<a href="https://www.flaticon.com/free-icons/germany" title="germany icons">Germany icons created by Dighital - Flaticon</a>