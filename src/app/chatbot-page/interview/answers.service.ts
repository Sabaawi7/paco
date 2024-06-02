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


  //Speichert nur eine Antwort, wird für single choice, Text, dropdown verwendet
  saveOnlyOneAnswer(questionNumber: any, answer: any) {
    let questionData = this.answerdata.find(q => q.question === questionNumber);

    if (!questionData) {
      questionData = { question: questionNumber, answers: [] };
      this.answerdata.push(questionData);
    }

    questionData.answers[0] = answer;
    console.log(this.answerdata);
  }



  deleteAnswer(questionNumber: any, answer: any) {
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



  //Gibt die ausgewählten Antworten zu einer Frage zurück
  getAnswers(questionNumber: any) {
    let questionData = this.answerdata.find(q => q.question === questionNumber);
    if (!questionData) {
      return [];
    }
    return questionData.answers;
  }
}