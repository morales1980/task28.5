import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Navigation from './components/presentationals/navigation.component';
import Home from './components/presentationals/home.component';
import Contact from './components/presentationals/contact.component';
import error404 from './components/presentationals/error404.component';


export default (
  <Route path="/" component={Navigation}>
    <IndexRoute component={Home}/>
    <Route path="/contact" component={Contact}/>
    <Route path="*" component={error404}/>
  </Route>
);
