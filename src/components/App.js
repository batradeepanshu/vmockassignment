import React, { Component } from 'react';
import Routes from './Routes.js';
import { BrowserRouter,Route,Switch,Redirect,Link} from 'react-router-dom';
import '../stylesheet/App.css';

class App extends Component {
  constructor(){
    super();

  }
  render(){
    return(
      <div className='app-wrap'>
        <Routes/>
      </div>
    );
  }
  componentDidMount(){
  }

}

export default App;
