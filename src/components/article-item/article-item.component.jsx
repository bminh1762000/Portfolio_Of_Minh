import React from "react";
import { withRouter } from "react-router";

import "./article-item.styles.scss";

const CardBlog = ({
  title,
  content,
  hashtag,
  date,
  imageUrl,
  history,
  match,
}) => (
  <div
    className="card-item"
    onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)}
  >
    <div
      className="card-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className="card-body">
      <h4 className="title">{title.split("-").join(" ")}</h4>
      <p className="content">{content}</p>
      <div className="card-footer">
        <h4>{hashtag}</h4>
        <p className="date">{date}</p>
      </div>
    </div>
  </div>
);

export default withRouter(CardBlog);
