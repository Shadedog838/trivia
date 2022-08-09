import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "./Grid";

export default function OutlinedCard({
  questionsArray,
  questionCounter,
  nextQuestion,
  setResult,
  result
}) {
  return (
    <Box sx={{ minWidth: 275 }} style={{ margin: 20 }}>
      {questionsArray.length > 0 ? (
        <Card variant="outlined">
          {" "}
          <CardContent>
            <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
              Question: {questionsArray[questionCounter - 1].question}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Category: {questionsArray[questionCounter - 1].category}
            </Typography>
            {[
              ...questionsArray[questionCounter - 1].incorrect_answers,
              questionsArray[questionCounter - 1].correct_answer,
            ].map((options) => {
              return (
                <Grid
                  nextQuestion={nextQuestion}
                  options={options}
                  setResult={setResult}
                  result={result}
                  correctAnswer={
                    questionsArray[questionCounter - 1].correct_answer
                  }
                />
              );
            })}
          </CardContent>
        </Card>
      ) : (
        <h1>No Data</h1>
      )}
    </Box>
  );
}
