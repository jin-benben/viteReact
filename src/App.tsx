import { useMemo, useState } from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import {RouteObject} from 'react-router'
import AsyncComponent from '@src/components/AsyncComponent'
import { Button } from 'antd'
import PageLoading from 'components/PageLoading'
import routes, { routesInfo } from './routes'
import logo from './logo.svg'
import './App.less'

const generateRoutes = (routes: routesInfo[]): RouteObject[] => {
  return routes.map(({ src, children,...ret }) => ({
    element: <AsyncComponent src={src} />,
    children: children && generateRoutes(children),
    ...ret
  }));
};

function App() {

  const Routes= useMemo(() => generateRoutes(routes), [routes]);

  console.log(Routes)
  
  return useRoutes(Routes)
}

export default App
