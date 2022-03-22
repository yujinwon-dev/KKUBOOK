from django.http import JsonResponse
import requests
from django.shortcuts import redirect, get_object_or_404
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_204_NO_CONTENT
)
from .serializers import UserSerializer


User = get_user_model()


def kakao_login(request):
    '''
    kakao로 로그인 요청
    '''
    app_key = 'eb4ced649528e56b1678683eea8de0e7'
    base_url = 'http://localhost:8000/'
    redirect_uri = 'api/v1/accounts/kakao/callback/'
    kakao_auth_api = 'https://kauth.kakao.com/oauth/authorize?response_type=code'
    return redirect(
        f'{kakao_auth_api}&client_id={app_key}&redirect_uri={base_url}{redirect_uri}'
    )


def kakao_callback(request):
    '''
    token 발급
    DB에 없는 사용자일 경우, DB에 저장
    '''
    auth_code = request.GET.get('code')
    kakao_token_api = 'https://kauth.kakao.com/oauth/token'
    kakao_user_api = 'https://kapi.kakao.com/v2/user/me'
    base_url = 'http://localhost:8000/'
    redirect_uri = 'api/v1/accounts/kakao/callback/'

    data = {
        'grant_type': 'authorization_code',
        'client_id': 'eb4ced649528e56b1678683eea8de0e7',
        'redirection_uri': f'{base_url}{redirect_uri}',
        'code': auth_code
    }
    # token 발급
    token_response = requests.post(kakao_token_api, data=data).json()
    access_token = token_response.get('access_token')

    # user 정보
    user_info = requests.get(
        kakao_user_api, 
        headers={"Authorization": f'Bearer ${access_token}'}
        ).json()
    
    email = user_info['kakao_account']['email']
    nickname = user_info['kakao_account']['profile']['nickname']
    if not User.objects.filter(kakao_email=email).exists():
        User.objects.create(
            kakao_email = email,
            nickname = nickname
            )
        print(f'SignIn {email}')
    else:
        print('존재하는 회원입니다.')
    
    return JsonResponse({"token": token_response})


def kakao_logout(request):
    '''
    TODO:
        프론트에서 바로 요청하기..?
    '''
    kakao_logout_api = 'https://kapi.kakao.com/v1/user/logout'
    access_token = 'x7aSuoaMp5xXyrpak3-YvByuEOXVWng1uPcARwo9dVoAAAF_sEO5pA'
    requests.post(
        kakao_logout_api, 
        headers={"Authorization": f'Bearer ${access_token}'}
    )


def signout(request):
    '''
    DELETE: 사용자 정보를 DB에서 삭제
    '''
    user = User.objects.filter(user=request.user)
    user.delete()
    return Response(status=HTTP_204_NO_CONTENT)


def get_or_delete_user(request):
    '''
    GET: 사용자 정보 조회
    DELETE: 사용자 정보 DB에서 삭제
    '''
    print('여기?')
    print(request.user)
    user = User.objects.filter(id=2)
    print('err?')
    print(user)
    print(request.method)
    if request.method == 'GET':
        serializer = UserSerializer(User)
        return Response(serializer.data)

    elif request.method == 'POST':
        user.delete()
        return Response(status=HTTP_204_NO_CONTENT)
