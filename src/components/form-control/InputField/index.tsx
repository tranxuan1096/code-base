import { Button, FormGroup, InputAdornment } from '@mui/material'
import FormControl from '@mui/material/FormControl/FormControl'
import FormHelperText from '@mui/material/FormHelperText/FormHelperText'
import FormLabel from '@mui/material/FormLabel/FormLabel'
import OutlinedInput from '@mui/material/OutlinedInput/OutlinedInput'
import { styled } from '@mui/system'

export const StyledHelperText = styled(FormHelperText)`
  margin-left: 0;
`
const InputField = () => {
  return (
    <FormControl variant="outlined">
      <FormLabel required>Email Address</FormLabel>
      <OutlinedInput placeholder="Enter email" notched={false} />
      <StyledHelperText error>This is helper text</StyledHelperText>
    </FormControl>
  )
}

export default InputField
