import React, { useState } from 'react';
import styled from 'styled-components';
import ReadingPage from '../components/reading/ReadingPage';
import RecordPage from '../components/reading/RecordPage';

const Page = styled.div`
  min-width: 100%;
  min-height: 100vh;
  background-color: azure;
`;

function Reading() {
  const [isReading, setIsReading] = useState(true);

  return (
    <>
      {isReading ? (
        <Page>
          <ReadingPage />
        </Page>
      ) : (
        <Page>
          <RecordPage />
        </Page>
      )}
      <button type="button" onClick={() => setIsReading(false)}>
        click
      </button>
    </>
  );
}

export default Reading;
