import Loadable from 'react-loadable';
import { Loading } from '@/components'

export const otherRoutes = [{
  path: '/login',
  component: Loadable({
    loading: Loading,
    loader: () => import('@/pages/Login/Index')
  })
}];

export default [{
  path: '/demo',
  component: Loadable({
    loading: Loading,
    loader: () => import('@/pages/Demo/Index')
  })
}, {
  path: '/index',
  component: Loadable({
    loading: Loading,
    loader: () => import('@/pages/Index/Index')
  })
}]
