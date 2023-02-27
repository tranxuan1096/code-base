import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { AUTH_ROUTES } from 'routes/path'

const NewPassword = () => {
  return (
    <Stack>
      NewPassword <Link to={AUTH_ROUTES.index.to}>Back to login</Link>
    </Stack>
  )
}

export default NewPassword
