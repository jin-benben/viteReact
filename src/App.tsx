import { useMemo } from 'react'
import { useRoutes } from 'react-router-dom'
import {RouteObject} from 'react-router'
import AsyncComponent from '@src/components/AsyncComponent'
import routes, { routesInfo } from './routes'
import './App.less'

// 引入src下全部.tsx文件 https://cn.vitejs.dev/guide/features.html#glob-import
const modules = import.meta.glob('../**/*.tsx');
console.log(modules)
// 构建routes
const generateRoutes = (routes: routesInfo[]): RouteObject[] => {
  return routes.map(({ src, children,...ret }) => ({
    element: <AsyncComponent loader={modules[`../src/${src}.tsx`]} />,
    children: children && generateRoutes(children),
    ...ret
  }));
};

function App() {
  const Routes= useMemo(() => generateRoutes(routes), [routes]);
  return useRoutes(Routes)
}

export default App
