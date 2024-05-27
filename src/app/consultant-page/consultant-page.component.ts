import { Component } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainDashboardComponent } from '../consultant-page/main-dashboard/main-dashboard.component';

@Component({
  selector: 'app-consultant-page',
  standalone: true,
  imports: [NavigationBarComponent, SideNavComponent, MainDashboardComponent],
  templateUrl: './consultant-page.component.html',
  styleUrl: './consultant-page.component.scss'
})
export class ConsultantPageComponent {

}