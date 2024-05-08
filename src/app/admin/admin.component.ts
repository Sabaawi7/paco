import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { InstadminComponent } from './instadmin/instadmin.component';
import { NgIf, CommonModule } from '@angular/common';
@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [SuperadminComponent,InstadminComponent,NgIf,CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {
  selectedRole: string | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      // Die ausgewählte Rolle wird aus dem Zustand des Router-Objekts abgerufen
    this.selectedRole = history.state.role;
  }

}
