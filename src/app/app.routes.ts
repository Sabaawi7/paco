import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgModule } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminComponent } from './admin/admin.component';
import { RoleselectionComponent } from './roleselection/roleselection.component';
import { GastUIComponent } from './gast-ui/gast-ui.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent},
    { path: 'login', component: LoginPageComponent },
    { path: 'role', component: RoleselectionComponent}, // Rollenauswahlseite, Puffer um zu testen;
    { path: 'admin', component: AdminComponent }, // Pfad für die Admin-Komponente bleibt unverändert, zeigt entweder Superadmin oder Instadmin Seite;
    { path: 'chat', component: GastUIComponent} //Pfad für Chat seite
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {};



