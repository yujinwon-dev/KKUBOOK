import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'twin.macro';
import Navbar from '../components/common/Navbar';
import FabButton from '../components/common/FabButton';
import MemoContainer from '../components/memo/MemoContainer';
import memos from '../data/memos';

const Bar = styled.div`
  display: flex;
  justify-content: space-between;

  #search-icon {
    width: 30px;
    cursor: pointer;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  .form-check {
    align-self: end;
  }
`;

function Memo() {
  const navigate = useNavigate();
  const [likedMemos, setLikedMemos] = useState(false);

  return (
    <>
      <Navbar />
      <FabButton />
      <Bar>
        <h1>Memo</h1>
        <svg
          id="search-icon"
          width="50"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="#848282"
          onClick={() => navigate('/searchmemo')}
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </Bar>
      <Container>
        <div className="form-check">
          <input
            type="checkbox"
            onChange={() => {
              setLikedMemos(!likedMemos);
            }}
          />
          좋아하는 메모
        </div>
        {memos.map(memo => (
          <MemoContainer key={memo.id} memo={memo} />
        ))}
      </Container>
    </>
  );
}

export default Memo;
