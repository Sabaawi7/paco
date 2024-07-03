import { Component, OnInit } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnswersService } from '../chatbot-page/interview/answers.service';
import { Router } from '@angular/router';
import { InterviewService } from '../chatbot-page/interview-service.service';

export let hasPersonalQuestionBeenAsked = false;

@Component({
  selector: 'app-personalquestion-page',
  standalone: true,
  imports: [NavigationBarComponent, MaterialModule, CommonModule, FormsModule],
  templateUrl: './personalquestion-page.component.html',
  styleUrl: './personalquestion-page.component.scss'
})
export class PersonalquestionPageComponent implements OnInit {

  personalizedQuestion: string=this.interviewService.personalQuestion.question;
  timeoutId: any;
  TextInput: String = '';
  showButton = false;

  constructor(private router:Router, private answersService: AnswersService, private interviewService: InterviewService) { }

  ngOnInit(): void {

         // Start typeWriter animation;
         this.typeWriter(this.personalizedQuestion, 0);
  }


    // Typewriter animation for displaying question text;
    typeWriter(text: string, i: number) {
      if (i < text.length) {
        this.personalizedQuestion = text.substring(0, i + 1);
        this.timeoutId = setTimeout(() => this.typeWriter(text, i + 1), 50);
      } else {
        this.showButton = true; // Set showButton to true after the animation is complete
      }
    }


      // Save single answer (single choice, text, dropdown);
  saveAnswerText(arg0: any, arg1: any) {

    this.answersService.saveOnlyOneAnswer(arg0, arg1);
  }


  navigateToNextPage(){
    
    hasPersonalQuestionBeenAsked=true;
    this.router.navigate(['/loading']);

  }

}

