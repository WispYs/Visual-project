import axios from 'axios';
let axiosVisual = axios.create();  // 金融接口

axiosVisual.interceptors.request.use(
  config => {
    let token = localStorage.getItem('VISUAL_TOKEN') || '';
    config.headers.Authorization = `${token}`;
    return config;
  },
  err => {
    return Promise.reject(err);
});

axiosVisual.interceptors.response.use(
  rep => (rep.data.code == 20000) ? rep.data : Promise.reject(rep.data.message),
  err => Promise.reject(err.toString())
);

export default axiosVisual;
