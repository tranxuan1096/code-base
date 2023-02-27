import { Theme } from '@mui/material/styles'

export default function Checkbox(theme: Theme): Theme['components'] {
  return {
    MuiCheckbox: {
      defaultProps: {
        color: 'secondary',
      },
    },
  }
}
