import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [MaterialModule, NavigationBarComponent, NgFor],
  templateUrl: './faq-page.component.html',
  styleUrl: './faq-page.component.scss'
})
export class FaqPageComponent {
  faqs = [
    {
      question: 'Was ist PACO?',
      answer: 'PACO ist ein KI-basierter Studienberater. Im Gegensatz zu gängigen Onliine-Studienorientierungsseiten folgt PACO keinem festen Fragenkatalog, sondern generiert anhand der bereits beantworteten Fragen auf Sie individuell zugeschnittene Fragen, die sie auch im Freitext beantworten können. Das ermöglicht eine schnellere, effizientere und genauere Ermittlung von passenden Studiengängen.'
    },
    {
      question: 'Wie Funktioniert PACO?',
      answer: 'PACO verschafft sich zunächst anhand weniger festgeschriebener Fragen einen Überblick über ihre Eigenschaften und Interessen. Anschließend generiert PACO individuell zugeschnittene Fragen, die Sie im Freitext beantworten. Je nach Inhalt und Ausführlichkeit der Antwort kann PACO auch noch Fragen zu Details stellen. Im nächsten Schritt erhalten Sie einen von PACO erstellten Ergebnisbericht der die Ergebnisse zusammenfasst.'
    },
    {
      question: 'Was steht im Ergebnisbericht?',
      answer: 'Der wichtigste Part wird ihnen ganz oben auf der Ergebnisseite angezeigt. Dort finden Sie eine verschriftlichte Analyse ihrer Angaben. Sollten sie Studiengangswünsche angegeben haben, wird ihnen ebenfalls begründet mitgeteilt wie gut diese Studiengänge zu ihnen passen. Darunter finden Sie ein tabellarisch aufgelistetes Fitting auf Studiengänge. Ebenfalls finden Sie eine Einschätzung zu den Fähigkeitsgebieten vor, aus denen Studiengänge zu ihnen passen könnten.'
    },
    {
      question: 'Sind die Ergebnisse verbindlich?',
      answer: 'Nein, die Ergebnisse sind nicht verbindlich. Sie können sich auch weiterhin ohne Nachteile auf Studiengänge bewerben, die PACO für weniger passend hält.'
    },
    {
      question: 'Wer sieht meine Ergebnisse?',
      answer: 'Datenschutz ist für uns äußerst wichtig. Ihre Ergebnisse können deshalb nur Sie sehen, außer sie geben ihren Token an andere Personen weiter.'
    },
    {
      question: 'Was ist ein Token?',
      answer: 'Ihr persönlicher Token ist eine einmalig erstellte Aneinanderreihung von Zeichen, die zur Identifikation genutzt wird. Wenn sie ihren Token anderen mitteilen, zum Beispiel der Studienberatung, dann haben diese auch Zugriff auf ihre Ergebnisse.'
    },
    {
      question: 'Ich habe meinen Token vergessen - was soll ich tun?',
      answer: 'Wir haben leider keine Möglichkeit ihren Token wiederherzustellen, da dieser Anonym vergeben wird. Wir empfehlen ihnen einen neuen Durchlauf zu starten.'
    },
    {
      question: 'Ich bin mir immer noch unsicher, was ich Studieren soll, was kann ich tun?',
      answer: 'PACO hat nicht den Anspruch ihnen die Entscheidung abzunehmen oder eine vollständige Fähigkeiten-und Interessenanalyse durchzuführen. Er ist aber ein guter Anfang, der die Entscheidungsfindung vereinfachen und beschleunigen kann. Sollten Sie alleine zu keiner Entscheidung kommen, mit der Sie sich wohl fühlen, empfehlen wir ihnen einen Termin bei der Studienberatung der Universität zu buchen (KONTAKT EINFÜGEN) und bei der Buchung ihren Token freizugeben. Die Studienberatung kann dann ihre Ergebnisse einsehen uns sich entsprechend auf den Termin vorbereiten.'
    }
  ];
}
