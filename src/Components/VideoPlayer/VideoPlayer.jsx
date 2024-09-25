import React, { useRef, useEffect } from 'react';
import video from '../../assets/college-video.mp4';
import './VideoPlayer.css';

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);
  const videoRef = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      // Pause the video when closing the player
      videoRef.current.pause();
      setPlayState(false);
    }
  };

  // Ensure autoplay starts when playState is true
  useEffect(() => {
    if (playState) {
      videoRef.current.play();
    }
  }, [playState]);

  return (
    <div
      className={`video-player ${playState ? '' : 'hide'}`}
      ref={player}
      onClick={closePlayer}
    >
      <video ref={videoRef} src={video} controls muted></video>
    </div>
  );
};

export default VideoPlayer;
