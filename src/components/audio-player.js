import React, { useEffect, useRef, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { PlayIcon, PauseIcon } from '@heroicons/react/24/solid';

const AudioPlayer = ({ slug }) => {
  const [showAudioPlayer, setShowAudioPlayer] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioSrc, setAudioSrc] = useState('');
  const [audioExists, setAudioExists] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const timestamp = new Date().getTime(); // Current timestamp
      const src = `${window.location.origin}/audio/${slug}.mp3?t=${timestamp}`;
      setAudioSrc(src);

      // Check if the audio file exists
      fetch(src, { method: 'HEAD' })
        .then(response => {
          if (response.ok) {
            setAudioExists(true);
          } else {
            setAudioExists(false);
          }
        })
        .catch(() => setAudioExists(false));
    }
  }, [slug]);

  const handlePlayButtonClick = () => {
    if (!showAudioPlayer) {
      setShowAudioPlayer(true);
    } else {
      if (isPlaying) {
        audioRef.current.audioEl.current.pause();
      } else {
        audioRef.current.audioEl.current.play();
      }
    }
    setIsPlaying(!isPlaying);
  };

  const handleAudioError = () => {
    alert('Error: Audio file could not be loaded or played');
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  return (
    <>
      {audioExists && (
        <div className="text-to-speech">
          <button onClick={handlePlayButtonClick}>
            {isPlaying ? (
              <>
                <PauseIcon className="h-6 w-6 text-gray-700 mr-2" />
                Pause
              </>
            ) : (
              <>
                <PlayIcon className="h-6 w-6 text-gray-700 mr-2" />
                Listen
              </>
            )}
          </button>
        </div>
      )}
      {showAudioPlayer && audioExists && (
        <ReactAudioPlayer 
          src={audioSrc} 
          autoPlay 
          controls 
          ref={audioRef} 
          className="audio-player" 
          onError={handleAudioError}
          onEnded={handleAudioEnded}
          style={{ display: 'none' }} // Hide the audio controls
        />
      )}
    </>
  );
};

export default AudioPlayer;
