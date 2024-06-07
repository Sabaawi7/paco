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
import { FaqPageComponent } from './faq-page/faq-page.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { LoadingbarPageComponent } from './loadingbar-page/loadingbar-page.component';
import { PersonalquestionPageComponent } from './personalquestion-page/personalquestion-page.component';

export const routes: Routes = [

    { path: '', component: LandingPageComponent},
    { path: 'login', component: LoginPageComponent },
    { path: 'role', component: RoleselectionComponent}, 
    { path: 'admin', component: AdminPageComponent }, 
    { path: 'consultant', component: ConsultantPageComponent}, 
    { path: 'chat', component: ChatbotPageComponent}, 
    { path: 'contact', component: ContactPageComponent},
    { path: 'impressum', component: ImpressumPageComponent},
    { path: 'faq', component: FaqPageComponent},
    { path: 'result', component: ResultPageComponent },
    { path: 'impressum', component: ImpressumPageComponent}, //Pfad für Impressum seite
    { path: 'loading', component: LoadingbarPageComponent},
    { path: 'personalquestion', component: PersonalquestionPageComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

};