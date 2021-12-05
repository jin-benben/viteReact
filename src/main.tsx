
/****入口文件***/

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import {ConfigProvider} from 'antd'
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.less'
import './index.css'
import App from './App'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
