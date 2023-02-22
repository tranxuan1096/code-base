import { type PaletteOptions } from '@mui/material/styles'

export const light: PaletteOptions = {
  mode: 'light',

  primary: {
    main: '#004744',
  },

  background: {
    default: '#002031',
  },

  example: {
    primary: '#49b4ff',
    secondary: '#ef3054',
  },
}

export const dark: PaletteOptions = {
  mode: 'dark',

  primary: {
    main: '#004744',
  },

  background: {
    default: '#002031',
  },

  example: {
    primary: '#49b4ff',
    secondary: '#ef3054',
  },
}

/**
 * Append custom variables to the palette object.
 * https://mui.com/material-ui/customization/theming/#custom-variables
 */
declare module '@mui/material/styles' {
  interface Palette {
    example: {
      primary: string
      secondary: string
    }
  }

  interface PaletteOptions {
    example: {
      primary: string
      secondary: string
    }
  }
}
