import tw, { styled } from 'twin.macro';
import progressBalloon from '../../assets/progress-balloon.png';

const Progress = styled.div(({ height }) => [
  tw`
    w-full
    bg-[#E1E1E1]
    rounded-full
  `,
  `height: ${height}`,
]);

const Bar = styled.div(({ progressRate, height }) => [
  tw`
    bg-main-green
    h-2.5 
    rounded-full
  `,
  `
    width: ${progressRate}%;
    height: ${height};
  `,
]);

const Balloon = styled.img(({ progressRate }) => [
  tw`
    block
    w-[35px]
    my-2
  `,
  `margin-left: ${progressRate > 5.8 ? progressRate - 5.8 : 0}%`,
]);

function ProgressBar({ value, totalValue, height, needBalloon }) {
  const progressRate = (value / totalValue) * 100;
  return (
    <>
      {needBalloon && (
        <Balloon src={progressBalloon} progressRate={progressRate} />
      )}
      <Progress height={height || '10px'}>
        <Bar progressRate={progressRate} height={height || '10px'} />
      </Progress>
    </>
  );
}

export default ProgressBar;
