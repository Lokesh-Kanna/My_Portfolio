import { NavBar } from "./NavBar";
import { timeline_data } from "./data.js";

export function ExpDistributer() {
  return (
    <div>
      <NavBar />
      <div className="timeline-container">
        {timeline_data.map((data, index) => (
          <Experience data={data} key={index} />
        ))}
      </div>
    </div>
  );
}
function Experience({ data, key }) {
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <span className="tag">{data.category}</span>
        <time className="time">{data.duration}</time>
        <h5>{data.organization}</h5>
        <p>{data.job_Description}</p>
        <span className="circle"></span>
      </div>
    </div>
  );
}
