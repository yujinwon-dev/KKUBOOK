import React, { useState, useEffect } from 'react';
import formatTime from '../../utils/formatTime';

function Time({ isActive, setIsTimeVisible }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (time === 120) {
      setIsTimeVisible(false);
    }
  }, [time]);

  useEffect(() => {
    let ticking = null;

    if (isActive) {
      ticking = setInterval(() => {
        setTime(prevTime => {
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

  return <h1>{formatTime(time)}</h1>;
}

export default Time;
