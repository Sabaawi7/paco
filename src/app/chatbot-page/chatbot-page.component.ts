import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgIf } from '@angular/common';
import { NgClass } from '@angular/common';
import  interviewJson from '../../assets/interview.json';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-chatbot-page',
  standalone: true,
  imports: [NgIf, NgClass, NavigationBarComponent],
  templateUrl: './chatbot-page.component.html',
  styleUrl: './chatbot-page.component.scss'
})
export class ChatbotPageComponent implements OnInit {
  answeredQuestions = 3;
  totalQuestions = 10;
  progressValue!: number;

  msgerForm!: HTMLElement;
  msgerInput!: HTMLInputElement;
  msgerChat!: HTMLElement;
  

  BOT_MSGS = [
    "Hi, how are you?",
    "Ohh... I can't understand what you trying to say. Sorry!",
    "I like to play games... But I don't know how to play!",
    "Sorry if my answers are not relevant. :))",
    "I feel sleepy! :("
  ];

  BOT_IMG = "https://media.istockphoto.com/id/928709688/vector/smiling-man-icon.jpg?s=612x612&w=0&k=20&c=WfB6FVKJ37M1kzS8VNNr9HYVgfUOZahYfFZuaky7Yl0=";
  PERSON_IMG = "https://360collegereview.com/wp-content/uploads/2022/08/Profile-FEMALE-ICON-TEAM.png";
  BOT_NAME = "PACO";
  PERSON_NAME = "Me";
  accepted_privacy_and_agbs = false;


  ngOnInit(): void {
    /**
     * Die JSON Datei wurde oben importiert über den Pfad im Projekt. Die Datei wurde in der
     * Variable "interviewJson" gespeichert. Durch diese Variable kann man auf den Inhalt
     * der JSON Datei zugreifen und es nutzen um das Interview zu gestalten.
     * Die Attribute der JSON sind : 
     * "question" (String); 
     * "answers" (Array an Antwortmöglichkeiten) answers=null, falls Schreibantwort gefordert ist ;
     * "answer_type" (String) ob multiple_choice, single_choice, writing oder dropdown ; 
     * "subtext_info" dieses Attribut haben nur writing-fragen, wo weitere infos gegeben sind.
     */
    console.log(interviewJson);
    console.log(interviewJson.length);
    console.log(interviewJson[0].answers)
   

  
      
    this.generateRandomToken();
    this.updateProgressValue();
  
    
    const msgerFormElement = document.querySelector<HTMLElement>(".msger-inputarea");
    this.msgerForm = msgerFormElement ?? document.createElement('div');
  
    const msgerInputElement = document.querySelector<HTMLInputElement>(".msger-input");
    this.msgerInput = msgerInputElement ?? document.createElement('input');
  
    const msgerChatElement = document.querySelector<HTMLElement>(".msger-chat");
    this.msgerChat = msgerChatElement ?? document.createElement('div');
  
  
    this.msgerForm.addEventListener("submit", (event: Event) => {
      event.preventDefault();

      const msgText = this.msgerInput.value;
      if (!msgText) return;

      this.appendMessage(this.PERSON_NAME, this.PERSON_IMG, "right", msgText);
      this.msgerInput.value = "";

      this.botResponse();
    });
  }

  appendMessage(name: string, img: string, side: string, text: string) {
    // Simple solution for small apps
    const msgHTML = 
    `
    <div class="msg ${side}-msg" style="display: flex; align-items: flex-end; margin-bottom: 10px; ${side === 'right' ? 'flex-direction: row-reverse;' : ''}">
    <div class="msg-img" style="width: 50px; height: 50px; margin-right: 10px; background: #ddd; background-repeat: no-repeat; background-position: center; background-size: cover; border-radius: 50%; background-image: url(${img})"></div>

    <div class="msg-bubble" style="max-width: 450px; padding: 15px; border-radius: 15px; background: ${side === 'left' ? '#c4bcbc' : '#579ffb'}; color: ${side === 'left' ? '#000' : '#fff'};">
        <div class="msg-info" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <div class="msg-info-name" style="margin-right: 10px; font-weight: bold; color: ${side === 'left' ? '#000' : '#fff'};">${name}</div>
            <div class="msg-info-time" style="font-size: 0.85em;">${this.formatDate(new Date())}</div>
        </div>

        <div class="msg-text">${text}</div>
    </div>
</div>

    `;
  
    this.msgerChat.insertAdjacentHTML("beforeend", msgHTML);
    this.msgerChat.scrollTop += 500;
  }

  botResponse() {
    const r = this.random(0, this.BOT_MSGS.length - 1);
    const msgText = this.BOT_MSGS[r];
    const delay = msgText.split(" ").length * 100;

    setTimeout(() => {
      this.appendMessage(this.BOT_NAME, this.BOT_IMG, "left", msgText);
    }, delay);
  }

  formatDate(date: Date): string {
    const h = "0" + date.getHours();
    const m = "0" + date.getMinutes();
    return `${h.slice(-2)}:${m.slice(-2)}`;
  }

  random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
  generateRandomToken(): void {
    let token = self.crypto.randomUUID()
    const tokenElement = document.getElementById('token');
    if (tokenElement) {
        tokenElement.textContent = 'Token: ' + token;
    }
  }
  acceptPrivacyAndAGBs(): void {
    this.accepted_privacy_and_agbs = true;

  }
  updateProgressValue(): void {
    this.progressValue = (this.answeredQuestions / this.totalQuestions) * 100;
  }
 

}
