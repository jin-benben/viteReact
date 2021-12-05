
import loadable from '@loadable/component'
import PageLoading from './PageLoading'

interface AsyncComponentProps {
  src: string;
}

const AsyncComponent: React.FC<AsyncComponentProps> = ({ src, ...props }) => {
  const Component = loadable(() => import(/* @vite-ignore */src));
  return <Component {...props} />;
};


export default AsyncComponent