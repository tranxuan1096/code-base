import { Theme } from '@mui/material/styles'

export default function Button(theme: Theme) {
  return {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        color: 'secondary',
        disableElevation: true,
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: '5px',
          border: '1px solid currentColor',
        },
        sizeSmall: {
          width: '30px',
          height: '30px',
        },
        sizeMedium: {
          width: '40px',
          height: '40px',
        },
        sizeLarge: {
          width: '50px',
          height: '50px',
        },
      },
    },
  }
}
