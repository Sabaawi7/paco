import { Component } from '@angular/core';

@Component({
  selector: 'app-text-analysis',
  standalone: true,
  imports: [],
  templateUrl: './text-analysis.component.html',
  styleUrl: './text-analysis.component.scss'
})
export class TextAnalysisComponent {

  aiResponse: string="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam";
}
