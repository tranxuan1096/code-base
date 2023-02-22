import { createBreakpoints } from '@mui/system'

/**
 * Define Breakpoints MUI Theme
 * @see https://mui.com/material-ui/customization/breakpoints/
 */

const breakpoints = createBreakpoints({
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
})

export default breakpoints
