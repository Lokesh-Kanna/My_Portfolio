import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { ExpDistributer } from "./Experience";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience" element={<ExpDistributer />} />
      </Routes>
    </div>
  );
}

export default App;
