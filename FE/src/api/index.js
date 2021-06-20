import axios from './config';

export const Login = async (params) => {
  const {data} = await axios.post('/api/auth/login', params);
  return data;
};

export const dupEmail = async (params) => {
  const {data} = await axios.post('/api/auth/reg/emaildup', params);
  return data;
};

export const dupId = async (params) => {
  const {data} = await axios.post('/api/auth/reg/iddup', params);
  return data;
};

export const singUp = async (params) => {
  const {data} = await axios.post('/api/auth/reg', params);
  return data;
};

export const googleLogin = async () => {
  await axios.get('/api/auth/google');
};
export const getPublicNotes = async (params) => {
  const {data} = await axios.get(`/api/search/?query=${params.query}`);
  return data;
};

export const getPublicNote = async (params) => {
  const {data} = await axios.get(`/api/search/note?idx=${params.idx}`);
  return data;
};
