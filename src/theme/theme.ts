import { createTheme } from '@mui/material/styles'

import ComponentsOverrides from './overrides'
import palette from './palette'
// import shadows from './shadows'
import typography from './typography'

let theme = createTheme({
  palette,
  shape: { borderRadius: 5 },
  typography,
  // shadows: shadows(),
})

theme.components = ComponentsOverrides(theme)

export default theme
