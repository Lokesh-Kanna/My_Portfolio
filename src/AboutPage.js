import { NavBar } from "./NavBar";

export function AboutPage() {
  return (
    <div>
      <NavBar />
      <div className="aboutMainDiv">
        <div className="aboutImgDiv">
          <img className="aboutImg" src="abtimg.jpg" />
        </div>
        <div className="aboutTxtDiv">
          <h1 className="aboutTxt">About Me</h1>
          <p className="aboutP">
            Hi, my name is Lokesh Kanna. I am a fullstack developer with skills
            in both frontend and backend technologies. I love creating things
            that calls internet it's home. I am a big fan of technology of any
            kind which drove me into coding as a hobbyist and then expanding my
            knowledge to become a fullstack developer. Apart from web
            developement, I am drawn towards interesting and challenging
            opportunities in automation technologies, AI and ML. To expand my
            knowledge on those fields, I am soon to start learning Python. I am
            eager to put my knowledge into work and further develop it through
            professional experience.
          </p>
        </div>
      </div>
    </div>
  );
}
