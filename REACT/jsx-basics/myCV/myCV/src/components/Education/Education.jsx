import React from "react";
import "./Education.css";

const Education = ({ education }) => {
  return (
    <div className="education card">
      <h2>Education</h2>
      {education.map((item, index) => (
        <div key={index} className="education-item">
          <h3>{item.name}</h3>
          <p>{item.date}</p>
          <p>{item.where}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
