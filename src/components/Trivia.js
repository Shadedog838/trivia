import React from "react";
import Select from "./common/Select";
import DifficultySelect from './common/DifficultySelect';
import Input from "./common/Input";

export default function Trivia() {
  const [triviaType, setTriviaType] = React.useState('');

  function handleChange(event) {
    setTriviaType(event.target.value);
  };
  return (
    <div className="trivia-main">
      <h1>Trivia</h1>

      <Input />
      <Select triviaType={triviaType} handleChange={handleChange} />
      <DifficultySelect triviaType={triviaType} handleChange={handleChange} />
    </div>
  );
}
