import apiInstance from '../utils/apiInstance';

export function apiPostMemo(reqData, success, fail) {
  apiInstance.post('kkubooks/memo/', reqData).then(success).catch(fail);
}

export function apiGetMemos(success, fail) {
  apiInstance.get('kkubooks/memolist/').then(success).catch(fail);
}

export function apiPutMemo({ memo_id }, reqData, success, fail) {
  apiInstance
    .put(`kkubooks/memo/${memo_id}/`, reqData)
    .then(success)
    .catch(fail);
}

export function apiDeleteMemo({ memo_id }, success, fail) {
  apiInstance.delete(`kkubooks/memo/${memo_id}/`).then(success).catch(fail);
}

export function apiPutLikeMemo({ memo_id }, reqData, success, fail) {
  apiInstance
    .put(`kkubooks/memo/bookmark/${memo_id}/`, reqData)
    .then(success)
    .catch(fail);
}
