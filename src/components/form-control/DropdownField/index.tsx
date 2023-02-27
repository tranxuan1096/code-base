import FormControl from '@mui/material/FormControl/FormControl'
import FormLabel from '@mui/material/FormLabel/FormLabel'
import MenuItem from '@mui/material/MenuItem/MenuItem'
import Select from '@mui/material/Select/Select'
import { StyledHelperText } from '../InputField'

const DropdownField = () => {
  return (
    <FormControl fullWidth variant="outlined">
      <FormLabel required>Email Address</FormLabel>
      <Select defaultValue="sl-placeholder">
        <MenuItem disabled value="sl-placeholder">
          Placeholder
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      <StyledHelperText error>This is helper text</StyledHelperText>
    </FormControl>
  )
}

export default DropdownField
