import React from 'react';
import "../styles/videoCard.css";

const playButton = <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M18.6 33.25v-18.6l14.6 9.3Zm1.1-9.3Zm0 7.25 11.5-7.25-11.5-7.25Z"/></svg>

const VideoCard = ({image, name, index}) => {
  return (
    <div className='videoCard' style={{backgroundImage:`url(${image})`}}>
        <a href="#">{playButton}</a>
        <p>{name}</p>
    </div>
  )
}

export default VideoCard