from rest_framework import serializers
from django.contrib.auth import get_user_model


User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    # kkubook_mode = serializers.SerializerMethodField()
    # print(kkubook_mode)
    class Meta:
        model = User
        fields = ('id', 'nickname', 'kkubook_complete',)

    # def is_kkubook(self, obj):
    #     print('------------------------------------------------')
    #     print(obj)
    #     return True

