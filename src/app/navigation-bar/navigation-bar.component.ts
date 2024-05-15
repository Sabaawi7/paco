import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LanguageDialogComponent } from './language-dialog/language-dialog.component';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, NgIf,NgFor],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {

    /**
   * Text auf der Seite und die Übersetzung
  */
  //default werte
  login_button: string = '';
  legalNotice_button: string = '';
  contact_button: string = '';

  ngOnInit(): void {
     const selectedLang = localStorage.getItem('lang'); 
     if (selectedLang === 'de' || selectedLang== null) {
        this.login_button = 'Anmelden';
        this.legalNotice_button = 'Impressum';
        this.contact_button = 'Kontakt';
     } else if (selectedLang === 'en' ) {
        this.login_button = 'Log in';
        this.legalNotice_button = 'Legal Notice';
        this.contact_button = 'Contact';   
     }
  }




  links: { path: string, label: string }[] = [];
  isMenuOpen: boolean = false;

  @ViewChild('navbarMenu', { static: false }) navbarMenu!: ElementRef;

  constructor(private dialog: MatDialog) {
   
  }

  openLanguagePopup(): void {
    const dialogRef = this.dialog.open(LanguageDialogComponent);
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isMenuOpen) {
      this.navbarMenu.nativeElement.style.maxHeight = `${this.navbarMenu.nativeElement.scrollHeight}px`;
    } else {
      this.navbarMenu.nativeElement.style.maxHeight = '0';
    }
  }




}
