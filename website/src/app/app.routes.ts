

import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    { path: 'paco/admin.com', component: AdminComponent },
   //{ path: 'paco.com', component: AppComponent },
   { path: '', redirectTo: 'paco.com', pathMatch: 'full' } // Standardroute
];
