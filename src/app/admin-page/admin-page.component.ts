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

  //The selected role will be called by the state of the router object;
   ngOnInit() {
     
    this.selectedRole = history.state.role;
  }
  
}
