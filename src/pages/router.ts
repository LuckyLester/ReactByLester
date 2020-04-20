import Loadable from 'react-loadable';
import { Loading } from '@/components'

// export const

export default [{
  path: '/',
  component: Loadable({
    loading: Loading,
    loader: () => import('@/pages/Demo/Index')
  })
}, {
  path: '/login',
  component: Loadable({
    loading: Loading,
    loader: () => import('@/pages/Login/Index')
  })
}, {
  path: 'index',
  component: Loadable({
    loading: Loading,
    loader: () => import('@/pages/Index/Index')
  })
}]
