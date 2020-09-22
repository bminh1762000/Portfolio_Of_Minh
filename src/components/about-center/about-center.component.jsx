import React from "react";

import "./about-center.styles.scss";

const AboutCenter = ({about}) => {
   const { title, body, tech, imageUrl} = about;
  return (
    <div className="about-center">
      <div 
         className="background-image"
         style={{backgroundImage : `url(${imageUrl})`}}
      >

      </div>
      <div className="about-details">
        <h3>{title}</h3>
        <div className="underline"></div>
        <p>{body}</p>
        <div className="techs">
          {tech.map((tech, idx) => (
            <span key={idx} className="tech">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCenter;
