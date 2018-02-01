import React, { Component } from 'react';
import { Link,withRouter} from 'react-router-dom';
import {filter} from 'lodash';
import '../stylesheet/SuperHeroes.css';

import {get_all_characters,get_individual_characters} from '../controller/superheroController';

class SuperHeroes extends Component{
  constructor(){
    super();
    this.state={};
    this.initialCharacter=2;
    this.fetch_info_of_hero=this.fetch_info_of_hero.bind(this);
    this.filter_heroes=this.filter_heroes.bind(this);
  }
  componentWillMount(){
    get_all_characters(this.initialCharacter).then((charArray)=>{
      this.setState({marvelCharacters:charArray});
    });
  }

  check_attribute(attribute){
    var attributeAllowed=true;
    ['name','picture','id'].forEach((item,index)=>{
      if(attribute==item){
        attributeAllowed=false;
      }
    })
    return attributeAllowed;
  }
  fetch_info_of_hero(id){
    get_individual_characters(id).then((resp)=>{
      var newMarvelCharacters=this.state.marvelCharacters.map((char)=>{
        if(char.id==id){
          return resp;
        }
        return char;
      });
      this.setState({marvelCharacters:newMarvelCharacters});
    });
  }

  filter_heroes(e){
    var filter_value=e.target.value.toLowerCase();
    this.setState({filter:filter_value});
    this.marvelFilteredCharacters=filter(this.state.marvelCharacters,(char)=>{
         return char.name.toLowerCase().indexOf(filter_value)!==-1;
       });
  }

  change_route(search_query){
      this.props.history.push(`/superheroes/video/${search_query}`);
  }
  render_super_details(){
    var marvelCharacters=this.marvelFilteredCharacters || this.state.marvelCharacters;
    return marvelCharacters.map((superHero,index)=>{
      var super_attributes_array=[];
      for(var attribute in superHero){
        if(superHero[attribute].constructor!==Array && this.check_attribute(attribute)){
          super_attributes_array.push(
            (<div className='attr-section clearfix'>
            <span className='attr-name'>{attribute} : </span>
            <span className='attr-value'> {superHero[attribute]}</span>
            </div>)
          );
        }
      }
      return (<div className='attributes-container clearfix'>
          <div className='hero-name'>
            <img src={superHero.picture}/>
            {superHero.name}</div>
            {/* {!superHero.alignment && <div className='get-info' onClick={()=>{this.fetch_info_of_hero(superHero.id)}}>
              GET INFO
            </div>} */}
            {!superHero.alignment && <div className='get-info' onClick={()=>{this.change_route(superHero.name)}}>
              GET VIDEO
            </div>}
          {super_attributes_array}
      </div>);
    });
  }

  render(){
    return(
      <div className='super-details'>
        <input type='text' value={this.state.filter || '' }
          placeholder='Filter by name' onChange={this.filter_heroes}/>
          <span className='home-btn'/>
        {this.state.marvelCharacters?this.render_super_details():
          <div className='loader'>Fetching data .....</div>
        }
      </div>
    );
  }

}

export default withRouter(SuperHeroes);
