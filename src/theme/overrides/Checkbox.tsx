import { alpha, Theme } from '@mui/material/styles'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'

export default function Checkbox(theme: Theme): Theme['components'] {
  return {
    MuiCheckbox: {
      defaultProps: {
        icon: <FavoriteBorderIcon />,
        checkedIcon: <FavoriteIcon />,
      },
    },
  }
}
