import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './components/App'
import { Error404 } from './components/Error404'
import { Router, Route, hashHistory } from 'react-router'



window.React=React

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={App}/>
      <Route path="*" component={Error404}/>
  </Router>,
  document.getElementById('react-container')
);
