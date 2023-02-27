import { APP_ROUTES } from '@constants/routes'
import AccountFeature from '@features/account'
import { RouteObject } from 'react-router-dom'

const configAppRoutes: RouteObject[] = [
  { path: APP_ROUTES.HOME.path, element: 'login' },
  {
    path: APP_ROUTES.ACCOUNT.path,
    element: <AccountFeature />,
  },
  {
    path: APP_ROUTES.PROJECT.path,
    element: 'project',
  },
  {
    path: APP_ROUTES.STACK.path,
    element: 'stack',
  },
]

export default configAppRoutes
