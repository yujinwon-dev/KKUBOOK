import formatTime from '../../utils/formatTime';

function Time({ time }) {
  return <p>{formatTime(time)}</p>;
}

export default Time;
