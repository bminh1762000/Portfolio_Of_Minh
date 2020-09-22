import React from "react";

import './project-details.styles.scss';

const ProjectDetails = ({ blogData }) => (
  <div className="details-center">
    <div className="titles">
      <h1>{blogData.title}</h1>
      <h2>Subtitle</h2>
    </div>
    <div className="details-items">
      <p className="item">first item</p>
      <p className="item">second item</p>
      <p className="item">third item</p>
    </div>
    <div className="details-content">
      <p>
        YOLO drinking vinegar chambray pok pok selfies quinoa kinfolk pitchfork
        street art la croix unicorn DIY. Woke offal jianbing venmo tote bag,
        palo santo subway tile slow-carb post-ironic pug ugh taxidermy squid.
        Pour-over glossier chambray umami 3 wolf moon. Iceland kale chips
        asymmetrical craft beer actually forage, biodiesel tattooed
        fingerstache. Pork belly lomo man braid, portland pitchfork locavore man
        bun prism.
      </p>
    </div>
    <div className="details-image" style={{backgroundImage : `url(${blogData.imageUrl})`}}>
    </div>
  </div>
);

export default ProjectDetails;
