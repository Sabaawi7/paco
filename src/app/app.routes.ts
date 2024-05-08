import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgModule } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminComponent } from './admin/admin.component';
import { RoleselectionComponent } from './roleselection/roleselection.component';
import { GastUIComponent } from './gast-ui/gast-ui.component';
import { ConsultantUIComponent } from './consultant-ui/consultant-ui.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ImpressumPageComponent } from './impressum-page/impressum-page.component';
export const routes: Routes = [
    { path: '', component: LandingPageComponent},
    { path: 'login', component: LoginPageComponent },
    { path: 'role', component: RoleselectionComponent}, // Rollenauswahlseite, Puffer um zu testen;
    { path: 'admin', component: AdminComponent }, // Pfad für die Admin-Komponente bleibt unverändert, zeigt entweder Superadmin oder Instadmin Seite;
    { path: 'consultant', component: ConsultantUIComponent}, //Pfad für Chat seite
    { path: 'chat', component: GastUIComponent}, //Pfad für Chat seite
    { path: 'contact', component: ContactPageComponent}, //Pfad für Chat seite
    { path: 'impressum', component: ImpressumPageComponent} //Pfad für Chat seite

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {};




