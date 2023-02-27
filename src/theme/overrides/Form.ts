import { Theme } from '@mui/material/styles'
import { VinovaPalette } from '../palette'

export default function Forms(theme: Theme): Theme['components'] {
  return {
    MuiFormControl: {
      defaultProps: {
        color: 'secondary',
      },
    },
    MuiFormControlLabel: {},
    MuiFormGroup: {},
    MuiFormHelperText: {},
    MuiFormLabel: {
      styleOverrides: {
        root: {
          ...theme.typography.caption,
          fontWeight: 500,
          color: VinovaPalette.NEUTRAL['3'],
        },
        asterisk: {
          color: theme.palette.error.main,
        },
      },
      defaultProps: {
        color: 'secondary',
      },
    },
  }
}
