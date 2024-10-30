import React, { useState, useEffect } from 'react';
import './App.css';

// List of audio samples
const audioClips = [
  { key: 'Q', id: 'Heater-1', url: '/audio/Heater-1.mp3' },
  { key: 'W', id: 'Heater-2', url: '/audio/Heater-2.mp3' },
  { key: 'E', id: 'Heater-3', url: '/audio/Heater-3.mp3' },
  { key: 'A', id: 'Heater-4', url: '/audio/Heater-4_1.mp3' },
  { key: 'S', id: 'Heater-6', url: '/audio/Heater-6.mp3' },
  { key: 'D', id: 'Cev_H2', url: '/audio/Cev_H2.mp3' },
  { key: 'Z', id: 'Kick-n-Hat', url: '/audio/Kick_n_Hat.mp3' },
  { key: 'X', id: 'RP4_KICK', url: '/audio/RP4_KICK_1.mp3' },
  { key: 'C', id: 'Dsc_Oh', url: '/audio/Dsc_Oh.mp3' },
];

const DrumMachine = () => {
  const [display, setDisplay] = useState('');

  const playSound = (key, id) => {
    const audio = document.getElementById(key);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      setDisplay(id);
    }
  };

  const handleKeyDown = (e) => {
    const clip = audioClips.find((clip) => clip.key === e.key.toUpperCase());
    if (clip) {
      playSound(clip.key, clip.id);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div id="drum-machine">
      <div id="display" className="display">
        {display}
      </div>
      <div className="drum-pads">
        {audioClips.map((clip) => (
          <div
            key={clip.key}
            id={clip.id}
            className="drum-pad"
            onClick={() => playSound(clip.key, clip.id)}
          >
            {clip.key}
            <audio className="clip" id={clip.key} src={clip.url}></audio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrumMachine;
