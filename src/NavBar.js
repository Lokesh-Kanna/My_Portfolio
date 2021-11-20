import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

export function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand">
          <div className="brand">
            <img className="brkt-img" src="bl.png" />
            <Typography className="brnd-nme">Lokesh Kanna</Typography>
            <img className="brkt-img" src="br.png" />
          </div>
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
