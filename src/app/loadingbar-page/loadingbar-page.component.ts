import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { hasPersonalQuestionBeenAsked } from '../personalquestion-page/personalquestion-page.component';

@Component({
  selector: 'app-loadingbar-page',
  standalone: true,
  imports: [MatProgressBarModule, NavigationBarComponent, CommonModule],
  templateUrl: './loadingbar-page.component.html',
  styleUrl: './loadingbar-page.component.scss'
})
export class LoadingbarPageComponent {

  loadingProgress: number = 0;
  textPersonalQuestion: string = "Personalisierte Frage wird erstellt.";
  textDashboard: string = "Auswertung folgt.";
  personalQuestionHasBeenAsked: boolean = hasPersonalQuestionBeenAsked;

  constructor(private router: Router) {}

  ngOnInit() {
    this.incrementProgress();
  }

  incrementProgress() {
    const interval = setInterval(() => {
      this.loadingProgress += 1;
      if (this.loadingProgress >= 110) {
        console.log(this.loadingProgress);
        clearInterval(interval);
        this.navigateBasedOnPersonalQuestion();
      
      }
    }, 30);
  }

  navigateBasedOnPersonalQuestion() {
    if (hasPersonalQuestionBeenAsked) {
      this.router.navigate(['/result']);
    } else {
      this.router.navigate(['/personalquestion']);
    }
  }

}
