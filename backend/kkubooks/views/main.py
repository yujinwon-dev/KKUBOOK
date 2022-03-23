from django.contrib.auth import get_user_model
from django.shortcuts import (
    get_list_or_404,
    get_object_or_404,
)
from rest_framework.decorators import api_view
from rest_framework.status import (
    HTTP_201_CREATED,
)
from rest_framework.response import Response

from ..models import (
    Book,
    KkubookMode,
    Commit,
    Bookshelf,
)
from ..serializers.book import (
    BookSerializer,
    BookSearchSerializer,
)
from ..serializers.commit import CommitSerializer
from ..serializers.bookshelf import (
    BookshelfSerializer,
    BookshelfRatingSerializer,
)

User = get_user_model()

def kkubookmode(request):
    pass

def search(request):
    '''
    GET: 검색하고자 하는 책의 정보를 가져온다.
    TODO
        search를 쿼리 스트링으로 받아오는게 어떤지...?
        책 정보를 뭐뭐 받아와야 하는지...?
    '''
    if request.method == 'GET':
        print(request.data)


@api_view(['GET'])
def booklist(request):
    '''
    GET: 읽고 있는 책의 상세 정보를 가져온다.
    '''
    if request.method == 'GET':
        book_id_list = Bookshelf.objects.filter(book_status=1).filter(user_id=1).values('book_id')
        books = []
        for id in book_id_list:
            book = get_object_or_404(Book, pk=id['book_id'])
            serializer = BookSerializer(book)
            books.append(serializer.data)
        return Response(books)


@api_view(['GET'])
def book_detail(request, book_id):
    '''
    GET: 책의 상세 정보를 가져온다.
    '''
    if request.method == 'GET':
        book = get_object_or_404(Book, pk=book_id)
        serializer = BookSerializer(book)
        return Response(serializer.data)


@api_view(['POST'])
def commit(request, book_id):
    '''
    POST: commit 생성
    TODO
        페이지 기록도 받아오는거 작성하기 
    '''
    if request.method == 'POST':
        serializer = CommitSerializer(data=request.data)
        user_id = User.objects.get(pk=request.data['user_id'])
        book_num = Book.objects.get(pk=book_id)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user_id=user_id, book_id=book_num)
            return Response(serializer.data, status=HTTP_201_CREATED)


@api_view(['GET'])
def commit_list(request):
    '''
    GET: commit 기록 모두 조회
    TODO
        언제부터 언제까지 기록을 받아올지 정하기
        기록만 있으면 그날에 True로 그냥 보내줘도 되는지
    '''
    if request.method == 'GET':
        commit_list = Commit.objects.filter(user_id=1)
        commits = []
        for commit in commit_list:
            serializer = CommitSerializer(commit)
            commits.append(serializer.data)
        return Response(commits)


@api_view(['PUT'])
def rating(request, book_id):
    '''
    POST: 다 읽은 책의 평점 등록하기
    '''
    # bookshelf = get_object_or_404(Bookshelf, pk=)
    # if request.method == 'PUT':
    #   serializer = BookshelfRatingSerializer(data=request.data)
    pass