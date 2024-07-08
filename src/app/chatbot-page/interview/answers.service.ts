import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AnswersService {

  private answerdata: any[] = [];
  allSelectedAnswers: any[] = [];

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
  

saveAnswer2(questionNumber: any, answer: any,allSelectedAnswers:any[]){
  allSelectedAnswers.push(answer);
}

deleteAnswer2(questionNumber: any, answer: any,allSelectedAnswers:any[]){
  const answerIndex = allSelectedAnswers.indexOf(answer);
  if (answerIndex >= 0) {
    allSelectedAnswers.splice(answerIndex, 1);
  }
}




}