import React, { useState } from 'react';
import './App.css';

function App() {
  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(0.5);

  const togglePower = () => {
    setPower(!power);
  };

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  const playSound = (fileName) => {
    if (power) {
      const sound = new Audio(`${process.env.PUBLIC_URL}/audio/${fileName}`);
      sound.volume = volume;
      sound.currentTime = 0;
      sound.play().catch(error => console.error('Error playing sound:', error));
    }
  };

  return (
    <div id="drum-machine">
      <div className="display">
        <button className="power-button" onClick={togglePower}>
          {power ? 'Turn Off' : 'Turn On'}
        </button>
      </div>
      <div className="volume-control">
        <label htmlFor="volume">Volume: </label>
        <input
          id="volume"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          disabled={!power}
        />
      </div>
      <div className="drum-pads">
        <button className="drum-pad" onClick={() => playSound('Heater-1.mp3')}>Q</button>
        <button className="drum-pad" onClick={() => playSound('Heater-2.mp3')}>W</button>
        <button className="drum-pad" onClick={() => playSound('Heater-3.mp3')}>E</button>
        <button className="drum-pad" onClick={() => playSound('Heater-4_1.mp3')}>A</button>
        <button className="drum-pad" onClick={() => playSound('Heater-6.mp3')}>S</button>
        <button className="drum-pad" onClick={() => playSound('Dsc_Oh.mp3')}>D</button>
        <button className="drum-pad" onClick={() => playSound('Kick_n_Hat.mp3')}>Z</button>
        <button className="drum-pad" onClick={() => playSound('RP4_KICK_1.mp3')}>X</button>
        <button className="drum-pad" onClick={() => playSound('Cev_H2.mp3')}>C</button>
      </div>
    </div>
  );
}

export default App;
