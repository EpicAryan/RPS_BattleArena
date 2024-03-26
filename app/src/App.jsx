// import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Game from "./Game/game";
import OptGame from "./Game/optimizeGame";
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Game />} />
          <Route path="/game" element={<OptGame />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
