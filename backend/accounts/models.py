from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    kakao_email = models.CharField(max_length=30)
    nickname = models.CharField(max_length=30)
    phone = models.CharField(max_length=30)
    kkubook_complete = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f'{self.pk}: {self.nickname}'

