import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import GameContainer from "./components/GameContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GameContainer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
