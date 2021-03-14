import React from 'react';

function Video() {
  return (
    <video muted autoPlay loop>
      <source src='/assets/videos/ebookzbook.mp4' type='video/mp4' />
      <strong>Your browser does not support the video tag.</strong>
    </video>
  );
}

export default Video;
