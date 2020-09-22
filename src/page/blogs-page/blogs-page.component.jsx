import React from 'react';
import {Route} from 'react-router';

import BlogOverview from '../../components/blog-overview/blog-overview.component';

import './blogs-page.styles.scss';

const BlogPage = ({match}) => (
   <section className='blog-page'>
      <Route path={`${match.path}`} component={BlogOverview}/>
   </section>
);

export default BlogPage;
