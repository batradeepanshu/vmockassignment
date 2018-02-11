
import {SET_USERS_REPO,SET_LOADING_STATUS,SET_USERS_DATA} from '../actions/userActions';

let initialState={}

export default function userInfoReducer(state=initialState,action){
  switch(action.type){
    case SET_USERS_DATA:
    return {...state,searchData:action.data};
    case SET_USERS_REPO:
    return {...state,selectedUserRepos:action.data}
    case SET_LOADING_STATUS:
    return {...state,loading:action.data}

    default:
    return state;
  }
}
