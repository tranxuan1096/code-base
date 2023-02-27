import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { AUTH_ROUTES } from 'routes/path'

type Props = {}

const ResetPassword = (props: Props) => {
  return (
    <Stack>
      ResetPassword <Link to={AUTH_ROUTES.index.to}>Back to login</Link>
    </Stack>
  )
}

export default ResetPassword
