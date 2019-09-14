import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, hashHistory} from 'react-router';
import store from './redux/store/store';
import routes from './routes';
import './css/country.css';
import DevTools from './devtools/DevTools';

render(
  <Provider store={store}>
    <div>
      <Router history={hashHistory} routes={routes}/>
      <DevTools/>
    </div>
  </Provider>,
  document.getElementById('root')
);

store.dispatch({type:'GET_COUNTRIES'});
