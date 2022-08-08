import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "./common/Card";

export default function PlayTrivia() {
  const { state } = useLocation();
  const [questionCounter, setQuestionCounter] = useState(1);
  const [totalQuestions, setTotalQuestions] = useState(1);
  const [questionsArray, setQuestionsArray] = useState([]);
  React.useEffect(() => {
    const { triviaData, triviaCount } = state;
    setTotalQuestions(triviaCount);
    setQuestionsArray(triviaData);
  }, []);

  const prevQuestion = () => {
    if (questionCounter > 0) {
      setQuestionCounter(questionCounter - 1);
    }
  };

  const nextQuestion = () => {
    if (questionCounter < totalQuestions) {
      setQuestionCounter(questionCounter + 1);
    }
  };
  return (
    <div>
      <h1>Play Trivia</h1>
      <Button
        onClick={prevQuestion}
        variant="contained"
        style={{ marginRight: 10 }}
        disabled={questionCounter > 1 ? false : true}
      >
        Previous Question
      </Button>
      <Button
        onClick={nextQuestion}
        variant="contained"
        style={{ marginLeft: 10 }}
        disabled={questionCounter > totalQuestions - 1 ? true : false}
      >
        Next Question
      </Button>

      <h2>Question Number: {questionCounter}</h2>

      <Card questionsArray={questionsArray} questionCounter={questionCounter} />
    </div>
  );
}
