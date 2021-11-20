import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <NavBar />
      <Typography className="hi">Hi, my name is,</Typography>
    </div>
  );
}

export default App;
