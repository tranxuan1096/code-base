import { Theme } from '@mui/material/styles'

export default function Radio(theme: Theme): Theme['components'] {
  return {
    MuiRadio: {
      defaultProps: {
        color: 'secondary',
      },
    },
  }
}
