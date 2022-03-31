import tw, { styled } from 'twin.macro';

const Btn = styled.button`
  ${tw`bg-transparent`}
  height: 3rem;
  color: #848282;
  border: 1px solid #848282;
  border-radius: 10px;

  &:active {
    color: #61b864;
    background-color: #d7f6d7;
    border: 1px solid #61b864;
  }
`;

function InputBtn({ children, onClick }) {
  return (
    <Btn type="button" onClick={onClick}>
      {children}
    </Btn>
  );
}

export default InputBtn;
