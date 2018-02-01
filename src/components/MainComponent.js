import React, { Component } from 'react';
import { BrowserRouter,Route,Switch,Redirect,Link } from 'react-router-dom';
import '../stylesheet/MainComponent.css';

const MainComponent=()=>{
  return (
    <div className='super-wrapper'>
     <div className='main-head'>SUPERHEROES APP</div>
     <ul>
       <li>There are three routes in the project :
         <ol type>
         <li>/</li>
         <li>/superheroes</li>
         <li>/superheroes/video/:search_query</li>
       </ol>
        </li>
        <li>ASYNC request chaining has been done in getting the super heroes details and the complete detail is fetched by calling two apis consecutively.</li>
        <li>One more api has been used to fetch the Video of the Superhero from youtube by passing the superhero name as param to youtube API,
        and displying the first video got in the response</li>
        <li>Two third party library's used are lodash and react-youtube</li>
     </ul>
     <Link to='/superheroes'>GET STARTED</Link>
    </div>

  );
}

export default MainComponent;
