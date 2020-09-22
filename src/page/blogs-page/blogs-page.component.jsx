import React from 'react';
import {Route} from 'react-router';

import BlogOverview from '../../components/blog-overview/blog-overview.component';
import AboutPreview from '../../components/about-preview/about-preview.compoent';


import './blogs-page.styles.scss';

const BlogPage = ({match}) => (
   <section className='blog-page'>
      <Route exact path={`${match.path}`} component={BlogOverview}/>
      <Route path={`${match.path}/:blogsId`} component={AboutPreview}/>
   </section>
);

export default BlogPage;
