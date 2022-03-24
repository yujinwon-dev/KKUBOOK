import apiInstance from '../utils/apiInstance';

const formUrlEncoded = x =>
  Object.keys(x).reduce((p, c) => `${p}&${c}=${encodeURIComponent(x[c])}`, '');

export function getToken(data, success, fail) {
  apiInstance
    .post('https://kauth.kakao.com/oauth/token', formUrlEncoded(data), {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        Authorization: process.env.REACT_APP_ADMIN_KEY,
      },
    })
    .then(success)
    .catch(fail);
}

export function getUserInfo(accessToken, success, fail) {
  apiInstance
    .post('accounts/kakao/login/', { access_token: accessToken })
    .then(success)
    .catch(fail);
}
