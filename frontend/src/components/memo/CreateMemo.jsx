import React, { useState, memo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { styled, css } from 'twin.macro';
import Header from '../common/Header';
import { apiPostMemo } from '../../api/memo';
import { selectedBookStore } from '../../stores/book';

const BarButton = styled.button`
  font-size: 17px;
  width: 3rem;
  color: #848282;
  border: none;
  background-color: #ffffff;
  cursor: pointer;
`;

const MemoForm = styled.div`
  padding: 1rem;
  padding-top: 4rem;
  width: 100%;
  height: 100%;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 40vh;
  margin-bottom: 1rem;
  :hover {
    opacity: 0.6;
  }

  .image-upload {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #a1a1a1;
    border-radius: 10px;

    #input-img {
      width: 50px;
    }
  }
  label {
    cursor: pointer;
  }
  input {
    display: none;
  }
  .image-preview {
    position: relative;

    #close-icon {
      position: absolute;
      right: 15px;
      top: 10px;
      cursor: pointer;
      width: 30px;
      height: 30px;
      z-index: 1;
    }
  }
`;

const MemoImg = styled.div`
  ${props =>
    props.value &&
    css`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('${props.value}');
      background-repeat: no-repeat;
      background-position: center center;
      background-size: contain;
    `}
`;

const TextBox = styled.div`
  width: 100%;
  height: 40vh;
  textarea {
    padding: 1rem;
    line-height: 1.5rem;
    background-color: #f2f2f2;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    border: none;
    resize: none;
    outline: none;
  }
`;

function CreateMemo({ backClickHandler }) {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedBook = selectedBookStore(state => state.selectedBook);
  const bookId = selectedBook.bookId || location.state.id;
  const bookTitle = selectedBook.bookInfo.title || location.state.title;

  const [text, setText] = useState('');
  const [loadImg, setLoadImg] = useState(null);
  const [showImg, setShowImg] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);

  function handleImageChange(event) {
    if (event.target.files && event.target.files[0]) {
      setLoadImg(event.target.files[0]);

      const reader = new FileReader();

      reader.onload = function (event) {
        setShowImg(event.target.result);
        setIsUploaded(true);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  function postMemo() {
    const goBack = () => navigate(-1);
    const goBackHandler = backClickHandler || goBack;

    const formData = new FormData();
    if (loadImg !== null) {
      formData.append('memo_img', loadImg);
    }
    formData.append('book', bookId);
    formData.append('content', text);
    formData.append('enctype', 'multipart/form-data');

    if (text !== '' || loadImg !== null) {
      apiPostMemo(formData);
      goBackHandler();
    } else {
      alert('메모를 입력해주세요');
    }
  }

  return (
    <>
      <Header title={bookTitle} backClickHandler={backClickHandler}>
        <BarButton onClick={() => postMemo()}> 저장 </BarButton>
      </Header>
      <MemoForm>
        <ImageBox>
          {!isUploaded ? (
            <>
              <label className="image-upload" htmlFor="upload-input">
                <svg
                  id="input-img"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="#a1a1a1"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              <input
                id="upload-input"
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleImageChange}
              />
            </>
          ) : (
            <div className="image-upload image-preview">
              <svg
                id="close-icon"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="#848282"
                onClick={() => {
                  setIsUploaded(false);
                  setShowImg(null);
                  setLoadImg(null);
                }}
                aria-label="닫기"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <MemoImg value={showImg} aria-label="메모 이미지" />
            </div>
          )}
        </ImageBox>
        <TextBox>
          <textarea
            placeholder="메모를 작성해보세요"
            value={text}
            onChange={event => setText(event.target.value)}
          />
        </TextBox>
      </MemoForm>
    </>
  );
}

export default memo(CreateMemo);
