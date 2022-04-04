'''
- **슬퍼요** ⇒ 슬픔(3) / 심리(7) -> 1건 범죄심리 / 기분전환
- **떠나고 싶어요** ⇒ 여행(31) / 해외여행 / 국내여행 / 가볼만한곳 => 여행(main) 카테고리 중 국내/테마/해외
- **행복해요** ⇒ 행복(6) / 기쁨(1) => 웹툰/카툰에세이 or 소설? 시 
- **무기력해요** ⇒ 자기계발(2) / 성장(34) / 인생변화 => 자기계발(main) 카테고리
- **심심해요** ⇒ 취미 / 일탈(1) / 심심할때 => 취미/실용/스포츠(main)
- **고민이 있어요** ⇒ 고민(3) / 상담(2) / 결정 / 심리

1. 책 설명 => '위로' => 범위로, 위로/아래로..... 
2. 책 추가 등록 => 30~ 50권? => isbn...없음.... 긁어오기.........!!!! 최대 150권...?
'''

from django.contrib.auth import get_user_model
from django.db.models import Q
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_400_BAD_REQUEST,
    HTTP_401_UNAUTHORIZED,
)
from accounts.token import get_request_user
from ..models import Survey, Category, Keyword, Bookshelf
from ..serializers.r_feeling import (
    FeelingCategorySerializer,
    FeelingKeywordSerializer
)

User = get_user_model()


@api_view(['GET'])
def recomm_feeling(request):
    '''
    GET: 기분에 따른 책 추천
    **feeling
        슬퍼요(0), 떠나고 싶어요(1), 행복해요(2), 무기력해요(3), 심심해요(4), 고민이 있어요(5),
    '''   
    # user = get_object_or_404(User, pk=4)
    user = get_request_user(request)
    if not user:
        return Response(status=HTTP_401_UNAUTHORIZED)

    if request.method == 'GET':
        # 서재에 등록된 책
        bookshelfs = Bookshelf.objects.filter(user_id=user.pk).values('book')
        my_books = []
        for bookshelf in bookshelfs:
            my_books.append(bookshelf['book'])

        try:
            feeling = Survey.objects.get(user_id=user.pk).feeling
            # feeling = 2
            keyword = [0, 5]
            if feeling in keyword:
                if feeling == 0:    # 슬픔
                    books = Keyword.objects.filter(word='위로').order_by('?')

                elif feeling == 5:  # 고민
                    books = Keyword.objects.filter(word='고민').order_by('?')

                recomm_books = []
                for book in books:
                    if len(recomm_books) == 10:
                        break
                    if not book.book_id in my_books:
                        recomm_books.append(book)
                serializer = FeelingKeywordSerializer(recomm_books, many=True)

            else:
                if feeling == 1:    # 여행
                    books = Category.objects.filter(~Q(sub='지도')).order_by('?')

                elif feeling == 2:  # 행복
                    books = Category.objects.filter(Q(sub='웹툰/카툰에세이') | Q(sub='테마에세이')).order_by('?')

                elif feeling == 3:  # 무기력
                    books = Category.objects.filter(sub='자기능력계발').order_by('?')

                elif feeling == 4:  # 심심
                    books = Category.objects.filter(main='취미/실용/스포츠').order_by('?')

                recomm_books = []
                for book in books:
                    if len(recomm_books) == 10:
                        break
                    if not book.book_id in my_books:
                        recomm_books.append(book)
                serializer = FeelingCategorySerializer(recomm_books, many=True)

            return Response(serializer.data)

        except:

            return Response(status=HTTP_400_BAD_REQUEST)
