
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { RollenauswahlComponent } from './rollenauswahl/rollenauswahl.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { InstadminComponent } from './instadmin/instadmin.component';

export const routes: Routes = [
  { path: '', component: RollenauswahlComponent}, //bestimmt welche Komponente angezeigt wird als Standard wenn man die Webseite als erstes startet;
  { path: 'paco/role.com', component: RollenauswahlComponent }, // Rollenauswahlseite, Puffer um zu testen;
  { path: 'paco/superadmin.com', component: SuperadminComponent, data: { role: 'SuperAdmin' } }, // SuperAdmin-Komponente für /paco/admin.com
  { path: 'paco/instadmin.com', component: InstadminComponent, data: { role: 'InstitutionsAdmin' } } // InstitutionsAdmin-Komponente für /paco/admin.com
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }