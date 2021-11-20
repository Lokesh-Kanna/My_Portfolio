import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />} />
      </Routes>
    </div>
  );
}

function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Lokesh Kanna
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-link active" to="">
              Home <span class="sr-only">(current)</span>
            </Link>
            <Link class="nav-link" to="">
              About
            </Link>
            <Link class="nav-link" to="">
              Skills
            </Link>
            <Link class="nav-link" to="">
              Projects
            </Link>
            <Link class="nav-link" to="">
              Experience
            </Link>
            <Link class="nav-link" to="">
              Achievements
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
