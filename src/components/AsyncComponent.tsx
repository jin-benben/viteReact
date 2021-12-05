
import loadable from '@loadable/component'
import PageLoading from './PageLoading'

interface AsyncComponentProps {
  loader:()=>Promise<any>;
}

const AsyncComponent: React.FC<AsyncComponentProps> = ({ loader, ...props }) => {
  const Component = loadable(loader,{
    fallback:<PageLoading spinning/>
  });
  return <Component {...props} />;
};


export default AsyncComponent