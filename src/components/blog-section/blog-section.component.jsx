import React from "react";
import { withRouter } from "react-router";

import SectionTitle from "../section-title/section-title.component";
import CustomButton from "../custom-button/custom-button.component";
import BlogCenter from "../blog-center/blog-center.component";

const BlogSection = ({ history, match }) => (
  <section className="section">
    <SectionTitle>Lastest Articles</SectionTitle>
    <BlogCenter />
    <CustomButton onClick={() => history.push(`${match.url}blog`)}>
      Blog
    </CustomButton>
  </section>
);

export default withRouter(BlogSection);
