import { Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <Stack
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      bgcolor="background.default"
    >
      <Outlet />
    </Stack>
  )
}

export default AuthLayout
