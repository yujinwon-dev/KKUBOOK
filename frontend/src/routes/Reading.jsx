import React, { useState } from 'react';
import Time from '../components/main/Time';

function Reading() {
  const [isActive, setIsActive] = useState(true);
  const [isTimeVisible, setIsTimeVisible] = useState(true);

  return (
    <>
      <h1>Reading</h1>
      <h3>Stopwatch</h3>
      {isTimeVisible && (
        <Time isActive={isActive} setIsTimeVisible={setIsTimeVisible} />
      )}
      <h1>{isActive ? '독서 중' : '쉬는 중'}</h1>
      <button type="button" onClick={() => setIsActive(!isActive)}>
        {isActive ? '일시정지' : '재생'}
      </button>
    </>
  );
}

export default Reading;
