import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgModule } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { RoleselectionComponent } from './roleselection/roleselection.component';
import { ChatbotPageComponent } from './chatbot-page/chatbot-page.component';
import { ConsultantPageComponent } from './consultant-page/consultant-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ImpressumPageComponent } from './impressum-page/impressum-page.component';
import { ResultPageComponent } from './result-page/result-page.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent},
    { path: 'login', component: LoginPageComponent },
    { path: 'role', component: RoleselectionComponent}, // Rollenauswahlseite, Puffer um zu testen;
    { path: 'admin', component: AdminPageComponent }, // Pfad für die Admin-Komponente bleibt unverändert, zeigt entweder Superadmin oder Inst. Admin Seite;
    { path: 'consultant', component: ConsultantPageComponent}, //Pfad für Studienberater:in-Seite
    { path: 'chat', component: ChatbotPageComponent}, //Pfad für Chatseite
    { path: 'contact', component: ContactPageComponent}, //Pfad für Kontaktseite
    { path: 'impressum', component: ImpressumPageComponent}, //Pfad für Impressum seite
    {path: 'result', component: ResultPageComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

};