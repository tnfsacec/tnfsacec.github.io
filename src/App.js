//import logo from './logo.svg';
//import './App.css';
//import {Route, Router} from "react-router-dom";

import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import Navbar from './components/navbar'

export default function App() {
  return (
      <Router>
        <div>
          <Navbar />
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/main">
              <About />
            </Route>
            <Route path="/motivation">
              <Users />
            </Route>
            <Route path="/experience">
              <Home />
            </Route>
            <Route path="/experience">
              <Home />
            </Route>

            <Redirect from={'/'}
                      to={{pathname:'/home'
                        ,search: ""
                        ,state:{name:'Referrer'}}} />
          </Switch>
        </div>
      </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}