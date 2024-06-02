// answers.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnswersService {

  private answerdata: any[] = [];


  saveAnswer(questionNumber: any, answer: any) {
    // Suche die Frage in den Daten
    let questionData = this.answerdata.find(q => q.question === questionNumber);
    // Wenn die Frage nicht gefunden wurde, erstelle eine neue Frage
    if (!questionData) {
      questionData = { question: questionNumber, answers: [] };
      this.answerdata.push(questionData);
    }
    // Füge die Antwort zur Frage hinzu
    questionData.answers.push(answer);
    console.log(this.answerdata);
  }

  saveOnlyOneAnswer(questionNumber: any, answer: any) {
    // Suche die Frage in den Daten
    let questionData = this.answerdata.find(q => q.question === questionNumber);
    // Wenn die Frage nicht gefunden wurde, erstelle eine neue Frage
    if (!questionData) {
      questionData = { question: questionNumber, answers: [] };
      this.answerdata.push(questionData);
    }
    // Füge die Antwort zur Frage hinzu
    questionData.answers[0] = answer;
    console.log(this.answerdata);
  }

  deleteAnswer(questionNumber: any, answer: any) {
    // Suche die Frage in den Daten
    let questionData = this.answerdata.find(q => q.question === questionNumber);

    // Wenn die Frage nicht gefunden wurde, breche ab
    if (!questionData) {
      return;
    }

    // Lösche die Antwort aus der Frage
    const answerIndex = questionData.answers.indexOf(answer);
    if (answerIndex >= 0) {
      questionData.answers.splice(answerIndex, 1);
    }

    // Wenn keine Antworten mehr vorhanden sind, lösche die Frage
    if (questionData.answers.length === 0) {
      const questionIndex = this.answerdata.indexOf(questionData);
      this.answerdata.splice(questionIndex, 1);
    }
  }

  //wird jetzt als ganzes array zurückgegeben, mal sehen ob sinnvoller einzeln ist später.
  //methode bekommt questionNumber und gibt die Antworten zurück
  getAnswers(questionNumber: any) {
    // Suche die Frage in den Daten
    let questionData = this.answerdata.find(q => q.question === questionNumber);

    // Wenn die Frage nicht gefunden wurde, gib ein leeres Array zurück
    if (!questionData) {
      return [];
    }

    // Gib die Antworten zur Frage zurück
    return questionData.answers;

  }
}