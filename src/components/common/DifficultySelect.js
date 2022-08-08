import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({triviaDifficulty, handleDifficulty}) {
  return (
    <Box sx={{ minWidth: 220}} style={{marginTop: 20}}>
      <FormControl fullWidth className="input-box">
        <InputLabel id="demo-simple-select-label">Trivia Difficulty</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={triviaDifficulty}
          label="Trivia Difficulty"
          onChange={handleDifficulty}
        >
          <MenuItem value={'easy'}>Easy</MenuItem>
          <MenuItem value={'medium'}>Medium</MenuItem>
          <MenuItem value={'hard'}>Hard</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
