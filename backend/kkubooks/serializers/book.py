from rest_framework import serializers
from ..models import Book

class BookSerializer(serializers.ModelSerializer):
    '''
    책 상세정보 가져오기
    '''
    class Meta:
        model = Book
        fields = '__all__'

class BookSearchSerializer(serializers.ModelSerializer):
    '''
    책 검색한 정보 가져오기
    '''
    class Meta:
        model = Book
        fields = ('title', 'img_url', )