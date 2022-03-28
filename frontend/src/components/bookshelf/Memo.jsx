import tw, { styled } from 'twin.macro';

const StyledMemo = styled.div`
  ${tw`bg-light-gray`}
  border-radius: 5px;
  padding: 15px 6px;
  min-height: 100px;
  text-align: left;
  font-size: 12px;

  .date {
    ${tw`text-main-gray`}
  }

  .content {
    margin-top: 10px;
  }
`;

function Memo() {
  return (
    <StyledMemo>
      <p className="date">2022년 03월 29일</p>
      <p className="content">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </StyledMemo>
  );
}

export default Memo;
