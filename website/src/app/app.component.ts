import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
 

  title = 'website';

  selectedRole: string | undefined; // Die ausgewählte Rolle
  roles: string[] = ['SuperAdmin', 'InstitutionsAdmin', 'OtherRole']; // Liste der verfügbaren Rollen




  constructor(private router: Router) {}


    onSubmit() {
     // Überprüfe, ob eine der Admin-Rollen ausgewählt wurde
     if (this.selectedRole === 'SuperAdmin' || this.selectedRole === 'InstitutionsAdmin') {
      // Öffne ein neues Browserfenster zur entsprechenden Admin-Seite
      window.open('paco/admin.com', '_blank');
    } else {
      // Handle den Fall, wenn keine Admin-Rolle ausgewählt wurde
      console.log('Regular user selected');
    }
    }
  
  

}
