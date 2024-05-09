import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SuperadminComponent } from '../admin-page/superadmin/superadmin.component';
import { InstAdminComponent } from './inst-admin/inst-admin.component';
import { NgIf, CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [SuperadminComponent,InstAdminComponent,NgIf,CommonModule],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss'
})
export class AdminPageComponent implements OnInit{
  selectedRole: string | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      // Die ausgewählte Rolle wird aus dem Zustand des Router-Objekts abgerufen
    this.selectedRole = history.state.role;
  }
}
