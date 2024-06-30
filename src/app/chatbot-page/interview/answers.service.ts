import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../token.service';
@Injectable({
  providedIn: 'root'
})

export class AnswersService {
/*answerdata: Dies ist das Array, in dem die Daten gespeichert werden.
Jedes Element in answerdata repräsentiert eine Frage und die dazugehörigen Antworten.
Beispiel: { question: 1, answers: ['Option A', 'Option C'] }
Hierbei wird für die Frage mit der Nummer 1 die Antworten "Option A" und "Option C" gespeichert.
*/
  private answerdata: any[] = [];

  private apiUrl = 'http://localhost:8000/api/answers'; // Hier die URL Ihrer Backend-API einfügen

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  // Methode zum Speichern von Antworten im Backend
  saveAnswersToBackend(questionType: number, questionId: number, answers: any[]): Observable<any> {
    const userid = this.tokenService.getToken(); // Hier wird die aktuelle Benutzer-ID abgerufen
    const payload = {
      userid: userid,
      question_type_id: questionType,
      question_id: questionId,
      request_type: 'post',
      dataToPost: answers
    };
    return this.http.post<any>(`${this.apiUrl}`, payload);
  }

//Stores the answer for a question;
  saveAnswer(questionNumber: any, answer: any) {

    // Search for the question in the data;
    let questionData = this.answerdata.find(q => q.question === questionNumber);

    // If the question was not found, create a new question;
    if (!questionData) {
      questionData = { question: questionNumber, answers: [] };
      this.answerdata.push(questionData);
    }
    // Add the answer to the question;
    questionData.answers.push(answer);

    console.log(this.answerdata);
  }


  
//Stores only one answer, used for single choice, text, dropdown;
  saveOnlyOneAnswer(questionNumber: any, answer: any) {

    let questionData = this.answerdata.find(q => q.question === questionNumber);

    if (!questionData) {
      questionData = { question: questionNumber, answers: [] };
      this.answerdata.push(questionData);
    }

    questionData.answers[0] = answer;
    console.log(this.answerdata);
  }


//Deletes an answer for a question;
  deleteAnswer(questionNumber: any, answer: any) {

    let questionData = this.answerdata.find(q => q.question === questionNumber);
    //If the question was not found, cancel;
    if (!questionData) {
      return;
    }
    // Delete the answer from the question;
    const answerIndex = questionData.answers.indexOf(answer);
    if (answerIndex >= 0) {
      questionData.answers.splice(answerIndex, 1);
    }
    // If there are no more answers, delete the question;
    if (questionData.answers.length === 0) {
      const questionIndex = this.answerdata.indexOf(questionData);
      this.answerdata.splice(questionIndex, 1);
    }
  }



  //Returns the selected answers to a question;
  getAnswers(questionNumber: any) {

    let questionData = this.answerdata.find(q => q.question === questionNumber);

    if (!questionData) {

      return [];
    }
    return questionData.answers;
  }
  
}