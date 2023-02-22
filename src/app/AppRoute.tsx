import NotFound from '@/components/common/NotFound/NotFound'
import { AUTH_ROUTES } from '@/routes/path'
import { Route, Routes } from 'react-router-dom'

const AppRoute = () => {
  return (
    <Routes>
      <Route path={AUTH_ROUTES.index.path} element={<>Hello</>} />
      {/* <Route
        path={DASHBOARD_ROUTES.index.path}
        element={
          <RequireIsLoggedIn redirectTo={rootPath}>
            <DashboardContainer />
          </RequireIsLoggedIn>
        }
      /> */}
      {/* <Route path="/design-system" element={<DesignSystem />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoute
