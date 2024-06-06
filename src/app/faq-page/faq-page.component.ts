import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [MaterialModule, NavigationBarComponent, NgFor],
  templateUrl: './faq-page.component.html',
  styleUrl: './faq-page.component.scss'
})
export class FaqPageComponent {
  
  faqs = [
    {
      question: 'Lorem ipsum dolor sit amet?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.'
    },
    {
      question: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?',
      answer: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      question: 'Quis autem vel eum iure reprehenderit?',
      answer: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.'
    },
    {
      question: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur?',
      answer: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    },
    {
      question: 'Ut enim ad minima veniam, quis nostrum exercitationem?',
      answer: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
    }
  ];
}
