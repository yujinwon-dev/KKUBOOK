import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken, getUserInfo } from '../api/user';
import useStore from '../stores/user';

function KakaoRedirectHandler() {
  // 인가코드
  const code = new URL(window.location.href).searchParams.get('code');
  const setUserInfo = useStore(state => state.setUserInfo);
  const navigate = useNavigate();

  React.useEffect(() => {
    getToken(
      {
        grant_type: 'authorization_code',
        client_id: process.env.REACT_APP_REST_API_KEY,
        redirect_uri: 'http://localhost:3000/oauth/callback/kakao',
        code,
      },
      response => {
        const accessToken = response.data.access_token;
        getUserInfo(accessToken, res => {
          const {
            user_id,
            nickname,
            kkubook_complete,
            is_kkubook,
            access_token,
          } = res.data;
          axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
          setUserInfo({
            userId: user_id,
            kkubookComplete: kkubook_complete,
            isKkubook: is_kkubook,
            nickname,
          });
          navigate('/');
        });
      },
      () => {
        console.log('login failed');
      },
    );
  }, []);

  return (
    <>
      <h1>redirect page</h1>
      <p>hi</p>
    </>
  );
}

export default KakaoRedirectHandler;
