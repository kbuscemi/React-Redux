import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading...</div>
    }
    //provide an if statement to make sure a video has been loaded in the props before it
    //attempts to render. If a video is provided the code below will run.

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    //iframe points to this url. only thing that changes in url is youtube's video id

    return (
        <div className='video-detail col-md-8'>
            <div className='embed-responsive embed-responsive-16by9'>
                <iframe className='embed-responsive-item' src={url}></iframe>
                {/* need to provide a source to iframe */}
            </div>
            <div className='details'>
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
};

export default VideoDetail;