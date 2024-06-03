import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
@Component({
  selector: 'app-user-credentials',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet, MatTabsModule],
  templateUrl: './user-credentials.component.html',
  styleUrl: './user-credentials.component.scss'
})
export class UserCredentialsComponent {
  title:string="Session report";
name: string= "Max Muster";
email: string= "maxmuster@gmail.com";
status: string="Student";
date: string="31/05/2024";
time: string="15:15";
order: string="Wiederhole Interview";



}
