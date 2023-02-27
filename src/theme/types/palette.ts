/**
 * Append custom variables to the palette object.
 * https://mui.com/material-ui/customization/theming/#custom-variables
 */
declare module '@mui/material/styles' {
  interface PaletteColor {
    light: string
    main: string
    dark: string
    contrastText: string
  }
}

export {}
