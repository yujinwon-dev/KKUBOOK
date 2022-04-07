import React, { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';

const CommitAlert = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 1rem;
  padding: 0.7rem;
  padding-left: 1rem;
  ${tw`bg-light-gray`}
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(70px);
  border-radius: 10px;
  svg {
    margin-right: 10px;
  }
  p {
    font-size: 13px;
  }
  z-index: 1;
`;

function ReadingAlert({ alert }) {
  const [showEle, setShowEle] = useState(true);

  useEffect(() => {
    let unmounted = false;
    setTimeout(() => {
      if (!unmounted) {
        setShowEle(false);
      }
    }, 3000);
    return () => {
      unmounted = true;
    };
  }, []);

  return (
    <CommitAlert
      style={{
        opacity: showEle ? 1 : 0,
        transition: 'opacity 1s linear',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        width="18px"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <p>{alert}</p>
    </CommitAlert>
  );
}
export default ReadingAlert;
