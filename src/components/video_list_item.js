import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    // by passing in {video} it is the same thing as writing
    // const video = props.video; what ({video}) is doing is saying
    // the first object in the arguments array has a prop video. grab that video
    //and declare new variable called video -- ES syntax
    
    // console.log(video)

    const imageUrl = video.snippet.thumbnails.default.url;
    // the response we're getting from youtube
    return (
        <li onClick={() => onVideoSelect(video)} className='list-group-item'>
            {/* when user clicks on any of the li's the onclick function will run and will pass in
            that particular videolistitem's video */}
            <div className='video-list media'>
                <div className='media-left'>
                    <img className='media-object' src={imageUrl} />
                </div>

                <div className='media-body'>
                    <div className='media-heading'>{video.snippet.title}</div>
                </div>
            </div>
        </li>
    )
    
};

export default VideoListItem;