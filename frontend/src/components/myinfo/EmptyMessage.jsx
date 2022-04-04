import tw, { styled } from 'twin.macro';
import backKkubook from '../../assets/back-kkubook.png';

const MessageDiv = styled.div`
  ${tw`flex flex-col justify-center items-center`}
  height: 250px;

  img {
    display: block;
    width: 4.5rem;
    height: auto;
    margin-bottom: 1rem;
  }
`;

function EmptyMessage() {
  return (
    <MessageDiv>
      <img src={backKkubook} alt="back of kkubook character" />
      <p>이번 달에 읽은 책이 없어요.</p>
    </MessageDiv>
  );
}

export default EmptyMessage;
