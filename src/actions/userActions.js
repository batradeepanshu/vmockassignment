import axios from 'axios';

export const SET_USERS_DATA='SET_USERS_DATA';
export const SET_USERS_REPO='SET_USERS_REPO';
export const SET_LOADING_STATUS='SET_LOADING_STATUS';

export function fetchGitHubUsersData (searchInput){
  const API_URL='https://api.github.com/search/issues';
  return function (dispatch){
    dispatch(setLoadingStatus(true));
    axios.get(API_URL,{
      params:{
        q:searchInput
      }
    }).then((response)=>{
      dispatch(setLoadingStatus(false));
      if(response.data){
        dispatch(setUsersData(response.data.items));
      }
    })
  }
}

export function fetIndividualUserData(username){
const API_URL=`https://api.github.com/users/${username}/repos`;
  return function (dispatch){
    dispatch(setLoadingStatus(true));
    axios.get(API_URL).then((response)=>{
      dispatch(setLoadingStatus(false));
        dispatch(setUserRepositories(response.data));
    });
  }
}
function setUserRepositories(data){
return{
  type:SET_USERS_REPO,
  data
}
}

function setUsersData(data){
return {
  type:SET_USERS_DATA,
  data
}
}

function setLoadingStatus(data){
  return {
    type:SET_LOADING_STATUS,
    data
  }
}
