import { API_BASE_URL } from './apiInstance';

function styledDate(date) {
  const inputDate = new Date(date);
  const year = inputDate.getFullYear();
  let month = inputDate.getMonth() + 1;
  let day = inputDate.getDate();
  let hour = inputDate.getHours();
  let min = inputDate.getMinutes();

  month = month >= 10 ? month : `0${month}`;
  day = day >= 10 ? day : `0${day}`;
  hour = hour >= 10 ? hour : `0${hour}`;
  min = min >= 10 ? min : `0${min}`;

  return `${year}-${month}-${day} ${hour}:${min}`;
}

const memoFormat = obj => {
  const styledMemo = {
    book_info: obj.book_info,
    content: obj.content,
    created_at: styledDate(obj.created_at),
    id: obj.id,
    is_img: obj.memo_img,
    memo_img: `${API_BASE_URL}${obj.memo_img}`,
    memo_mark: obj.memo_mark,
    updated_at: obj.updated_at,
  };
  console.log(styledMemo);
  return styledMemo;
};

export default memoFormat;
