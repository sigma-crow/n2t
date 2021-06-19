import axios from 'axios';
import storageHandler from '@utils/localStorage';

const fillterCode = [403];

const token = storageHandler.get();
const Axios = axios.create({
  headers: {Authorization: `bearer ${token}`},
  timeout: 3000,
});

Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!fillterCode.includes(error.response.status))
      alert(`${error.response?.data?.message || error.message}`);
    if (error.response.status === 401) {
      storageHandler.clear();
      window.location.reload();
    }
    return Promise.reject(error);
  },
);

export default Axios;
