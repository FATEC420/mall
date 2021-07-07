import axios from 'axios'

export function request(config) {
  //创建axios对象的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  instance.interceptors.request.use(config => {
    return config
  }, err => {

  })
  //响应拦截
  instance.interceptors.request.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })
  //发生真正的拦截请求
  return instance(config)
}