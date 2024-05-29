import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgIf } from '@angular/common';
import { NgClass } from '@angular/common';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { InterviewComponent } from './interview/interview.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { TokenBannerComponent } from './token-banner/token-banner.component';
import { TokenService } from './token.service';



@Component({
  selector: 'app-chatbot-page',
  standalone: true,
  imports: [NgIf, NgClass, NavigationBarComponent,ProgressbarComponent, InterviewComponent, MatButtonModule, MatDialogModule],
  templateUrl: './chatbot-page.component.html',
  styleUrl: './chatbot-page.component.scss'
})

export class ChatbotPageComponent implements OnInit {
  answeredQuestions = 3;
  totalQuestions = 10;
  progressValue!: number;

  constructor(public dialog: MatDialog, private tokenService: TokenService) {
    this.openDialog();
  }
  

  openDialog() {
    const dialogRef = this.dialog.open(TokenBannerComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  ngOnInit(): void {
    this.generateRandomToken();
    this.updateProgressValue();
  }

  


  generateRandomToken(): void {
    let token = crypto.randomUUID()
    const tokenElement = document.getElementById('token');
    if (tokenElement) {
        tokenElement.textContent = token;
        this.tokenService.changeToken(tokenElement.innerText);
        console.log(tokenElement.innerText);
        console.log(token);
    }
  }

  updateProgressValue(): void {
    this.progressValue = (this.answeredQuestions / this.totalQuestions) * 100;
  }
}
