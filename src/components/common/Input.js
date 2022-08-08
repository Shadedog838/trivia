import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields({
  triviaCount,
  setTriviaCount
}) {
  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        fullWidth
        type="number"
        className="input-box"
        id="outlined-basic"
        label="Number of Questions"
        variant="outlined"
        value={triviaCount}
        onChange={(event) => setTriviaCount(event.target.value)}
      />
    </Box>
  );
}
