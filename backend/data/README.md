# DATA 전처리

> 하다가 에러 발생시, 카톡 or 전화(01088958628) 주세요😊



## Ⅰ. 분배

| 담당자 | 파일  |
| ------ | ----- |
| 백민아 | 1~4   |
| 원유진 | 5~6   |
| 이소현 | 7~9   |
| 최승연 | 10~11 |
| 최시열 | 12~14 |
| 한우리 | 15~16 |





## Ⅱ. 참고사항

- 데이터를 더 작은 단위로 쪼개서 하고 싶은 경우

  1. `backend/data/split.py`로 이동

  2. 9번째 라인의 newsize 값을 쪼개고 싶은 사이즈로 변경

     ![image-20220325164559024](C:\Users\multicampus\Desktop\SSAFY\3.특화PJT\kkubook\backend\data\README.assets\image-20220325164559024.png)

  3. 생성된 csv 파일을 Ⅲ-1 과 동일하게 실행

  4. `backend/data/books.py` 실행 전, 6번째 라인의 input_path에서 `_`를 `__(언더바 2개)`로 수정한다.

     ![image-20220325165158051](C:\Users\multicampus\Desktop\SSAFY\3.특화PJT\kkubook\backend\data\README.assets\image-20220325165158051.png)

- **실행 시, 주의사항**

  아래의 이미지와 같이, 커서가 데이터 끝에 있는 상태에서 `*.py`파일 실행 시, 그 뒤부터 작성되니, 혹시라도 `*.csv` 파일을 확인 후, 실행하는 경우, 커서를 가장 마지막 공백라인에 두고 저장해주세요.

  ![image-20220325165449426](C:\Users\multicampus\Desktop\SSAFY\3.특화PJT\kkubook\backend\data\README.assets\image-20220325165449426.png)





## Ⅲ. 실행

1. 해당되는 데이터 파일들을 `backend/data/data` 폴더로 이동한다

   - 데이터를 읽어올 파일: `book_(num).csv`
   - 데이터를 쓸 파일: `book_table.csv`, `category_table.csv`, `keyword_table.csv`

   ![image-20220325155912741](C:\Users\multicampus\Desktop\SSAFY\3.특화PJT\kkubook\backend\data\README.assets\image-20220325155912741.png)



2. `backend/data/books.py`로 이동하여 코드 실행

   > print문의 경우 디버깅용으로, 주석처리 후 실행하여도 무관

   - 파일 하나씩 실행하고 싶은 경우

     - 6번째 라인의 `input_path`에서 `*` 부분을 실행하고자 하는 파일의 숫자로 변경

       ![image-20220325163355029](C:\Users\multicampus\Desktop\SSAFY\3.특화PJT\kkubook\backend\data\README.assets\image-20220325163355029.png) 

   - 파일을 한번에 실행하고 싶은 경우

     - 1번 코드 주석처리, 2번 코드 주석해제하여 코드 실행



3. `backend/data/categories.py`, `backend/data/keywords.py`로 이동하여 코드 실행
   - `books.py` 실행 종료 후, 진행
   - 두 파일의 경우 실행 순서 무관



