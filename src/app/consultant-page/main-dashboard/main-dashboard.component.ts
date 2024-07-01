import { Component } from '@angular/core';
import { TokensuchePageComponent } from '../tokensuche-page/tokensuche-page.component';

@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [ TokensuchePageComponent ],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.scss'
})
export class MainDashboardComponent {

}