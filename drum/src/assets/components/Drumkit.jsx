import React, { useEffect } from 'react';

const Drumkit = () => {

  useEffect(() => {
    const playingClass = 'playing',
      crashRide = document.getElementById('crash-ride'),
      hiHatTop = document.getElementById('hihat-top');

    const animateCrashOrRide = () => {
      crashRide.style.transform = 'rotate(0deg) scale(1.5)';
    };

    const animateHiHatClosed = () => {
      hiHatTop.style.top = '171px';
    };

    const playSound = (e) => {
      const keyCode = e.keyCode;
      const keyElement = document.querySelector(`div[data-key="${keyCode}"]`);

      if (!keyElement) return;

      const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
      audioElement.currentTime = 0;
      audioElement.play();

      switch (keyCode) {
        case 69: // E
        case 82: // R
          animateCrashOrRide();
          break;
        case 75: // K
          animateHiHatClosed();
          break;
        default:
          break;
      }

      keyElement.classList.add(playingClass);
    };

    const removeCrashRideTransition = (e) => {
      if (e.propertyName !== 'transform') return;
      e.target.style.transform = 'rotate(-7.2deg) scale(1.5)';
    };

    const removeHiHatTopTransition = (e) => {
      if (e.propertyName !== 'top') return;
      e.target.style.top = '166px';
    };

    const removeKeyTransition = (e) => {
      if (e.propertyName !== 'transform') return;
      e.target.classList.remove(playingClass);
    };

    const drumKeys = Array.from(document.querySelectorAll('.key'));

    drumKeys.forEach((key) => {
      key.addEventListener('transitionend', removeKeyTransition);
    });

    crashRide.addEventListener('transitionend', removeCrashRideTransition);
    hiHatTop.addEventListener('transitionend', removeHiHatTopTransition);

    window.addEventListener('keydown', playSound);

    return () => {
      window.removeEventListener('keydown', playSound);
    };
  }, []);

  return (
    <main>
      <section className="main-wrapper">
        <div className="key-map-wrapper">
          <h2>Key Mapping</h2>
          <ul className="key-map-list">
            {[
              { keyCode: 'E', sound: 'Crash' },
              { keyCode: 'R', sound: 'Ride' },
              { keyCode: 'F', sound: 'Floor tom' },
              { keyCode: 'G', sound: 'Mid tom' },
              { keyCode: 'H', sound: 'High tom' },
              { keyCode: 'V', sound: 'Kick' },
              { keyCode: 'B', sound: 'Kick' },
              { keyCode: 'J', sound: 'Snare' },
              { keyCode: 'I', sound: 'Hi-Hat Open' },
              { keyCode: 'K', sound: 'Hi-Hat Closed' },
            ].map((key, index) => (
              <li key={index}>
                <kbd className="key-code">{key.keyCode}</kbd>
                <span className="key-sound">{key.sound}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="drum-kit-wrapper">
          <img
            id="crash-ride"
            className="crash-cymbal"
            src="https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/img/crash.png"
            alt="Crash cymbal"
          />
          <img
            id="hihat-top"
            className="hihat-top-cymbal"
            src="https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/img/hihat-top.png"
            alt="Hi Hat cymbal"
          />

          {[
            { keyCode: 74, className: 'snare', label: 'J' },
            { keyCode: 66, className: 'kick', label: 'B' },
            { keyCode: 86, className: 'kick2', label: 'V' },
            { keyCode: 72, className: 'tom-high', label: 'H' },
            { keyCode: 71, className: 'tom-mid', label: 'G' },
            { keyCode: 70, className: 'tom-low', label: 'F' },
            { keyCode: 69, className: 'crash', label: 'E' },
            { keyCode: 82, className: 'ride', label: 'R' },
            { keyCode: 73, className: 'hihat-open', label: 'I' },
            { keyCode: 75, className: 'hihat-close', label: 'K' },
          ].map((drum, index) => (
            <div key={index} data-key={drum.keyCode} className={`key ${drum.className}`}>
              <kbd>{drum.label}</kbd>
            </div>
          ))}

          <img
            className="drum-kit"
            src="https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/img/drum-kit.png"
            alt="Drum Kit"
          />
        </div>

        {[
          { key: 74, src: 'snare.wav' },
          { key: 66, src: 'kick.wav' },
          { key: 86, src: 'kick.wav' },
          { key: 72, src: 'tom-high.wav' },
          { key: 71, src: 'tom-mid.wav' },
          { key: 70, src: 'tom-low.wav' },
          { key: 69, src: 'crash.wav' },
          { key: 82, src: 'ride.wav' },
          { key: 73, src: 'hihat-open.wav' },
          { key: 75, src: 'hihat-close.wav' },
        ].map((audio, index) => (
          <audio key={index} data-key={audio.key} src={`https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/${audio.src}`}></audio>
        ))}
      </section>
    </main>
  );
};

export default Drumkit
