import { Theme } from '@mui/material/styles'
import { VinovaPalette } from '../palette'

export default function Input(theme: Theme) {
  return {
    MuiInputBase: {
      styleOverrides: {},
      defaultProps: {
        color: 'secondary',
      },
    },
    MuiInput: {
      styleOverrides: {},
      defaultProps: {
        color: 'secondary',
      },
    },
    MuiFilledInput: {
      styleOverrides: {},
      defaultProps: {
        color: 'secondary',
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: '42px',
          backgroundColor: 'white',
          boxSizing: 'border-box',
          '&:not(.Mui-error):not(.Mui-disabled):hover .MuiOutlinedInput-notchedOutline':
            {
              borderColor: theme.palette.secondary.main,
            },
        },
        notchedOutline: {
          borderColor: VinovaPalette.NEUTRAL['d2'],
        },
        input: {
          padding: '12px 16px',
          '&::placeholder': {
            color: VinovaPalette.NEUTRAL['9'],
          },
        },
      },
      defaultProps: {
        color: 'secondary',
      },
    },
    MuiTextField: {
      styleOverrides: {},
      defaultProps: {
        InputLabelProps: { shrink: true },
      },
    },
  }
}
