import "./App.css";
import Trivia from "./components/Trivia";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlayTrivia from "./components/PlayTrivia";

function App() {
  return (
    <Router>
      <div className="app-main">
        <Routes>
          <Route exact path="/" element={<Trivia />} />
          <Route exact path="/play" element={<PlayTrivia />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
