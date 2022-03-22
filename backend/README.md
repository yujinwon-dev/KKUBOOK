# 특화 PJT_backend

## 백엔드 실행

1. 가상환경 설정 및 실행

   ```bash
   # 가상환경 생성 (최초)
   python -m venv venv
   
   # 가상환경 실행 (프로젝트 실행마다)
   source venv/scripts/activate
   ```



2. 패키지 설치하기

   ```bash
   # 패키지 설치
   pip install -r requirements.txt
   
   # 패키지 저장 (패키지 변경시 실행)
   pip freeze > requirements.txt
   ```

​		

3. mariadb 설치

   > [참고 링크](https://ministar.tistory.com/4)



4. Migration

   > 모델 클래스의 수정 (및 생성 )을 DB에 적용하는 과정

   ```bash
   # 마이그레이션 생성
   python manage.py makemigrations
   
   # DB에 적용
   python manage.py migrate
   ```



5. 실행

   ```bash
   python manage.py runserver
   ```

   