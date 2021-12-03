import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { ExpDistributer } from "./Experience";
import { tech_stack } from "./data.js";
import { NavBar } from "./NavBar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience" element={<ExpDistributer />} />
        <Route path="/skills" element={<SkillsPage />} />
      </Routes>
    </div>
  );
}

function SkillsPage() {
  return (
    <div className="mainSkilldiv">
      <NavBar />
      <div className="skillsection">
        <div className="skilldiv-right">
          <h3 className="skillHeading">My Tech Stack</h3>
          <div className="techstack">
            {tech_stack.map((stack) => {
              return <TechStack name={stack.name} icon={stack.icon} />;
            })}
          </div>
        </div>
        <div className="skilldiv-left">
          <h3 className="skillHeading">My Skill Spread</h3>
        </div>
      </div>
    </div>
  );
}

function TechStack({ name, icon }) {
  return (
    <div className="stack_icon">
      <img src={icon} />
      <p>{name}</p>
    </div>
  );
}

export default App;
