
import "./About.css";

const About = ({ hero }) => {
  return (
    <div className="about">
      <h2>About me</h2>
      {hero.aboutMe.map((item, index) => (
        <p key={index}>{item.info}</p>
      ))}
    </div>
  );
};

export default About;
