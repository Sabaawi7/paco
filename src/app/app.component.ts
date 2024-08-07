import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CookieBannerComponent } from './cookie-banner/cookie-banner.component';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, CommonModule, FormsModule, LandingPageComponent, CookieBannerComponent, HttpClientModule],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
 
  title = 'PACO';

}