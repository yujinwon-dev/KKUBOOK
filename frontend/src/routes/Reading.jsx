import React, { useState, useEffect } from 'react';
import formatTime from '../utils/formatTime';

function Reading() {
  const [isActive, setIsActive] = useState(true);
  const [isTimeVisible, setIsTimeVisible] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let ticking = null;

    if (isActive) {
      ticking = setInterval(() => {
        setTime(prevTime => {
          if (prevTime === 120) {
            setIsTimeVisible(false);
          }
          return prevTime + 1;
        });
      }, 1000);
    } else {
      clearInterval(ticking);
    }
    return () => {
      clearInterval(ticking);
    };
  }, [isActive]);

  return (
    <div>
      <h1>Reading</h1>
      <h3>Stopwatch</h3>
      {isTimeVisible && <h1>{formatTime(time)}</h1>}
      <h1>{isActive ? '독서 중' : '쉬는 중'}</h1>
      <button type="button" onClick={() => setIsActive(!isActive)}>
        {isActive ? '일시정지' : '재생'}
      </button>
    </div>
  );
}

export default Reading;
