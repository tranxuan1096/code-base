export interface ResponsiveFontSize {
  sm: number
  md: number
  lg: number
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    body3: React.CSSProperties
    caption2: React.CSSProperties
    title: React.CSSProperties
    title2: React.CSSProperties
    title3: React.CSSProperties
    title4: React.CSSProperties
    title5: React.CSSProperties
    h6?: false
    subtitle1?: false
    subtitle2?: false
    overline?: false
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body3: React.CSSProperties
    caption2: React.CSSProperties
    title: React.CSSProperties
    title2: React.CSSProperties
    title3: React.CSSProperties
    title4: React.CSSProperties
    title5: React.CSSProperties
    h6?: false
    subtitle1?: false
    subtitle2?: false
    overline?: false
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true
    caption2: true
    title: true
    title2: true
    title3: true
    title4: true
    title5: true
    h6: false
    subtitle1: false
    subtitle2: false
    overline: false
  }
}
