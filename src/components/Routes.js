import React, { Component } from 'react';
import { BrowserRouter,Route,Switch,Redirect,Link } from 'react-router-dom';
import MainComponent from './MainComponent';
import SuperHeroes from './SuperHeroes';
import Video from './Video';
export default class Routes extends Component{
  constructor(){
    super();
  }

  render(){
    return(
      <BrowserRouter>
      <Switch>
      <Route exact path='/' component={MainComponent}/>
      <Route exact path='/superheroes' component={SuperHeroes}/>
      <Route exact path='/superheroes/video/:search_query' component={Video}/>
      {/* <Route path='/login' component={Login}/> */}

      {/* <Route path='/planet-search' component={SearchPlanet}/> */}
      </Switch>
      </BrowserRouter>
    );
  }
}
