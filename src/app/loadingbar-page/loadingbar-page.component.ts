import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-loadingbar-page',
  standalone: true,
  imports: [MatProgressBarModule, NavigationBarComponent],
  templateUrl: './loadingbar-page.component.html',
  styleUrl: './loadingbar-page.component.scss'
})
export class LoadingbarPageComponent {

  loadingProgress: number = 0;

  ngOnInit() {
    this.incrementProgress();
  }

  incrementProgress() {
    const interval = setInterval(() => {
      this.loadingProgress += 1;
      if (this.loadingProgress >= 100) {
        clearInterval(interval);
        // Navigation zu einer anderen Seite oder Logik nach dem Laden
      }
    }, 30);
  }
}
