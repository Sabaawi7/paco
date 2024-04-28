
  import { NgModule } from '@angular/core';
  import { Routes, RouterModule } from '@angular/router';
  import { AppComponent } from './app.component';
  import { AdminComponent } from './admin/admin.component';

  import { RoleselectionComponent } from './roleselection/roleselection.component';
  export const routes: Routes = [
    { path: '', component: AppComponent}, //bestimmt welche Komponente angezeigt wird als Standard wenn man die Webseite als erstes startet;
    { path: 'role.com', component: RoleselectionComponent}, // Rollenauswahlseite, Puffer um zu testen;
    { path: 'admin.com', component: AdminComponent }, // Pfad für die Admin-Komponente bleibt unverändert, zeigt entweder Superadmin oder Instadmin Seite;
   
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }