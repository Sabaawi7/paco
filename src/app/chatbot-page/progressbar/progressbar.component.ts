import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter ,OnInit } from '@angular/core';
import { Question } from '../interview/question.model';
import interviewJson from '../../../assets/interview.json';
import { InterviewService } from '../interview-service.service';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-progressbar',
  standalone: true,
  imports: [NgIf, NgFor, MatIconModule, MatButtonModule],
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit{
  
  @Input() menuTitles: any[] = [];
  menuPagesSubscription: Subscription | undefined;
  @Input() currentQuestionIndex: number = 1;
  @Input() questions: Question[] = interviewJson;
  @Output() navigate: EventEmitter<number> = new EventEmitter<number>();
  selectedQuestion: number = 0;
  foundItem = 0;
  showQuestionOverview: boolean = false;

  constructor(private interviewService: InterviewService) { }

  async ngOnInit() {
    this.menuPagesSubscription = this.interviewService.menuPages$.subscribe(
      menuPages => {
        this.menuTitles = menuPages;
      },
      error => {
        console.error("Error loading menu titles:", error);
      }
    );
    this.interviewService.getSelectedQuestion().subscribe((questionNumber) => {
      this.selectedQuestion = questionNumber;
    });
  }

  giveRealNumber(selectedQuestion: number): number | undefined {
    const foundItem = this.menuTitles.find(item => item.id === selectedQuestion);
    if (foundItem) {
      this.foundItem = foundItem.no;
      return foundItem.no;
    }
    return this.foundItem; // oder eine Standard-Rückgabe, wenn kein passendes Element gefunden wurde
  }

  async loadMenuTitles() {
    try {
      const titles = await this.interviewService.getMenuePages();
      this.menuTitles = titles;
    } catch (error) {
      console.error("Error loading menu titles:", error);
    }
  }


  get progressText(): string {
    return `${("0" + this.giveRealNumber(this.selectedQuestion)).slice(-2)}/${("0" + this.menuTitles.length).slice(-2)}`;
  }

  navigateToQuestion(index: any): void {
    this.hideOverview();
    this.interviewService.triggerNavigateToQuestion(index);
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
