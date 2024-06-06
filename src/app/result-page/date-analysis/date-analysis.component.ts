import { Component } from '@angular/core';
import { TextAnalysisComponent } from './text-analysis/text-analysis.component';
import { GraphicalAnalysisComponent } from './graphical-analysis/graphical-analysis.component';

@Component({
  selector: 'app-date-analysis',
  standalone: true,
  imports: [TextAnalysisComponent,GraphicalAnalysisComponent],
  templateUrl: './date-analysis.component.html',
  styleUrl: './date-analysis.component.scss'
})
export class DateAnalysisComponent {

  title: string = "Interview intelligence";
subtitle: string = "Gründliche Analyse Ihrer Interview Ergebnisse"
}
