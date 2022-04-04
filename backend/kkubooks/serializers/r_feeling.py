from rest_framework import serializers
from ..models import Category, Keyword
from .book import BookSearchSerializer


class FeelingCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('book', )
    
    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['book_info'] = BookSearchSerializer(instance.book).data
        return response


class FeelingKeywordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Keyword
        fields = ('book', )
    
    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['book_info'] = BookSearchSerializer(instance.book).data
        return response