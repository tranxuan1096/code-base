import APP_IMG from '@assets/images'
import { Button } from '@mui/material'
import { Box } from '@mui/system'
import styles from '../style.module.scss'

const Login = () => {
  return (
    <Box
      className={styles.loginContainer}
      sx={{
        backgroundImage: `url(${APP_IMG.loginBgr})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '431px 100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <Box className={styles.leftBox}>
        <strong>Vinova</strong>
        <h2>Resource Management</h2>
        <p>The #1 tool to plan capacity and schedule work</p>
        <Button className={styles.MuiButtonBase}>Login with SSO</Button>
      </Box>
      <Box className={styles.rightBox}>
        <img
          src={APP_IMG.loginVector}
          alt="login vector"
          width="800"
          height="850"
        />
      </Box>
      <small>Version 1.1.24</small>
    </Box>
  )
}

export default Login
