import React, { useRef } from 'react';
import tw, { styled } from 'twin.macro';
import useStore from '../../stores/bottomSheet';

const StyledPageInput = styled.div`
  width: 90%;
  margin: 0 auto 15px;

  input {
    width: 100%;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid gray;
    font-size: 16px;
    margin: 3rem 0rem 2rem;
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    ${tw`text-main-gray`}
  }

  button {
    ${tw`bg-main-green`}
    width: 100%;
    height: 2.5rem;
    border-radius: 10px;
    border: 0;
    outline: 0;
  }
`;

function PageInput() {
  const inputRef = useRef();
  const hideBottomSheet = useStore(state => state.onDismiss);
  const setPage = useStore(state => state.onSubmit);

  return (
    <StyledPageInput>
      <input
        type="text"
        ref={inputRef}
        placeholder="페이지를 입력해주세요 (숫자)"
      />
      <button
        type="button"
        onClick={() => {
          setPage(inputRef.current.value);
          hideBottomSheet();
        }}
      >
        기록완료
      </button>
    </StyledPageInput>
  );
}

export default PageInput;
