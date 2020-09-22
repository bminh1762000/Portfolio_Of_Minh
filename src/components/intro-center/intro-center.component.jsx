import React from "react";

import IntroPreview from "../intro-preview/intro-preview.component";

import "./intro-center.styles.scss";

const urlImage =
  "https://gatsby-strapi-portfolio-project.netlify.app/static/785405c783d5a741e83b333e323ce15d/f3583/hero-img.png";

const IntroCenter = () => (
  <div className="intro-center">
    <IntroPreview />
    <div
      className="intro-image"
      style={{ backgroundImage: `url(${urlImage})` }}
    ></div>
  </div>
);

export default IntroCenter;
