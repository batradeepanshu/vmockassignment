import React, { Component } from "react";
import YouTube from "react-youtube";
import { get_video } from "../controller/superheroController";
import '../stylesheet/Video.css';

export default class Video extends Component {
  constructor() {
    super();
    this.state={};
  }
  componentWillMount() {
    try {
      get_video(this.props.match.params.search_query).then(response => {
        this.setState({videoId:response.data.items[0].id.videoId});
      });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div className='super-video-wrapper'>
        {this.state.videoId?
          [<YouTube
          videoId={this.state.videoId} // defaults -> null
          id={"super-video"} // defaults -> null
          className={"super-video"} // defaults -> null
        />,<div className='super-name'>
          {this.props.match.params.search_query}
        </div>]:
        <div className='loader'>Fetching Video data .....</div>

      }

      </div>
    );
  }
}
