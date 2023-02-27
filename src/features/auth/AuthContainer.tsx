import NotFound from '@components/common/NotFound/NotFound'
import AuthLayout from '@components/layout/AuthLayout'
import { Route, Routes } from 'react-router-dom'
import { AUTH_ROUTES } from 'routes/path'
import NewPassword from './containers/ForgotPassword'
import Login from './containers/Login'
import ResetPassword from './containers/ResetPassword'

function AuthContainer() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route
          path={AUTH_ROUTES.resetPassword.path}
          element={<ResetPassword />}
        />
        <Route path={AUTH_ROUTES.newPassword.path} element={<NewPassword />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default AuthContainer
