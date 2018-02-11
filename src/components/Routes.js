import React, { Component } from 'react';
import { BrowserRouter,Route,Switch,Redirect,Link } from 'react-router-dom';
import UsersList from './UsersList';
import UserRepo from './UserRepo';
export default class Routes extends Component{
  constructor(){
    super();
  }

  render(){
    return(
      <BrowserRouter>
      <Switch>
      <Route exact path='/' component={UsersList}/>
      {/* <Route exact path='/users/' component={UsersList}/> */}
      <Route exact path='/users/:username' component={UserRepo}/>
      {/* <Route exact path='/superheroes/video/:search_query' component={Video}/> */}
      {/* <Route path='/login' component={Login}/> */}

      {/* <Route path='/planet-search' component={SearchPlanet}/> */}
      </Switch>
      </BrowserRouter>
    );
  }
}
