import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "./common/Card";
import { database } from "../firebase-config";
import { addDoc, collection } from "firebase/firestore";
export default function PlayTrivia() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [questionCounter, setQuestionCounter] = useState(1);
  const [totalQuestions, setTotalQuestions] = useState(1);
  const [questionsArray, setQuestionsArray] = useState([]);
  const [triviaType, setTriviaType] = useState("");
  const [triviDifficulty, setTriviaDifficulty] = useState("");
  const [result, setResult] = useState(0);
  const [playerName, setPlayerName] = useState("");
  const databaseRef = collection(database, "Leader Board");
  React.useEffect(() => {
    const { triviaData, triviaCount, triviaType, triviaDifficulty } = state;
    setTotalQuestions(triviaCount);
    setQuestionsArray(triviaData);
    setTriviaType(triviaType);
    setTriviaDifficulty(triviaDifficulty);
    setPlayerName(localStorage.getItem("Playername"));
  }, []);

  const nextQuestion = () => {
    if (questionCounter < totalQuestions) {
      setQuestionCounter(questionCounter + 1);
    } else if(questionCounter == totalQuestions) {
      submitTrivia();
    }
  };

  const submitTrivia = () => {
    addDoc(databaseRef, {
      playerName: playerName,
      difficulty: triviDifficulty,
      category: questionsArray[0].category,
      finalScore: result
    }).then(() => {
      navigate("/results", {
        state: {
          finalResults: result,
        },
      });
    });
  };
  return (
    <div>
      <h1>Play Trivia</h1>
      <h1>{result}</h1>

      <h2>Question Number: {questionCounter}</h2>
      <h3>Question Difficulty: {triviDifficulty}</h3>

      <Card
        questionsArray={questionsArray}
        questionCounter={questionCounter}
        nextQuestion={nextQuestion}
        setResult={setResult}
        result={result}
      />
    </div>
  );
}
