import { NavBar } from "./NavBar";
import Typography from "@mui/material/Typography";
import Typewriter from "typewriter-effect";
import GitHubIcon from "@mui/icons-material/GitHub";

export function HomePage() {
  return (
    <div>
      <NavBar />
      <div className="home-main-div">
        <div className="home-contacts-div">
          <div className="Vrline"></div>
          <a className="home-contacts" href="https://github.com/Lokesh-Kanna">
            <img src="https://img.icons8.com/fluency/38/000000/github.png" />
          </a>
          <a className="home-contacts" href="https://twitter.com/Lokesh_Kanna_">
            <img src="https://img.icons8.com/fluency/28/000000/twitter.png" />
          </a>
          <a className="home-contacts" href="#">
            <img src="https://img.icons8.com/fluency/28/000000/instagram-new.png" />
          </a>
          <a className="home-contacts" href="#">
            <img src="https://img.icons8.com/fluency/28/000000/mail.png" />
          </a>
          <div className="Vrline"></div>
        </div>
        <div className="home-left">
          <div className="home-div">
            <Typography className="hi">Hi, my name is</Typography>
            <Typography className="my-nme">Lokesh Kanna.</Typography>
            <div className="whoAmI">
              <Typography className="home-para">I am a</Typography>
              <Typewriter
                options={{
                  strings: [
                    "coder.",
                    "fullstack developer.",
                    "tech enthusiast.",
                    "problem solver.",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: "natural",
                }}
              />
            </div>
            <div>
              <p className="home-about">
                <span className="hme-abt-brkt">[</span> I enjoy learning new
                stuff especially related to technology. Recently found my
                passion for coding and developed skills required to become a
                fullstack developer. I am currently focused on expanding my
                knowledge in fullstack developement.{" "}
                <span className="hme-abt-brkt">]</span>
              </p>
            </div>
          </div>
        </div>
        <div className="home-right">
          <object className="home-img" data="devprod.svg"></object>
        </div>
      </div>
    </div>
  );
}
