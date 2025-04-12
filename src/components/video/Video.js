// VideoPlayer.js
import React from 'react';

const Video = ({ src }) => {
  return (
    <video width="600" height="400" 
    autoPlay
    loop
    muted
    style={{ objectFit: 'cover' }} >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
