from django.urls import path
from . import views

app_name='accounts'

urlpatterns = [
    path('', views.get_or_delete_user),
    path('kakao/login/', views.kakao_login),
    path('kakao/callback/', views.kakao_callback),
    path('kakao/logout/', views.kakao_logout),
]
