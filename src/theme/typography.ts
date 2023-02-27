import type { ThemeOptions } from '@mui/material/styles'

import breakpoints from './breakpoints'
import { ResponsiveFontSize } from './types'

const REM_BASE = 16

const FONT_PRIMARY = '"Poppins", sans-serif' // Google Font

const typography: ThemeOptions['typography'] = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 300,
  fontWeightMedium: 400,
  fontWeightBold: 700,
  h1: {
    fontWeight: 400,
    lineHeight: 1.3,
    fontSize: pxToRem(24),
    // ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  },
  h2: {
    fontWeight: 500,
    lineHeight: 1.3,
    fontSize: pxToRem(24),
    // ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
  },
  h3: {
    fontWeight: 500,
    lineHeight: 1.2,
    fontSize: pxToRem(20),
    // ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
  },
  h4: {
    fontWeight: 400,
    lineHeight: 1.2,
    fontSize: pxToRem(20),

    // ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  },
  h5: {
    fontWeight: 300,
    lineHeight: 1.2,
    fontSize: pxToRem(20),
    // ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
  },
  title: {
    fontWeight: 600,
    fontSize: pxToRem(18),
    lineHeight: 1.3,
  },
  title2: {
    fontWeight: 400,
    fontSize: pxToRem(18),
    lineHeight: 1.3,
  },
  title3: {
    fontWeight: 400,
    fontSize: pxToRem(16),
    lineHeight: 1.3,
  },
  title4: {
    fontWeight: 600,
    fontSize: pxToRem(14),
    lineHeight: 1.3,
  },
  title5: {
    fontWeight: 400,
    fontSize: pxToRem(14),
    lineHeight: 1.3,
  },
  body1: {
    fontWeight: 300,
    lineHeight: 1.25,
    fontSize: pxToRem(14),
  },
  body2: {
    fontWeight: 300,
    lineHeight: 1.25,
    fontSize: pxToRem(13),
  },
  body3: {
    fontWeight: 400,
    lineHeight: 1.25,
    fontSize: pxToRem(13),
  },
  caption: {
    fontWeight: 400,
    lineHeight: 1.25,
    fontSize: pxToRem(12),
  },
  caption2: {
    fontWeight: 300,
    lineHeight: 1.25,
    fontSize: pxToRem(12),
  },
  button: {
    fontWeight: 400,
    lineHeight: 21 / 14,
    letterSpacing: 0.2,
    fontSize: pxToRem(14),
    textTransform: 'inherit',
  },
}

// Helper

export function remToPx(value: number) {
  return Math.round(parseFloat(value.toString()) * REM_BASE)
}

export function pxToRem(value: number) {
  return `${value / REM_BASE}rem`
}

export function responsiveFontSizes({ sm, md, lg }: ResponsiveFontSize) {
  return {
    [breakpoints.up('sm')]: {
      fontSize: pxToRem(sm),
    },
    [breakpoints.up('md')]: {
      fontSize: pxToRem(md),
    },
    [breakpoints.up('lg')]: {
      fontSize: pxToRem(lg),
    },
  }
}

export default typography
