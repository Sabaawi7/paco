import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rollenauswahl',
  standalone: true,
  imports: [RouterOutlet, NgFor, CommonModule, FormsModule],
  templateUrl: './rollenauswahl.component.html',
  styleUrl: './rollenauswahl.component.scss'
})
export class RollenauswahlComponent {

 


  selectedRole: string | undefined; // Die ausgewählte Rolle
  roles: string[] = ['SuperAdmin', 'InstitutionsAdmin', 'OtherRole']; // Liste der verfügbaren Rollen

  constructor(private router: Router) {}

  onSubmit() {
    if (this.selectedRole=== 'SuperAdmin'){
      this.router.navigate(['/paco/superadmin.com'], { state: { role: this.selectedRole } });
    } 
    else if (this.selectedRole === 'InstitutionsAdmin') {
      this.router.navigate(['/paco/instadmin.com'], { state: { role: this.selectedRole } });
    } else {
      console.log('Regular user selected');
    }
  }
  

}
