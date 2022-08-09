import React from "react";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { database } from "../firebase-config";
import { getDocs, collection, doc } from "firebase/firestore";
import Table from "./common/Table";
export default function Results() {
  const databaseRef = collection(database, "Leader Board");
  const navigate = useNavigate();
  const { state } = useLocation();
  const [finalResults, setFinalResults] = React.useState(0);
  const [leadeBoardData, setLeaderBoardData] = React.useState([]);
  React.useEffect(() => {
    if (state) {
      const { finalResults } = state;
      setFinalResults(finalResults);
    }
    getData();
  }, []);

  const getData = async () => {
    const data = await getDocs(databaseRef);
    setLeaderBoardData(
      data.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .sort((a, b) => parseFloat(b.finalScore) - parseFloat(a.finalScore))
    );
  };
  const retryTrivia = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Results</h1>
      {finalResults ? (
        <h2>Final Score is: {finalResults}</h2>
      ) : (
        ""
      )}

      <Button
        onClick={retryTrivia}
        variant="contained"
        style={{ marginBottom: 30 }}
      >
        Play Again
      </Button>
      <hr />
      <h2>Leader Board</h2>
      <div style={{ margin: 20 }}>
        <Table leaderBoardData={leadeBoardData} />
      </div>
    </div>
  );
}
