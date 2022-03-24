from rest_framework import serializers
from ..models import Bookshelf

class BookshelfSerializer(serializers.ModelSerializer):

    class Meta:
        model = Bookshelf
        fields = '__all__'

  
class BookshelfRatingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Bookshelf
        fields = ('rating', )


class BookshelfCurrpageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Bookshelf
        fields = ('curr_page', )