import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyB-Jswq7TIXGpf5yBDfjAG-j9ZwDfBmm6A';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      videos: [],
      //set videos to arr so users can see data right away
      selectedVideo: null
    };
    this.videoSearch('surfboards');
    //when search is kicked off will update videoSearch with surfboard videos
  }
  
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term }, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
      //if key and value are the same can use ES6 and combine object.
      //this.setState ({ videos: videos })
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)
    // created an arrow function and passed it to debounce.
    //debounce takes the function that's passed in and returns a new function that can be called only 300 miliseconds (throttling user input)
    // when function is ran it will do so with a search term or a string and it will be sent to videoSearch
    // were term pops up in videoSearch and searchs video 

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        {/* passing prop videos to VideoList */}
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          //this function takes selected video and sets this.setState
          //takes a video and defines it on app's state...updates app's state with a new video
          videos={this.state.videos} />
      </div>
    ); 
  }
}

ReactDOM.render(<App /> , document.querySelector('.container'));
