import Axios, { AxiosInstance, Method, AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";
import { message } from 'antd';

const instance: AxiosInstance = Axios.create({
  timeout: 5000
});

/**
 * 拦截器
 */
instance.interceptors.request.use((config: AxiosRequestConfig) => {
  console.log('request拦截器', config)
  return config;
}, (err: AxiosError) => {
  return Promise.reject(err);
});

instance.interceptors.response.use((res: AxiosResponse) => {
  console.log('response拦截器', res)
  return res;
}, (err: AxiosError) => {
  return Promise.reject(err);
});

export default function (url: string, params: any = {}, type: Method = 'get', config: AxiosRequestConfig = {}) {

  return new Promise((resolve, reject) => {

    /**
     * 处理response数据
     * @param res
     */
    function handleRes(res: AxiosResponse) {
      if(res.status === 200) {
        if(res.data.error_code === 0) {
          resolve(res.data);
        } else {
          const {error_des} = res.data;
          message.error(error_des);
          reject(error_des);
        }
      } else {
        const { statusText } = res;
        message.error(statusText);
        reject(statusText);
      }
    }

    if (type === 'get') {
      instance.get(url, {
        params,
        ...config
      }).then((res: AxiosResponse) => {
        handleRes(res);
      }).catch((err: AxiosError) => {
        reject(err);
      })
    } else {
      // @ts-ignore
      instance[type](url, {
        ...params
      }, {
        ...config
      }).then((res: AxiosResponse) => {
        handleRes(res);
      }).catch((err: AxiosError) => {
        reject(err);
      })
    }
  })

}
