import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({triviaType, handleChange}) {
  return (
    <Box sx={{ minWidth: 220}} style={{marginTop: 20}}>
      <FormControl fullWidth className="input-box">
        <InputLabel id="demo-simple-select-label">Trivia Difficulty</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={triviaType}
          label="Trivia Difficulty"
          onChange={handleChange}
        >
          <MenuItem value={9}>Easy</MenuItem>
          <MenuItem value={10}>Medium</MenuItem>
          <MenuItem value={11}>Hard</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
