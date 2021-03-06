import React,{Component} from 'react'

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import './css/main.css'
import Experience from './pages/experience'
import Post from './pages/post'
import Policy from './pages/policy'
import Motivation from './pages/motivation'
import Open from './pages/open'
import Home from './pages/home'
import Debate from './pages/debate'
import Privacy from './pages/privacy'

class App extends Component{
  render(){
    return(
        <BrowserRouter forceRefresh={true}>
            <Switch>
                <Route path="/home/:id" component={Home}/>
                <Route path="/post/:id" component={Post}/>
                <Route path="/experience" component={Experience}/>
                <Route path="/policy" component={Policy}/>
                <Route path="/motivation" component={Motivation}/>
                <Route path="/opening" component={Open} />
                <Route path={"/debate"} component={Debate} />
                <Route path={"/privacy"} component={Privacy} />

                <Redirect exact from={'/'}
                          to={{pathname:'/home/1'
                              ,search: ""
                              ,state:{name:'Referrer'}}} />
                <Redirect exact from={'/home'}
                          to={{pathname:'/home/1'
                              ,search: ""
                              ,state:{name:'Referrer'}}} />
            </Switch>

        </BrowserRouter>
    )
  }
}

export default App