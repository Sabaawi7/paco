import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationsbarComponent } from './navigationsbar/navigationsbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationsbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'website';
}
