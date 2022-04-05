import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'twin.macro';
import Navbar from '../components/common/Navbar';
import FabButton from '../components/common/FabButton';
import SelectEmotion from '../components/recommendation/SelectEmotion';
import RecommendCategory from '../components/recommendation/RecommendCategory';
import useStoreUserInfo from '../stores/user';
import useStoreFeelingBooks from '../stores/recommend';
import {
  getUserBooks,
  getBestBooks,
  getSimilarBooks,
  getFeelingBooks,
} from '../api/recommend';

const RecommendRoot = styled.div`
  padding: 1rem;
  padding-top: 4rem;
  padding-bottom: 5rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 4rem;
  .header {
    font-size: 30px;
    font-weight: bold;
  }
  #search-icon {
    width: 30px;
    cursor: pointer;
  }
`;

function Recommendation() {
  const navigate = useNavigate();
  const userNickname = useStoreUserInfo(state => state.userInfo.nickname);
  const userTitle = `${userNickname} 님을 위한 추천`;
  const bestTitle = '베스트셀러';
  const similarTitle = '비슷한 독자의 책장';
  const feelingTitle = '지금 감성엔 이런 책';

  const [userBooks, setUserBooks] = useState([]);
  const [bestBooks, setBestBooks] = useState([]);
  const [similarBooks, setSimilarBooks] = useState([]);
  const storeFeelingBooks = useStoreFeelingBooks(
    useCallback(state => state.setBooks),
  );
  const feelingBooks = useStoreFeelingBooks(state => state.books);
  async function apiUserBooks() {
    const getBooks = await getUserBooks();
    return setUserBooks(getBooks);
  }
  async function apiBestBooks() {
    const getBooks = await getBestBooks();
    return setBestBooks(getBooks);
  }
  async function apiSimilarBooks() {
    const getBooks = await getSimilarBooks();
    return setSimilarBooks(getBooks);
  }
  async function apiFeelingBooks() {
    const getBooks = await getFeelingBooks();
    return storeFeelingBooks(getBooks);
  }

  useEffect(() => {
    apiUserBooks();
    apiBestBooks();
    apiSimilarBooks();
    apiFeelingBooks();
  }, []);

  return (
    <>
      <Navbar />
      <FabButton />
      <RecommendRoot>
        <Header>
          <p className="header">추천</p>
          <svg
            id="search-icon"
            width="50"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="#848282"
            onClick={() => navigate('/searchkeyword')}
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </Header>
        <SelectEmotion />
        <div>
          {userBooks.length ? (
            <RecommendCategory title={userTitle} books={userBooks} />
          ) : null}
          <RecommendCategory title={bestTitle} books={bestBooks} />
          {similarBooks.length ? (
            <RecommendCategory title={similarTitle} books={similarBooks} />
          ) : null}
          <RecommendCategory title={feelingTitle} books={feelingBooks} />
        </div>
      </RecommendRoot>
    </>
  );
}

export default Recommendation;
