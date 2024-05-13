import { Component } from '@angular/core';
import { LanguageService } from '../../language.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
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

  showLanguageOptions: boolean = false;
  
  languageOptions: { value: string, label: string, flag: string }[] = [
    { value: 'de', label: 'German', flag: "../../../assets/germany.png" },
    { value: 'en', label: 'English', flag: 'assets/flags/en.png' },
    // Weitere Sprachoptionen hier hinzufügen
];
  
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
//<a href="https://www.flaticon.com/free-icons/germany" title="germany icons">Germany icons created by Dighital - Flaticon</a>