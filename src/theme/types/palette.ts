/**
 * Append custom variables to the palette object.
 * https://mui.com/material-ui/customization/theming/#custom-variables
 */
declare module '@mui/material/styles' {
  interface PaletteColor {
    lighter?: string
    light: string
    main: string
    dark: string
    darker?: string
    contrastText: string
  }
}

export {}
