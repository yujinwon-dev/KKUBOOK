from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from ..models import (
  Book,
  Bookshelf,
  Memo
)
from ..serializers.bookshelf import BookshelfSerializer
from ..serializers.memo import MemoSerializer
import datetime

@api_view(['POST'])
def create_book(request):
    # 서재에 책을 등록한다.
    if request.method == 'POST':
        serializer = BookshelfSerializer(data=request.data)
        # start_time = datatime.datetime.now()
        if serializer.is_valid(): # 유효한 값이 들어가는지 검사
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def bookshelf_detail(request, book_id):
    try:
        book = Bookshelf.objects.get(book_id=book_id)
    except book.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    # 서재에 등록된 책의 상태 및 페이지를 변경한다.
    if request.method == 'PUT':
        serializer = BookshelfSerializer(book, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # 서재에서 책을 삭제한다.
    elif request.method == 'DELETE':
        # 책을 삭제하면 해당 책에 작성한 메모도 함께 삭제된다.
        try:
            memo = Memo.objects.get(book_id=book_id)
            memo.delete()
        except memo.DoesNotExist:
            pass
        
        book.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def bookshelf_list(request):
    # 서재에 저장된 책 목록을 가져온다.
    if request.method == 'GET':
        bookshelf = Bookshelf.objects.all()
        serializer = BookshelfSerializer(bookshelf, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def get_memo(request, book_id):
    # 선택한 책의 메모를 가져온다.
    if request.method == 'GET':
        memolist = Memo.objects.filter(book_id=book_id)
        serializer = MemoSerializer(memolist, many=True)
        return Response(serializer.data)