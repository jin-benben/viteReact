export interface routesInfo{
  src:string,
  path:string,
  children?:routesInfo[]
}

const routes:routesInfo[]  = [
  {
    path:"/",
    src:'../pages/about'
  },
 {
   path:"/about",
   src:'../pages/about'
 },
 {
    path:"/news",
    src:'../pages/news'
  }
]



export default routes