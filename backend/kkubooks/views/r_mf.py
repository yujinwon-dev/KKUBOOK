import requests
from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from ..models import (
  Book,
  Bookshelf,
  Survey,
  Category
)
from ..serializers.book import (
    BookSearchSerializer,
)
from accounts.token import get_request_user
from django.db.models import Q
import pickle

User = get_user_model()

@api_view(['GET'])
def recomm_mf(request):
    if request.method == 'GET':
        #user = get_object_or_404(User, pk=15)
        user = get_request_user(request)

        if not user:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        if(Bookshelf.objects.filter(user_id=user).count()>=3):  # mf 기반
            pickle_path = 'kkubooks/predict_result'
            recomm_result = pickle.load(open(pickle_path, 'rb'))
            print(recomm_result)

            recomm_result = recomm_result[recomm_result['user_id']==user.pk]
            recomm_result = recomm_result['id'].values.tolist()
            print(recomm_result)

            recomm_booklist = []
            for book_id in range(len(recomm_result)):
                book = Book.objects.get(pk=recomm_result[book_id])
                recomm_booklist.append(book)

            serializer = BookSearchSerializer(recomm_booklist, many=True)
            return Response(serializer.data)
        
        else:  # 서재에 책 데이터가 3개 미만인 경우 -> 설문기반
            survey = get_object_or_404(Survey, user_id=user.pk)

            my_interest = list(survey.interest.split())
            interest_list = ['!@#$%^'] * 5
            index=0
            for i in my_interest:
                interest_list[index] = i
                index += 1
            
            print(interest_list)
            
            # 분량 : 얇은 책/보통인 책/두꺼운 책/아무거나
            q=Q()
            if survey.amount==0:  # 얇은 책:0
                q &= Q(book__page__lte=200)
            elif survey.amount==1:  # 보통인 책
                q &= Q(book__page__lte=400)
            elif survey.amount==2:  # 두꺼운 책
                q &= Q(book__page__gt=400)
            elif survey.amount==3:  # 아무거나
                q &= Q(book__page__lte=0)

            # 장르 : 아무거나(0)/ 문학(1)/ 과학(2)/ 사회(3)/ 예술(4)/ 자기계발(5) 
            if survey.category==0:  
                recomm_category = Category.objects.all().filter(q).order_by('?')
            elif survey.category==1:  
                recomm_category = Category.objects.filter(survey_category=1).filter(Q(book__description__contains=interest_list[0]) | Q(book__description__contains=interest_list[1]) | Q(book__description__contains=interest_list[2]) | Q(book__description__contains=interest_list[3]) | Q(book__description__contains=interest_list[4])).filter(q).order_by('?')
            elif survey.category==2:  
                recomm_category = Category.objects.filter(survey_category=2).filter(Q(book__description__contains=interest_list[0]) | Q(book__description__contains=interest_list[1]) | Q(book__description__contains=interest_list[2]) | Q(book__description__contains=interest_list[3]) | Q(book__description__contains=interest_list[4])).filter(q).order_by('?')
            elif survey.category==3:  
                recomm_category = Category.objects.filter(survey_category=3).filter(Q(book__description__contains=interest_list[0]) | Q(book__description__contains=interest_list[1]) | Q(book__description__contains=interest_list[2]) | Q(book__description__contains=interest_list[3]) | Q(book__description__contains=interest_list[4])).filter(q).order_by('?')
            elif survey.category==4:  
                recomm_category = Category.objects.filter(survey_category=4).filter(Q(book__description__contains=interest_list[0]) | Q(book__description__contains=interest_list[1]) | Q(book__description__contains=interest_list[2]) | Q(book__description__contains=interest_list[3]) | Q(book__description__contains=interest_list[4])).filter(q).order_by('?')
            elif survey.category==5:  
                recomm_category = Category.objects.filter(survey_category=5).filter(Q(book__description__contains=interest_list[0]) | Q(book__description__contains=interest_list[1]) | Q(book__description__contains=interest_list[2]) | Q(book__description__contains=interest_list[3]) | Q(book__description__contains=interest_list[4])).filter(q).order_by('?')
            

            # 내 서재에 있는 책 제외
            bookshelf = Bookshelf.objects.filter(user_id=user.pk)
            my_book = bookshelf.values('book_id').distinct()

            recomm_booklist = []
            for book in recomm_category:
                if book not in my_book:
                    recomm_booklist.append(Book.objects.get(pk=book.book_id))
                    serializer = BookSearchSerializer(recomm_booklist, many=True)
                    return Response(serializer.data)

                if len(recomm_booklist) == 10:
                    break

            return Response(serializer.data)