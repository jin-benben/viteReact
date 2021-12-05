import {Spin} from 'antd'
import { SpinProps } from 'antd'
const PageLoading:React.FC<SpinProps> = (props)=>{
  return <Spin {...props}/>
}

export default PageLoading