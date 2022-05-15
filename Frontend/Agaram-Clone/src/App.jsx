import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { AgaramVideo } from "./Components/Agaram-Video/AgaramVideo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agaram-foundation-video" element={<AgaramVideo />} />
      </Routes>
    </div>
  );
}

export default App;
