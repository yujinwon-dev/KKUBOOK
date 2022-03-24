import styled from 'styled-components';

const StyledRecordPage = styled.div`
  background-color: pink;
  position: absolute;
  top: 0px;
  left: 0px;
`;

function RecordPage() {
  return (
    <StyledRecordPage>
      <button type="button">Back</button>

      <p>time</p>
      <p>page</p>
    </StyledRecordPage>
  );
}

export default RecordPage;
