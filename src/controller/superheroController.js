import axios from 'axios';
import {ALL_CHARACTERS_API_URL,
YOUTUBE_API_KEY,YOUTUBE_API_URL} from '../general_constants/superheroConstants';

export function get_all_characters(){
  return axios.get(ALL_CHARACTERS_API_URL).then((response)=>{
    var characters=[];
    // response.data.Characters.forEach((character,index)=>{
      return get_individual_characters(response.data.Characters[0].id).then((character_data)=>{
            // characters.push(character_data);
            response.data.Characters.splice(0,1)
            return [character_data,...response.data.Characters];
        });
    // });

  });
}

export function get_individual_characters(id){
  return axios.get(ALL_CHARACTERS_API_URL+id).then((response)=>{
    return response.data;
  });
}

export function get_video(search_query){
  return axios.get(YOUTUBE_API_URL,{
    params:{
      part:'snippet',
      type:'video',
      key:YOUTUBE_API_KEY,
      q: search_query+' marvels'
    }
  })
}
