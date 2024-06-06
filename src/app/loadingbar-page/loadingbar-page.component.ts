import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loadingbar-page',
  standalone: true,
  imports: [MatProgressBarModule, NavigationBarComponent],
  templateUrl: './loadingbar-page.component.html',
  styleUrl: './loadingbar-page.component.scss'
})
export class LoadingbarPageComponent {

  loadingProgress: number = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    this.incrementProgress();
  }

  incrementProgress() {
    const interval = setInterval(() => {
      this.loadingProgress += 1;
      if (this.loadingProgress >= 100) {
        clearInterval(interval);
        this.router.navigate(['/personal-question']);
      }
    }, 10);
  }
}
