from django.db import models
from django.conf import settings


class Book(models.Model):
    isbn = models.CharField(max_length=30)
    title = models.CharField(max_length=100)
    description = models.TextField()
    author = models.CharField(max_length=30)
    publisher = models.CharField(max_length=30)
    img_url = models.CharField(max_length=255)
    page = models.IntegerField()

    def __str__(self):
        return f'{self.pk}: {self.title}'


class KkubookMode(models.Model):
    user_id = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    level = models.IntegerField()
    kkubook_days = models.IntegerField()
    notcommit_days = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Memo(models.Model):
    user_id = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    book_id = models.ForeignKey(Book, on_delete=models.PROTECT)
    # TODO: content/memo_img blank or null 설정 및 이미지 upload 경로 
    content = models.TextField(max_length=500)
    memo_img = models.ImageField()
    memo_mark = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def img_path(instance, filename):
        pass


class Commit(models.Model):
    user_id = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    book_id = models.ForeignKey(Book, on_delete=models.PROTECT)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()


class Bookshelf(models.Model):
    '''
    book_status: 0-읽은책/1-읽는중/2-읽고싶은/3-중단
    rating
        1(읽는중): 0 으로 변경
        0(완독): 평점 받기
    '''
    user_id = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    book_id = models.ForeignKey(Book, on_delete=models.PROTECT)
    book_status = models.IntegerField(default=2)
    curr_page = models.IntegerField(default=0)
    # TODO: *_date blank or null 설정
    start_date = models.DateField()
    end_date = models.DateField()
    rating = models.IntegerField(default=5)


class Survey(models.Model):
    # TODO: ForeignKey(unique=Ture) or OneToOneField?
    user_id = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)


class Category(models.Model):
    # TODO: ForeignKey(unique=Ture) or OneToOneField?
    book_id = models.ForeignKey(Book, on_delete=models.PROTECT)
    main = models.CharField(max_length=50)
    sub = models.CharField(max_length=50)


class Keyword(models.Model):
    book_id = models.ForeignKey(Book, on_delete=models.PROTECT)
    word = models.CharField(max_length=30)