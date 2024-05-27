import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CookieBannerComponent } from './cookie-banner/cookie-banner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, CommonModule, FormsModule, LandingPageComponent, CookieBannerComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
 
  title = 'PACO';

}