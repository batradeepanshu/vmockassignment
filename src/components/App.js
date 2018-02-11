import React, { Component } from 'react';
import Routes from './Routes.js';
import { BrowserRouter,Route,Switch,Redirect,Link} from 'react-router-dom';
import { Provider } from "react-redux";

import '../stylesheet/App.css';

class App extends Component {
  constructor(){
    super();

  }
  render(){
    return(
      <Provider store={this.props.store}>
      <div className='app-wrap'>
        <Routes/>
      </div>
    </Provider>
    );
  }
  componentDidMount(){
  }

}

export default App;
