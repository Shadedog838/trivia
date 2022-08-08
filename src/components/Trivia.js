import React from "react";
import Select from "./common/Select";
import DifficultySelect from "./common/DifficultySelect";
import Input from "./common/Input";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Trivia() {
  const navigate = useNavigate();
  const [triviaCount, setTriviaCount] = React.useState("");
  const [triviaType, setTriviaType] = React.useState("");
  const [triviaDifficulty, setTriviaDifficulty] = React.useState("");
  const [triviaArray, setTriviaArray] = React.useState("");

  const handleChange = (event) => {
    setTriviaType(event.target.value);
  };

  const handleDifficulty = (event) => {
    setTriviaDifficulty(event.target.value);
  };

  const getTrivia = () => {
    axios
      .get(
        `https://opentdb.com/api.php?amount=${triviaCount}&difficulty=${triviaDifficulty}&category=${triviaType}`
      )
      .then((response) => {
        setTriviaArray(response.data.results);
        navigate("/play", {
          state: {
            triviaData: response.data.results,
            triviaCount: triviaCount
          }
        });
      });
  };
  return (
    <div className="trivia-main">
      <h1>Trivia</h1>

      <Input triviaCount={triviaCount} setTriviaCount={setTriviaCount} />
      <Select triviaType={triviaType} handleChange={handleChange} />
      <DifficultySelect
        triviaDifficulty={triviaDifficulty}
        handleDifficulty={handleDifficulty}
      />
      <Button onClick={getTrivia} variant="contained" style={{ marginTop: 10 }}>
        Get Trivia Questions
      </Button>
    </div>
  );
}
