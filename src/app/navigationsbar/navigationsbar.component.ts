import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navigationsbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './navigationsbar.component.html',
  styleUrls: ['./navigationsbar.component.scss']
})
export class NavigationsbarComponent {
  isMenuOpen: boolean = false;

  // Access the navbar-menu DOM element
  @ViewChild('navbarMenu', { static: false }) navbarMenu!: ElementRef;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;

    // Adjust the max height of the navbar menu based on its content
    if (this.isMenuOpen) {
      // Set the max height to the scroll height of the navbar menu element
      this.navbarMenu.nativeElement.style.maxHeight = `${this.navbarMenu.nativeElement.scrollHeight}px`;
    } else {
      // Collapse the navbar menu by setting max height to 0
      this.navbarMenu.nativeElement.style.maxHeight = '0';
    }
  }
}
