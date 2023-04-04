import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'X-Custom-Header': 'foobar',
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    config.headers['Access-Control-Allow-Origin'] = true;
    config.headers['Access-Control-Allow-Credentials'] = true;
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

export { instance };
