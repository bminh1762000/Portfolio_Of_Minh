import React from "react";

import CardBlog from "../article-item/article-item.component";
import SectionTitle from "../section-title/section-title.component";

import "./blog-overview.styles.scss";

const data = [
  {
    id: 0,
    imageUrl:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    title: "Javascript-Hard-Parts",
    content:
      "Woke offal jianbing venmo tote bag, palo santo subway tile slow-carb post-ironic pug ugh taxidermy squid.",
    hashtag: "javascript",
    date: "May 24th, 2020",
  },
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=947&q=80",
    title: "Why-I-Love-Gatsby",
    content:
      "I'm baby woke mumblecore stumptown enamel pin. Snackwave prism pork belly, blog vape four loko sriracha messenger bag jean shorts DIY bushwick VHS.",
    hashtag: "gatsby",
    date: "May 15th, 2020",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1558346547-4439467bd1d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    title: "HTML-Video-Tags",
    content:
      "Pour-over glossier chambray umami 3 wolf moon. Iceland kale chips asymmetrical craft beer actually forage, biodiesel tattooed fingerstache.",
    hashtag: "html",
    date: "May 15th, 2020",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    title: "React-Hooks",
    content:
      "Pour-over glossier chambray umami 3 wolf moon. Iceland kale chips asymmetrical craft beer actually forage, biodiesel tattooed fingerstache.",
    hashtag: "react",
    date: "May 13th, 2020",
  },
];

const BlogOverview = () => (
  <div className="blog-overview">
     <SectionTitle>All Blogs</SectionTitle>
    <div className="blog-article">
      {data.map(({ id, ...other }) => (
        <CardBlog key={id} {...other} />
      ))}
    </div>
  </div>
);

export default BlogOverview;
