import React, { useState } from 'react';
import { styled } from 'twin.macro';
import Navbar from '../components/common/Navbar';
import FabButton from '../components/common/FabButton';
import bookshelfCategories from '../constants/bookShelf';
import BookshelfCategory from '../components/bookshelf/BookshelfCategory';

const BookshelfPage = styled.div`
  header {
    padding-top: 50px;
    font-size: 30px;
    font-weight: bold;
  }

  .title {
    margin-left: 10px;
  }

  ul {
    display: flex;
    align-items: center;
    margin: 50px 10px 0px;
    padding: 5px;
  }

  li {
    list-style-type: none;
  }
`;

function BookShelf() {
  const [selectedCategory, setSelectedCategory] = useState(
    bookshelfCategories[0],
  );

  const selectCategory = category => {
    if (category.name !== selectedCategory.name) {
      setSelectedCategory(category);
    }
  };

  return (
    <>
      <BookshelfPage>
        <header>
          <p className="title">내 서재</p>
        </header>

        <ul>
          {bookshelfCategories.map(category => (
            <BookshelfCategory
              key={category.status}
              category={category}
              isSelected={selectedCategory.name === category.name}
              handleClick={selectCategory}
            />
          ))}
        </ul>
      </BookshelfPage>
      <Navbar />
      <FabButton />
    </>
  );
}

export default BookShelf;
