import React from "react";
import Select from "./common/Select";
import DifficultySelect from "./common/DifficultySelect";
import Input from "./common/Input";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Trivia() {
  const navigate = useNavigate();
  const [triviaCount, setTriviaCount] = React.useState("");
  const [triviaType, setTriviaType] = React.useState("");
  const [triviaDifficulty, setTriviaDifficulty] = React.useState("");
  const [playerName, setPlayerName] = React.useState("");

  const handleChange = (event) => {
    setTriviaType(event.target.value);
  };

  const handleDifficulty = (event) => {
    setTriviaDifficulty(event.target.value);
  };

  const getPlayerName = (value) => {
    setPlayerName(value);
    localStorage.setItem("Playername", value);
  };

  const getTrivia = () => {
    if(!playerName || triviaCount === "") {
      toast.error(`Please Enter the Player's Name And Number of Question`);
    } else {
    axios
      .get(
        `https://opentdb.com/api.php?amount=${triviaCount}&difficulty=${triviaDifficulty}&category=${triviaType}`
      )
      .then((response) => {
        navigate("/play", {
          state: {
            triviaData: response.data.results,
            triviaCount: triviaCount,
            triviaType: triviaType,
            triviaDifficulty: triviaDifficulty,
          },
        });
      });
    }
  };
  return (
    <div className="trivia-main">
      <ToastContainer />
      <h1>Trivia</h1>
      <TextField
        fullWidth
        className="input-box"
        id="outlined-basic"
        label="Player Name"
        variant="outlined"
        style={{ marginBottom: 20 }}
        value={playerName}
        onChange={(event) => getPlayerName(event.target.value)}
      />
      <Input triviaCount={triviaCount} setTriviaCount={setTriviaCount} />
      <Select triviaType={triviaType} handleChange={handleChange} />
      <DifficultySelect
        triviaDifficulty={triviaDifficulty}
        handleDifficulty={handleDifficulty}
      />
      <Button
        onClick={getTrivia}
        variant="contained"
        style={{ marginTop: 10, marginright: 5 }}
      >
        Get Trivia Questions
      </Button>

      <Button
        onClick={() => navigate('/results')}
        variant="contained"
        style={{ marginTop: 10, marginLeft: 5 }}
      >
        Check Leaderboard
      </Button>
    </div>
  );
}
