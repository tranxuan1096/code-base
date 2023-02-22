import { ReactNode } from 'react'

import { CssBaseline, GlobalStyles } from '@mui/material'
import {
  StyledEngineProvider,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles'

import globalStyles from './globalStyles'
import theme from './theme'

interface ThemeProviderProps {
  children: ReactNode
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={globalStyles} />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  )
}
