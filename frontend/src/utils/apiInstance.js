import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api/v1';

const apiInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});
apiInstance.defaults.headers.common.Authorization = `Bearer ${sessionStorage.getItem(
  'Authorization',
)}`;

export default apiInstance;
