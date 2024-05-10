import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LanguageDialogComponent } from './language-dialog/language-dialog.component';
import { LanguageService } from '../language.service';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet,LanguageDialogComponent, NgIf,NgFor],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {
  links: { path: string, label: string }[] = [];
  isMenuOpen: boolean = false;

  @ViewChild('navbarMenu', { static: false }) navbarMenu!: ElementRef;

  constructor(private dialog: MatDialog, private languageService: LanguageService) {
   
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
