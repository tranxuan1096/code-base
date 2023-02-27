import { RouteObject, useRoutes } from 'react-router-dom'
import { DetailAccount } from './pages/DetailAccount'
import { ListAccount } from './pages/ListAccount'

const configRoutes: RouteObject[] = [
  {
    index: true,
    element: <ListAccount />,
  },
  {
    path: 'add',
    element: <DetailAccount />,
  },
  {
    path: ':id/edit',
    element: <DetailAccount />,
  },
]

function AccountFeature() {
  const routes = useRoutes(configRoutes)
  return routes
}

export default AccountFeature
