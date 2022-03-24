import formatTime from '../../utils/formatTime';

function Time({ time }) {
  return <h1>{formatTime(time)}</h1>;
}

export default Time;
