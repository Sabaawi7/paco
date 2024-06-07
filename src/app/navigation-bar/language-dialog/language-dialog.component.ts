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
//MIN 12 GLOBAL IMPORT;

  ChangeLang(event: any) {
   
    //if errors occure, read directly from localstorage;
    const selectedValue = event.value;
    console.log('Selected value:', selectedValue);
    localStorage.setItem("lang",selectedValue);
    this.reloadPage();

  
  }
  
  constructor(

    private dialogRef: MatDialogRef<LanguageDialogComponent>,
    private dialog: MatDialog

  ) {}

  changeLanguage(event: Event): void {

  }

  applyLanguage(): void {

    this.closeLanguagePopup();
    //Set the selected language in LanguageService.ts;
    

      // Close popup window;
  this.closeLanguagePopup();
    
  }

  closeLanguagePopup(): void {
    this.dialogRef.close();
  }

   reloadPage(): void {
    window.location.reload(); 
}
}
//<a href="https://www.flaticon.com/free-icons/germany" title="germany icons">Germany icons created by Dighital - Flaticon</a>