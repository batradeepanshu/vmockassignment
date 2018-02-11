import React, { Component } from 'react';
import { Link,withRouter} from 'react-router-dom';
import {filter} from 'lodash';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Loader from './Loader';
import {fetIndividualUserData} from '../actions/userActions';
import {get_all_characters,get_individual_characters} from '../controller/superheroController';
import '../stylesheet/UserRepo.css';



class UsersList extends Component{
  constructor(){
    super();
    this.state={};
  }
  componentWillMount(){
    this.props.fetIndividualUserData(this.props.match.params.username);
  }
  renderuserRepos(){
    return this.props.selectedUserRepos.map((repo)=>{
      return  (
        <div className='repo-container'>
          <div className='repo-name'>{repo.name}</div>
          <div className='repo-details'>
            {repo.description || 'No Description Available'}
          </div>
        </div>
      )
    });
  }
  render(){
    if(this.props.loading){
      return <Loader/>;
    }
    else{
      return(
        <div className='user-repo-wrapper'>
          {this.props.selectedUserRepos &&
            <div className='left-container'>
              <img src={this.props.selectedUserRepos[0] && this.props.selectedUserRepos[0].owner.avatar_url}/>
              <div className='owner-name'>
                {this.props.selectedUserRepos[0] && this.props.selectedUserRepos[0].owner.login}</div>
            </div>}
            <div className='right-container'>
            {this.props.selectedUserRepos && this.renderuserRepos()}
            </div>
        </div>
      );
    }

  }

}

function mapStateToProps(state) {
  return {
    selectedUserRepos:state.userInfo.selectedUserRepos,
    loading:state.userInfo.loading
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
    fetIndividualUserData
    },
    dispatch
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersList));
