import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MaterialModule } from '../../material/material.module';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-language-dialog',
  standalone: true,
  imports: [ MaterialModule, FormsModule],
  templateUrl: './language-dialog.component.html',
  styleUrl: './language-dialog.component.scss'
})
export class LanguageDialogComponent {
  selectedOption = 'de';
  lang='de';
//MIN 12 GLOBAL IMPORTIEREN

  ChangeLang(event: any) {
    //falls fehler direkt von localstorage lesen
    const selectedValue = event.value;
    console.log('Selected value:', selectedValue);
    localStorage.setItem("lang",selectedValue);
    this.reloadPage();

    // Hier können Sie die Logik für die Verarbeitung des ausgewählten Werts implementieren
  }
  
  constructor(
    private dialogRef: MatDialogRef<LanguageDialogComponent>,
    private dialog: MatDialog
  ) {}

  changeLanguage(event: Event): void {

  }

  applyLanguage(): void {
    this.closeLanguagePopup();
    // Setze die ausgewählte Sprache im LanguageService
  

      // Schließe das Popup-Fenster
  this.closeLanguagePopup();
    // Füge hier die Logik ein, um die Benutzeroberfläche basierend auf der ausgewählten Sprache zu aktualisieren
    // Zum Beispiel könntest du eine Methode im LanguageService aufrufen, die die Benutzeroberfläche dynamisch anpasst.
  
    // Anmerkung: Die genaue Logik hängt von der Art deiner Anwendung und der Implementierung im LanguageService ab.
  }

  closeLanguagePopup(): void {
    this.dialogRef.close(); // Schließe das Dialogfenster
  }


   reloadPage(): void {
    window.location.reload(); // Lädt die Seite neu
}
 
}
//<a href="https://www.flaticon.com/free-icons/germany" title="germany icons">Germany icons created by Dighital - Flaticon</a>