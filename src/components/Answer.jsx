import React, { Component } from "react";

class Answer extends Component {
  checkAnswer() {
    if (this.props.correctAnswer) {
      alert("Answer is correct.");
    } else {
      alert("Answer is incorrect");
    }
    this.props.nextQuestionFn();
  }

  render() {
    return (
      <div className="answer">
        <button onClick={() => this.checkAnswer()}>
          {this.props.answerOne}
        </button>
      </div>
    );
  }
}

export default Answer;
