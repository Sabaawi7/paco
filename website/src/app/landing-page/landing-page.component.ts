import { Component } from '@angular/core';
import { NavigationsbarComponent } from "../navigationsbar/navigationsbar.component";

@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.scss',
    imports: [NavigationsbarComponent]
})
export class LandingPageComponent {

}
