import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

export function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/">
          <div className="brand">
            <img className="brkt-img" src="bl.png" />
            <Typography className="brnd-nme">Lokesh Kanna</Typography>
            <img className="brkt-img" src="br.png" />
          </div>
        </Link>
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
            <Link class="nav-link" to="/">
              <span className="Nav-S-no">01. </span>Home
            </Link>
            <Link class="nav-link" to="/about-me">
              <span className="Nav-S-no">02. </span>About
            </Link>
            <Link class="nav-link" to="/skills">
              <span className="Nav-S-no">03. </span>Skills
            </Link>
            <Link class="nav-link" to="/my-projects">
              <span className="Nav-S-no">04. </span>Projects
            </Link>
            <Link class="nav-link" to="/experience">
              <span className="Nav-S-no">05. </span>Experience
            </Link>
            {/* <Link class="nav-link" to="">
              <span className="Nav-S-no">06.</span>Achievements
            </Link> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
