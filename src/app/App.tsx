import NotFound from '@/components/common/NotFound/NotFound'
import DraftContainer from '@/features/draft/DraftContainer'
import { AUTH_ROUTES } from '@/routes/path'
import { Route, Routes } from 'react-router-dom'

function App() {
  console.log(import.meta.env.VITE_URL_API)

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
      <Route path="/draft" element={<DraftContainer />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
