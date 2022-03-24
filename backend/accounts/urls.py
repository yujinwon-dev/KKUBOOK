from django.urls import path
from . import views

app_name='accounts'

urlpatterns = [
    path('kakao/login/', views.kakao_login),
    path('kakao/callback/', views.kakao_login_callback),
    path('kakao/logout/', views.kakao_logout),
    path('signout/', views.signout),
]
