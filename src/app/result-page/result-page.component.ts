import { Component } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { UserCredentialsComponent } from './user-credentials/user-credentials.component';
import { GraphicalAnalysisComponent } from './graphical-analysis/graphical-analysis.component';
import {MatTabsModule} from '@angular/material/tabs';
@Component({
  selector: 'app-result-page',
  standalone: true,
  imports: [NavigationBarComponent, UserCredentialsComponent, GraphicalAnalysisComponent, MatTabsModule],
  templateUrl: './result-page.component.html',
  styleUrl: './result-page.component.scss'
})
export class ResultPageComponent {

}
