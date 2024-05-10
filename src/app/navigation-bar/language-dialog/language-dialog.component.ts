import { Component } from '@angular/core';
import { LanguageService } from '../../language.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-language-dialog',
  standalone: true,
  imports: [],
  templateUrl: './language-dialog.component.html',
  styleUrl: './language-dialog.component.scss'
})
export class LanguageDialogComponent {

  showLanguageOptions: boolean = false;
  
  constructor(private languageService: LanguageService, private dialogRef: MatDialogRef<LanguageDialogComponent>, private dialog: MatDialog) {

  }

  changeLanguage(event: Event): void {
    const target = event.target as HTMLSelectElement;
    if (target instanceof HTMLSelectElement) {
      const selectedValue = target.value;
      this.languageService.setCurrentLanguage(selectedValue);
      this.showLanguageOptions = false; // Verstecke das Dropdown-Menü nach der Auswahl

    }
  }

  closeLanguagePopup(): void {
    this.dialogRef.close(); // Schließe das Dialogfenster
  }

  applyLanguage(): void {
    // Speichere die ausgewählte Sprache und schließe das Dialogfenster
    const selectedValue = (document.getElementById('languageSelect') as HTMLSelectElement).value;
    this.languageService.setCurrentLanguage(selectedValue);
    this.dialogRef.close();
    location.reload(); // Seite neu laden, um die Spracheffekte zu übernehmen
  }




 
}
