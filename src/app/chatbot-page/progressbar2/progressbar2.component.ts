import { CommonModule } from '@angular/common';
import { Component, Input , Output, EventEmitter} from '@angular/core';
import { Question } from '../interview/question.model';

@Component({
  selector: 'app-progressbar2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progressbar2.component.html',
  styleUrl: './progressbar2.component.scss'
})
export class Progressbar2Component {
  @Input() currentQuestionIndex: number = 0;
  @Input() questions: Question[] = [];
  @Output() navigate: EventEmitter<number> = new EventEmitter<number>();

  showQuestionOverview: boolean = false;
  

  get progressText(): string {
    return `${this.currentQuestionIndex + 1}/${this.questions.length}`;
  }

  navigateToQuestion(index: number): void {
    this.navigate.emit(index);
    this.showQuestionOverview = false;
  }

  showOverview(): void {
    this.showQuestionOverview = true;
  }

  hideOverview(): void {
    this.showQuestionOverview = false;
  }
}
