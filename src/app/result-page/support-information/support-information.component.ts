import { Component } from '@angular/core';
import { NgFor,NgIf } from '@angular/common';

@Component({
  selector: 'app-support-information',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './support-information.component.html',
  styleUrl: './support-information.component.scss'
})
export class SupportInformationComponent {
  features=[];
}
