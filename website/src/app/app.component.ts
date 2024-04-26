import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
 

  title = 'website';

  selectedRole: string | undefined; // Die ausgewählte Rolle
  roles: string[] = ['SuperAdmin', 'InstitutionsAdmin', 'OtherRole']; // Liste der verfügbaren Rollen

  onRoleChange() {
    // Hier kannst du die Logik hinzufügen, um auf die Auswahl zu reagieren
    // z.B. Navigation zu der entsprechenden Admin-Seite basierend auf der ausgewählten Rolle
    console.log('Selected Role:', this.selectedRole);
    // Beispiel: Navigation zu paco/admin.com
    if (this.selectedRole === 'SuperAdmin' || this.selectedRole === 'InstitutionsAdmin') {
      // Hier kannst du den Code ausführen, der für Administratoren benötigt wird
      console.log('Administrator selected');
    } else {
      // Hier kannst du den Code ausführen, der für andere Benutzer benötigt wird
      console.log('Regular user selected');
    }
  }

}
