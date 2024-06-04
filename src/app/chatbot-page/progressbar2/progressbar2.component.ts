import { CommonModule } from '@angular/common';
import { Component, Input , Output, EventEmitter} from '@angular/core';
import { Question } from '../interview/question.model';
import interviewJson from '../../../assets/interview.json';
import { InterviewService } from '../interview-service.service';

@Component({
  selector: 'app-progressbar2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progressbar2.component.html',
  styleUrl: './progressbar2.component.scss'
})
export class Progressbar2Component {
  @Input() currentQuestionIndex: number = 1;
  @Input() questions: Question[] = interviewJson;
  @Output() navigate: EventEmitter<number> = new EventEmitter<number>();

  showQuestionOverview: boolean = false;
  
  constructor(private interviewService: InterviewService) { }

  get progressText(): string {
    return `${"0" + this.interviewService.getQuestionIndex()}/${"0" + this.questions.length}`;
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
}
