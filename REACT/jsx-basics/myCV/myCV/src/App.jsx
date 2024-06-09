import { useState } from "react";
import "./App.css";
import { Hero, Experience, Education, About, More } from "./components";
import { CV } from "./cv/Cv";

const { hero, education, experience, languages, habilities, volunteer, about } = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);

  return (
    <div className="app-container">
      <Hero hero={hero} />
      <About hero={hero} />
      <div className="buttons-container">
        <button className="custom-btn btn-4" onClick={() => setShowEducation(true)}>
          Education
        </button>
        <button className="custom-btn btn-4" onClick={() => setShowEducation(false)}>
          Experience
        </button>
      </div>
      <div className="content-container">
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
      <More languages={languages} habilities={habilities} volunteer={volunteer} />
    </div>
  );
}

export default App;
