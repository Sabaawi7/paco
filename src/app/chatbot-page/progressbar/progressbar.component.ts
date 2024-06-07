import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../interview/question.model';
import interviewJson from '../../../assets/interview.json';
import { InterviewService } from '../interview-service.service';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-progressbar',
  standalone: true,
  imports: [NgIf, NgFor, MatIconModule, MatButtonModule],
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent {

  @Input() currentQuestionIndex: number = 1;
  @Input() questions: Question[] = interviewJson;
  @Output() navigate: EventEmitter<number> = new EventEmitter<number>();

  showQuestionOverview: boolean = false;

  constructor(private interviewService: InterviewService) { }

  get progressText(): string {
    return `${("0" + this.interviewService.getQuestionIndex()).slice(-2)}/${("0" + this.questions.length).slice(-2)}`;
  }

  navigateToQuestion(index: number): void {
    this.interviewService.selectQuestion(index);
    this.showQuestionOverview = false;
  }

  showOverview(): void {
    this.showQuestionOverview = true;
  }

  hideOverview(): void {
    this.showQuestionOverview = false;
  }

  // Toggle the visibility of the question overview
  toggleOverview(): void {
    this.showQuestionOverview = !this.showQuestionOverview;
  }
}
