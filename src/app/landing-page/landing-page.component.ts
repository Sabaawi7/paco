import { Component, OnInit } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { CookieBannerComponent } from '../cookie-banner/cookie-banner.component';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../material/material.module';

@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.scss',
    imports: [NavigationBarComponent,CookieBannerComponent,CommonModule, RouterLink, RouterLinkActive, RouterOutlet,MaterialModule],
  
  
})

export class LandingPageComponent implements OnInit{

  /**
   * 
Text on the page and the translation;
  */
 
  //default values;
  title_h1: string = '';
  title_p: string = ''; 
  kasten1_h3:string='';
  kasten1_p:string='';
  kasten2_h3:string='';
  kasten2_p:string='';
  kasten3_h3:string='';
  kasten3_p:string='';


  ngOnInit(): void {

     const selectedLang = localStorage.getItem('lang'); 
     if (selectedLang === 'de' || selectedLang == null) {
      this.title_h1 = 'Willkommen bei PACO';
      this.title_p = 'Wir helfen Ihnen, Ihre Studienwahl zu treffen.';
      this.kasten1_h3 = 'Die Wahl des richtigen Studiums';
      this.kasten1_p = 'Soll ich studieren, und wenn ja, was und wo? Diese Entscheidung wirkt sich so stark wie wenige andere auf den Rest unseres Lebens aus und die Antwort ist oft unklar. Doch wie kann man sich sicher sein, dass man das richtige Fach wählt, und welche Studienfächer gibt es überhaupt? Professionelle Studienberatungen können sie bei dieser Entscheidung unterstützen, allerdings sind die Barrieren oft hoch und die Verfügbarkeiten gering. PACO unterstützt Sie deshalb unverbindlich, persönlich und professionell, durch eine individuelle Analyse ihrer Interessen, Vorstellungen und Berufs-/Zukunftswünsche. PACOs Ergebnisse können ihnen eine gute Idee von möglichen Studiengängen geben. Dennoch möchten wir sie darauf hinweisen, dass stand jetzt kein online Tool eine persönliche Studienberatung ersetzen kann.';
      this.kasten2_h3 = 'Was PACO besonders macht';
      this.kasten2_p = 'Kurz gesagt: PACO ist schnell, individuell und präzise. Anders als andere gängige Studienauswahltests funktioniert PACO dynamisch. Das heißt, sie müssen sich nicht durch unzählige, für sie persönlich vielleicht nicht relevante Themenabfragen klicken, da PACO bereits nach wenigen Antworten von ihnen eine Idee hat, in welche Richtung ihre Interessen gehen. Außerdem stellt PACO ihnen personalisierte Fragen, die anhand ihrer vorherigen Antworten on the spot generiert werden. Dadurch wird ein hohes Level an Individualität und Effizienz erreicht, ein Durchlauf dauert nicht länger als wenige Minuten.';
      this.kasten3_h3 = 'Was uns Motiviert';
      this.kasten3_p = 'Viel zu viele Studierende brechen ihr Studium wieder ab, je nach Studiengang mehr als 2/3. Der Hauptgrund hierfür ist die Unzufriedenheit mit den Inhalten des Studiums. Ein Studienabbruch bringt viele zum Zweifeln, ob die eigenen Fähigkeiten ausreichen, oder man Entscheidungen hätte anders treffen sollen. Dabei haben sich die meisten nur nicht ausreichend über die Studieninhalte informiert. Eine gute Lernerfahrung beginnt schon vor der Einschreibung. PACO hat das Ziel, ihnen eine realistische Einschätzung zu passenden Studiengängen zu geben und Vergleiche möglich zu machen, um ihren Entscheidungsprozess bestmöglich zu unterstützen und dadurch die Studienabbrecherquote zu senken.';
  } else if (selectedLang === 'en') {
      this.title_h1 = 'Welcome to PACO';
      this.title_p = 'We will help you choose your major.';
      this.kasten1_h3 = 'Choosing the Right Study Program';
      this.kasten1_p = 'Should I study, and if so, what and where? This decision affects the rest of our lives as few others do, and the answer is often unclear. But how can you be sure that you are choosing the right subject, and what study programs are there anyway? Professional study consultations can support you in this decision, but the barriers are often high and availability is low. PACO supports you therefore non-binding, personal, and professional, through an individual analysis of your interests, ideas, and career/future wishes. PACO\'s results can give you a good idea of possible study programs. However, we would like to point out that as of now, no online tool can replace personal study advice.';
      this.kasten2_h3 = 'What Makes PACO Special';
      this.kasten2_p = 'In short: PACO is fast, individual, and precise. Unlike other common study selection tests, PACO works dynamically. This means you do not have to click through countless topics that may not be relevant to you personally, as PACO already has an idea of which direction your interests are going after just a few answers. PACO also asks you personalized questions generated on the spot based on your previous answers. This achieves a high level of individuality and efficiency, with a run-through taking no longer than a few minutes.';
      this.kasten3_h3 = 'What Motivates Us';
      this.kasten3_p = 'Far too many students drop out of their studies, depending on the study program more than 2/3. The main reason for this is dissatisfaction with the content of the study program. Dropping out brings many to question whether their abilities are sufficient or if they should have made different decisions. Most of them just did not inform themselves sufficiently about the study content. A good learning experience begins even before enrollment. PACO aims to give you a realistic assessment of suitable study programs and make comparisons to support your decision-making process as best as possible and thus reduce the dropout rate.';
  }
  

   
  


  }

   
   showCookieNotification = true;


   onClose(): void {

     this.showCookieNotification = false;
   }
 

   onAccept(): void {
    
     this.onClose();
   
   }
 
 
   onDecline(): void {
    
     this.onClose();
     
   }
}