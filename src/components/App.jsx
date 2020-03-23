import React, { Component } from "react";
import "../css/App.css";
// import components
import Question from "./Question";
import Answer from "./Answer";
// import QuestionData from './questionData.js';
import { buildFirebase, getRandomQuestion } from "../clients/firebase.js";

class App extends Component {
  bindData(data) {
    const firebasequestions = data.val();
    const current = getRandomQuestion(firebasequestions);

    this.setState({ questions: firebasequestions, current_question: current });

    console.log(firebasequestions);
    // Do something with the questions
  }
  constructor(props) {
    super(props);
    this.state = {
      questions: null,
      current_question: null,
      current_choices: null
    };

    var database = buildFirebase();
    var databaseRef = database.ref("/questions");
    databaseRef.once("value").then(data => this.bindData(data));

    this.nextQuestion = this.nextQuestion.bind(this);
  }

  nextQuestion() {
    let newQuestion = getRandomQuestion(this.state.questions);
    this.setState({ current_question: newQuestion });
  }
  // state = {}
  // call firebase
  // put firebase data into state

  render() {
    if (this.state.current_question === null) {
      return <div>Loading</div>;
    } else {
      return (
        <div className="app">
          {/* <QuestionData /> */}
          Trivia!
          <Question question={this.state.current_question.question_text} />
          <Answer
            answerOne={this.state.current_question.choices[0]}
            correctAnswer={
              this.state.current_question.correct_choice_index === 0
            }
            nextQuestionFn={this.nextQuestion}
          />
          <Answer
            answerOne={this.state.current_question.choices[1]}
            correctAnswer={
              this.state.current_question.correct_choice_index === 1
            }
            nextQuestionFn={this.nextQuestion}
          />
          <Answer
            answerOne={this.state.current_question.choices[2]}
            correctAnswer={
              this.state.current_question.correct_choice_index === 2
            }
            nextQuestionFn={this.nextQuestion}
          />
          <Answer
            answerOne={this.state.current_question.choices[3]}
            correctAnswer={
              this.state.current_question.correct_choice_index === 3
            }
            nextQuestionFn={this.nextQuestion}
          />
        </div>
      );
    }
  }
}

export default App;
