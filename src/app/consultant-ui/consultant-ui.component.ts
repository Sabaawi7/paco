import { Component } from '@angular/core';
import { NavigationsbarComponent } from '../navigationsbar/navigationsbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
@Component({
  selector: 'app-consultant-ui',
  standalone: true,
  imports: [NavigationsbarComponent, SideNavComponent, MainDashboardComponent],
  templateUrl: './consultant-ui.component.html',
  styleUrl: './consultant-ui.component.scss'
})
export class ConsultantUIComponent {

}
