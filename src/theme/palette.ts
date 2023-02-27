import { ThemeOptions } from '@mui/material'
import { alpha } from '@mui/material/styles'

const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
}

const NEUTRAL = {
  0: '#FFFFFF',
  ea: '#EAEAEA',
  de: '#EBEBEB',
  d2: '#D2D2D2',
  d7: '#D7D7D7',
  f5: '#F5F5F5',
  9: '#999999',
  6: '#666666',
  3: '#333333',
  black: '#000000',
}

const RED = {
  100: '#FF131D',
  80: '#FF424A',
  60: '#FF7177',
  40: '#FFA1A5',
  20: '#FFD0D2',
  5: '#FFD0D2',
}

const BLUE = {
  100: '#5E90F0',
  60: '#9EBCF6',
  10: '#EDF3FE',
  5: '#F7F9FE',
}

const INDICATOR = {
  blue: '#8AC6E9',
  green: '#95D8BC',
  blueLight: '#EDF8FF',
  naviLight: '#CFD9FF',
}

const ALERT = {
  10: '#FAD3D3',
  100: '#EC7474',
}
const ETC = {
  greenDot: '#63D12F',
  redDot: '#FE7C7C',
  yellowDot: '#FFCC69',
  greenMoney: '#63D12F',
  blueActive: '#007BFF',
  yellowStar: '#FFB904',
}

const TAG = {
  green100: '#1D9B40',
  green10: '#E5FAE8',
  violet100: '#705ACA',
  violet10: '#F3F0FF',
  blue100: '#2FA1BA',
  blue10: '#EAF6F9',
  orange100: '#E07F29',
  orange10: '#FFEEDF',
  yellow100: '#CEA71D',
  yellow10: '#FFF8DF',
}

export const VinovaPalette = {
  GREY,
  TAG,
  ALERT,
  INDICATOR,
  BLUE,
  RED,
  NEUTRAL,
  ETC,
}

const palette: ThemeOptions['palette'] = {
  common: { black: '#000', white: '#fff' },
  primary: {
    main: RED[100],
  },
  secondary: {
    main: BLUE[100],
  },
  error: {
    main: RED[100],
  },
  success: {
    main: TAG['green100'],
  },
  warning: {
    main: TAG['orange100'],
    contrastText: GREY[0],
  },
  info: {
    main: TAG['blue100'],
  },
  grey: GREY,
  divider: alpha(NEUTRAL['d7'], 0.24),
  text: {
    primary: NEUTRAL['3'],
    secondary: NEUTRAL['9'],
    disabled: GREY[500],
  },
  background: {
    paper: '#fff',
    default: GREY[100],
  },
  action: {
    active: GREY[600],
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
}

export default palette
