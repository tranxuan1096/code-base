import Logo from '@/assets/icons/Logo'
import { AUTH_ROUTES } from '@/routes/path'
import { Box, Button, Stack } from '@mui/material'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Stack>
      <Logo />
      <Box>
        Login <Link to={AUTH_ROUTES.resetPassword.to}>Reset Password</Link>
      </Box>
      <Button onClick={console.log}>Click to Login</Button>
    </Stack>
  )
}

export default Login
