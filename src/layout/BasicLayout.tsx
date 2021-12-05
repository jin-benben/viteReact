import {Outlet,Link} from 'react-router-dom'

const BasicLayout = () => {
  return (
    <div>
      <Link to="/about">关于</Link>
      <Link to="/news">新闻</Link>
      <div style={{padding:9}}>
        <Outlet />
      </div>
    </div>
  )
}

export default BasicLayout
