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
      <div className="home-div">
        <Typography className="hi">Hi, my name is,</Typography>
        <Typography className="my-nme">Lokehs Kanna</Typography>
      </div>
    </div>
  );
}

export default App;
