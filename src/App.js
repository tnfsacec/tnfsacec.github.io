import React,{Component} from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import Experience from './pages/experience'
import Post from './pages/post'
import Policy from './pages/policy'
import Motivation from './pages/motivation'
import Open from './pages/open'

//import OtherNavbar from "./components/otherNavbar";
import MainNavbar from "./components/mainNavbar";

class App extends Component{
  render(){
    return(
        <Router>
        <Switch>
            <Route path="/home">
                <MainNavbar />
            </Route>
            <Route path="/post">
                <Post />
            </Route>
            <Route path="/experience">
                <Experience />
            </Route>
            <Route path="/policy">
                <Policy/>
            </Route>
            <Route path="/motivation">
                <Motivation />
            </Route>
            <Route path="/opening">
                <Open />
            </Route>
            <Redirect from={'/'}
                      to={{pathname:'/home'
                          ,search: ""
                          ,state:{name:'Referrer'}}} />
        </Switch>
        </Router>
    )
  }
}

export default App