import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from './layout/App';
import * as serviceWorker from './serviceWorker';
import  './ac.global.css'
import  './ac.page.nav.index.css'
import  './ac.main-header-nav.css'
import  './ac.main-header-content.css'
import  './ac.main-header-bg.css'
import  './ac.index.css'
import  './ac.page.jump.css' 
import './ac.page.works.css'
import './ac.comment.css'
import  './ac.page.light.css'
import  './night.css'
import  './ac.home.css'


 
ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component = { App } />
    </Switch>
  </Router>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();