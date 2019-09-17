import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Navigation from './components/presentationals/navigation.component';
import Home from './components/presentationals/home.component';
import Contact from './components/presentationals/contact.component';
import error404 from './components/presentationals/error404.component';
import CountryFlagListContainer from './components/containers/countryflaglistcontainer.component';
import CountryDetailsContainer from './components/containers/countrydetailscontainer.component';
import ContinentsContainer from './components/containers/continentscontainer.component';


export default (
  <Route path="/" component={Navigation}>
    <IndexRoute component={Home}/>
    <Route path="countries">
      <IndexRoute component={CountryFlagListContainer}/>
      <Route path="country/:id" component={CountryDetailsContainer}/>
    </Route>
    <Route path="continents" component={ContinentsContainer}/>
    <Route path="contact" component={Contact}/>
    <Route path="*" component={error404}/>
  </Route>
);
