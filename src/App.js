import "./App.css";
import Trivia from "./components/Trivia";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlayTrivia from "./components/PlayTrivia";
import Results from "./components/Results";
import { app } from './firebase-config';

function App() {
  return (
    <Router>
      <div className="app-main">
        <Routes>
          <Route exact path="/" element={<Trivia />} />
          <Route exact path="/play" element={<PlayTrivia />} />
          <Route exact path='/results' element={<Results />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
