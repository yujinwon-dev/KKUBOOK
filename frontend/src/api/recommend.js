import apiInstance from '../utils/apiInstance';

// 사용자 기반 추천 목록
export function getUserBooks(success, fail) {
  apiInstance.get('kkubooks/recommend/userbased').then(success).catch(fail);
}

// 베스트셀러
export function getBestBooks(success, fail) {
  apiInstance.get('kkubooks/recommend/bestseller').then(success).catch(fail);
}
