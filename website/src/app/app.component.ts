import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GastUIComponent } from './gast-ui/gast-ui.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GastUIComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'website';
}
