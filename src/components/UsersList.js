import React, { Component } from 'react';
import { Link,withRouter} from 'react-router-dom';
import {filter} from 'lodash';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {fetchGitHubUsersData} from '../actions/userActions';

import Loader from './Loader';
import '../stylesheet/UsersList.css';

import {get_all_characters,get_individual_characters} from '../controller/superheroController';

class UsersList extends Component{
  constructor(){
    super();
    this.state={
      searchInput:'deepanshu'
    };
  }
  componentWillMount(){
    this.props.fetchGitHubUsersData(this.state.searchInput);
  }

  on_search_change(e){
    this.setState({searchInput:e.target.value});

  }
  getUserInfo(username){
    this.props.history.push('users/'+username);
  }
  on_submit(e){
    e.preventDefault();
    this.props.fetchGitHubUsersData(this.state.searchInput);
  }
  renderUserSearchData(){
    return this.props.searchData.map((data,index)=>{
        return(
          <div key ={index} className='user-container clearfix'>
            <img src={data.user.avatar_url}/>
            <div className='user-name'>
              {data.user.login}
            </div>
            <div className='get-info-button' onClick={()=>this.getUserInfo(data.user.login)}>
              GET INFO
            </div>
          </div>
        )
    })
  }
  render(){
    // if(this.props.loading){
    //   return (<div className='loading'> FETCHING DATA...</div>);
    // }
    // else{
      return(
        <div className='user-info-wrapper'>
          <form onSubmit={this.on_submit.bind(this)}>
          <input value={this.state.searchInput} onChange={this.on_search_change.bind(this)}/>
        </form>
          {this.props.searchData && !this.props.loading && this.renderUserSearchData()}
          {this.props.loading && <Loader/>}
        </div>
      );
    }
  // }

}

function mapStateToProps(state) {
  return {
    searchData:state.userInfo.searchData,
    loading:state.userInfo.loading
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchGitHubUsersData
    },
    dispatch
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersList));
