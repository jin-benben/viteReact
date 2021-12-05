export interface routesInfo{
  src:string,
  path:string,
  children?:routesInfo[]
}


const routes:routesInfo[]  = [
  {
    path:"/",
    src:'layout/BasicLayout',
    children:[
      {
        path:"/about",
        src:'pages/about/index'
      },
      {
         path:"/news",
         src:'pages/news/index'
       }
    ]
  },
  {
    path:"/blank",
    src:"layout/BlankLayout"
  }
]



export default routes