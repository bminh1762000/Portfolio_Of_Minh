import React from "react";
import {withRouter} from 'react-router';

import ProjectDetails from "../project-details/project-details.components";
import CustomButton from '../custom-button/custom-button.component';

import "./about-preview.styles.scss";

const data = {
  javascript_hard_parts: {
    title: "Javascript Hard Parts",
    imageUrl:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
  why_i_love_gatsby: {
    title: "Why I Love Gatsby",
    imageUrl:
      "https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=947&q=80",
  },
  html_video_tags: {
    title: "HTML Video Tags",
    imageUrl:
      "https://images.unsplash.com/photo-1558346547-4439467bd1d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
  react_hooks : {
     title : "React Hooks",
     imageUrl : "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
  }
};

const AboutPreview = (ownProps) => {
  const blogs = ownProps.match.params.blogsId.split("-").join("_");
  const blogsData = data[blogs];

  return (
     <section className="about-preview">
        <ProjectDetails blogData={blogsData} />
        <CustomButton onClick={() => ownProps.history.push('/blogs')}>Blog</CustomButton>
     </section>
  );
};

export default withRouter(AboutPreview);
