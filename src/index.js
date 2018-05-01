import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
      selectedVideo: null
    };
    //set videos to arr so users can see data right away

    //when search is kicked off will update setstate with surfboard videos
    YTSearch({key: API_KEY, term: 'surfboards' }, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
      //if key and value are the same can use ES6 and combine object.
      //this.setState ({ videos: videos })
    });
  
  }

  render() {
    return (
      <div>
        <SearchBar />
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
