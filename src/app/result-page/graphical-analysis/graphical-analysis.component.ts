import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-graphical-analysis',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './graphical-analysis.component.html',
  styleUrl: './graphical-analysis.component.scss'
})
export class GraphicalAnalysisComponent {
title:string="Interview intelligence";
featureOne_title: string="Praktisch-Anwendungsorientiert";
featureTwo_title: string="Analytisch-Problemlösend";
featureThree_title: string="Kreativ-Innovativ";
featureFour_title: string="Kommunikativ-Interpersonell";
featureFive_title: string="Selbstbewusst-Ambitioniert";
featureSix_title: string="Fleißig-Diszipliniert";
value = 7; // Example value
maxValue = 10;
percentage = 0;
scaleValues = Array.from({ length: 10 }, (_, i) => i + 1);

ngOnInit(): void {
  this.updateProgress();
}

updateProgress(): void {
  this.percentage = (this.value / this.maxValue) * 100;
}

}
