import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider  } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'moment/locale/zh-cn';
import './index.css';
import App from './layout/Index';
import * as serviceWorker from './serviceWorker';
// import '@babel/polyfill/lib';
// <React.StrictMode>

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
