import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Theme } from '@mui/material/styles'

export default function Checkbox(theme: Theme): Theme['components'] {
  return {
    MuiCheckbox: {
      defaultProps: {
        color: 'secondary',
      },
    },
  }
}
