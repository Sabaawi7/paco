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

  isLoading: boolean = false;
  loadingProgress: number = 0;

  showLoadingBar(): void {
    this.isLoading = true;
    this.loadingProgress = 0;

    // Simulate a loading process
    const loadingInterval = setInterval(() => {
      if (this.loadingProgress < 100) {
        this.loadingProgress += 10; // Increment progress
      } else {
        clearInterval(loadingInterval);
        this.isLoading = false;
        // Navigate to a different view or perform some action here
      }
    }, 300); // Adjust the interval and increment as needed
  }
}
