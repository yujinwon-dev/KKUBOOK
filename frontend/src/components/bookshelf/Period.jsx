import tw, { styled } from 'twin.macro';

const StyledPeriod = styled.div`
  ${tw`bg-light-gray`},
  height: 3rem;
  padding: 10px 2px;
  font-size: 12px;
  border-radius: 5px;

  p {
    display: inline-block;
    width: 48%;
    text-align: left;
    font-weight: bold;
  }

  span {
    font-weight: lighter;
    margin: 5px;
  }
`;

function Period({ startFrom, end }) {
  return (
    <StyledPeriod>
      <p>
        시작일: <span>{startFrom}</span>
      </p>
      <p>
        종료일: <span>{end}</span>
      </p>
    </StyledPeriod>
  );
}

export default Period;
