import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid({
  options,
  correctAnswer,
  nextQuestion,
  setResult,
  result
}) {
  const handleOptions = (option) => {
    if (correctAnswer === option) {
      setResult(result + 1);
      toast.success("correct", {
        autoClose: 2000,
      });
    } else {
      if (result > 0) {
        setResult(result - 1);
      }
      toast.error("incorrect", {
        autoClose: 2000,
      });
    }
    nextQuestion();
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <ToastContainer />
        <Grid container spacing={2}>
          <Grid item xs={12} style={{ margin: 10 }}>
            <Item
              className="options-grid"
              onClick={() => handleOptions(options)}
            >
              {options}
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
