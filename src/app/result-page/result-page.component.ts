import { Component } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { UserCredentialsComponent } from './user-credentials/user-credentials.component';
import { ResponseOverviewComponent } from './response-overview/response-overview.component';
import { DateAnalysisComponent } from './date-analysis/date-analysis.component';
import { SupportInformationComponent } from './support-information/support-information.component';
@Component({
  selector: 'app-result-page',
  standalone: true,
  imports: [NavigationBarComponent, UserCredentialsComponent,ResponseOverviewComponent, DateAnalysisComponent,SupportInformationComponent],
  templateUrl: './result-page.component.html',
  styleUrl: './result-page.component.scss'
})
export class ResultPageComponent {

}
