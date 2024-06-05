import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { NgFor } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
@Component({
  selector: 'app-graphical-analysis',
  standalone: true,
  imports: [NgClass, NgFor, MatProgressBarModule],
  templateUrl: './graphical-analysis.component.html',
  styleUrl: './graphical-analysis.component.scss'
})
export class GraphicalAnalysisComponent {
 
  features = [
    { title: 'Praktisch-Anwendungsorientiert' },
    { title: 'Analytisch-Problemlösend' },
    { title: 'Kreativ-Innovativ' },
    { title: 'Kommunikativ-Interpersonell' },
    { title: 'Selbstbewusst-Ambitioniert' },
    { title: 'Fleißig-Diszipliniert' }
  ];

  scaleValues = Array.from({ length: 10 }, (_, i) => i + 1);
}