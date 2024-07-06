import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgIf } from '@angular/common';
import { NgClass } from '@angular/common';
import  questionsData from '../../assets/interview.json';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { InterviewComponent } from './interview/interview.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { TokenBannerComponent } from './token-banner/token-banner.component';
import { TokenService } from './token.service';
import { Question } from './interview/question.model';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { ProgressbarComponent } from './progressbar/progressbar.component';


@Component({
  selector: 'app-chatbot-page',
  standalone: true,
  imports: [NgIf, NgClass, NavigationBarComponent,ProgressbarComponent, MatButtonModule, MatDialogModule, InterviewComponent, MatButtonToggleModule, MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule],
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
      /**
       * Die JSON Datei wurde oben importiert über den Pfad im Projekt. Die Datei wurde in der
       * Variable "interviewJson" gespeichert. Durch diese Variable kann man auf den Inhalt
       * der JSON Datei zugreifen und es nutzen um das Interview zu gestalten.
       * Die Attribute der JSON sind : 
       * "question" (String); 
       * "answers" (Array an Antwortmöglichkeiten) answers=null, falls Schreibantwort gefordert ist ;
       * "answer_type" (String) ob multiple_choice, single_choice, writing oder dropdown ; 
       * "subtext_info" dieses Attribut haben nur writing-fragen, wo weitere infos gegeben sind.
       */
      
     
  
      this.questions = questionsData;
      this.updateProgressValue();
    }
  
    
  
  
  
  
    updateProgressValue(): void {
      this.progressValue = (this.answeredQuestions / this.totalQuestions) * 100;
    }
  
    questions: Question[] = questionsData;
    currentQuestionIndex: number = 0;
  
   
  
    navigateToQuestion(index: number): void {
      this.currentQuestionIndex = index;
    }
  
   
  
    
  }
  

