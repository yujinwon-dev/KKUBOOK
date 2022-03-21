from rest_framework import serializers
from ..models import Commit

class CommitSerializer(serializers.ModelSerializer):

  class Meta:
    model = Commit
    fields = '__all__'
    read_only_fields = ('user_id', 'book_id', )