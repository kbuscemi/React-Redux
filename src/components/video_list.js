import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem 
                onVideoSelect={props.onVideoSelect}
                //taking the prop that's taken from app and passing it down to videolistitem
                key={video.etag}
                video={ video } 
            />
        // returning an array of components
        //obtained etag from looking up items array in console via network. 
        // each video items has an etag that's unique to each video which is why we set
        //key to video.etag
        )
    })

    return (
        <ul className='col-md-4 list-group'>
            {/* {props.videos.length} */}
            {videoItems}
        </ul>
    )
}

export default VideoList;