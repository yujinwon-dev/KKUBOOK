from django.urls import path
from . import views

app_name='accounts'

urlpatterns = [
    path('', views.signout),
    path('kakao/login/', views.login_signup),
]
