import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-navigationsbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './navigationsbar.component.html',
  styleUrl: './navigationsbar.component.scss'
})
export class NavigationsbarComponent {

}
