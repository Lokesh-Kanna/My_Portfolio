import { NavBar } from "./NavBar";
import Typography from "@mui/material/Typography";
import Typewriter from "typewriter-effect";

export function HomePage() {
  return (
    <div>
      <NavBar />
      <div className="home-main-div">
        <div className="home-left">
          <div className="home-div">
            <Typography className="hi">Hi, my name is,</Typography>
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
                {/* An efficient developer with skills in both frontend and backend
            technologies. Committed in implementing continuous improvement
            in professional as well as personal level. I am particularly
            drawn towards interesting and challenging opportunities in the
            field of supply chain, one which would make the best use of my
            skills and further develop it through professional experience. */}
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
