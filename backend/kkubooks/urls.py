from django.urls import path
from .views import main

urlpatterns = [
    path('main/kkubookmode/', main.kkubookmode),
    path('main/search/', main.search),
    path('main/booklist/', main.booklist),
    path('main/book/<int:book_id>/', main.book_detail),
    path('main/<int:book_id>/commit/', main.commit),
    path('main/commits/', main.commit_list),
    path('main/<int:book_id>/rating/', main.rating)
]
