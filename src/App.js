import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './page/hompage/homepage.component';
import AboutPage from './page/about-page/about-page.component';
import ProjectPage from './page/project-page/project-page.component';
import BlogPage from './page/blogs-page/blogs-page.component';
import ContactPage from './page/contact-page/contact-page.component';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/about' component={AboutPage}/>
        <Route path='/project' component={ProjectPage}/>
        <Route path='/blogs' component={BlogPage}/>
        <Route path='/contact' component={ContactPage}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
