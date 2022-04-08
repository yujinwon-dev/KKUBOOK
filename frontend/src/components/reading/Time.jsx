import { styled } from 'twin.macro';
import formatTime from '../../utils/formatTime';

const StyledTime = styled.p`
  color: black;
  font-size: 14px;
`;

function Time({ time }) {
  return <StyledTime>{formatTime(time)}</StyledTime>;
}

export default Time;
