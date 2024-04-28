import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-roleselection',
  standalone: true,
  imports: [RouterOutlet, NgFor, CommonModule, FormsModule],
  templateUrl: './roleselection.component.html',
  styleUrl: './roleselection.component.scss'
})
export class RoleselectionComponent implements OnInit{
  selectedRole: string | undefined; // Die ausgewählte Rolle
  roles: string[] = ['SuperAdmin', 'InstitutionsAdmin', 'OtherRole']; // Liste der verfügbaren Rollen

  constructor(private router: Router) {}

  onSubmit() {
    // Überprüfen, ob die ausgewählte Rolle 'SuperAdmin' ist
    if (this.selectedRole === 'SuperAdmin') {
      // Navigiere zur '/admin.com' und übergebe die Rolle 'SuperAdmin' als Zustand
      this.router.navigate(['/admin.com'], { state: { role: 'SuperAdmin' } });
    } 
    // Überprüfen, ob die ausgewählte Rolle 'InstitutionsAdmin' ist
    else if (this.selectedRole === 'InstitutionsAdmin') {
      // Navigiere zur '/admin.com' und übergebe die Rolle 'InstitutionsAdmin' als Zustand
      this.router.navigate(['/admin.com'], { state: { role: 'InstitutionsAdmin' } });
    } 
    // Wenn die ausgewählte Rolle keine der oben genannten ist
    else {
      console.log('Regular user selected');
    }
  }
  
  ngOnInit() {
  }



}
