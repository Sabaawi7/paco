import { Component } from '@angular/core';

@Component({
  selector: 'app-user-credentials',
  standalone: true,
  imports: [],
  templateUrl: './user-credentials.component.html',
  styleUrl: './user-credentials.component.scss'
})
export class UserCredentialsComponent {
name: string= "Max Muster";
email: string= "maxmuster@gmail.com";
status: string="Student";
date: string="31/05/2024";
time: string="15:15";
order: string="Wiederhole Interview";

}
