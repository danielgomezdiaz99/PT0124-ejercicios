import React from "react";
import "./Hero.css";

const Hero = ({ hero }) => {
  return (
    <div className="hero">
      <img src={hero.image} alt={`${hero.name} ${hero.surname}`} className="hero-image" />
      <h1>{`${hero.name} ${hero.surname}`}</h1>
      <p>{hero.city}</p>
      <p>{hero.birthDate}</p>
      <p>{hero.email}</p>
      <p>{hero.phone}</p>
      <a href={hero.gitHub}>GitHub</a>
    </div>
  );
};

export default Hero;
