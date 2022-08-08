import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


export default function OutlinedCard({
  questionsArray,
  questionCounter
}) {
  console.log(questionsArray[questionCounter - 1]);
  return (
    <Box sx={{ minWidth: 275 }} style={{margin: 20}}>
      {questionsArray.length > 0 ? (
        <Card variant="outlined">
        {" "}
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            Question: {questionsArray[questionCounter - 1].question}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Category: {questionsArray[questionCounter - 1].category}
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
      </Card>
      ) : (
        <h1>No Data</h1>
      )}
    </Box>
  );
}
