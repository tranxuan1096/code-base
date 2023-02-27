import { Button, InputAdornment } from '@mui/material'
import FormControl from '@mui/material/FormControl/FormControl'
import FormLabel from '@mui/material/FormLabel/FormLabel'
import OutlinedInput from '@mui/material/OutlinedInput/OutlinedInput'
import { StyledHelperText } from '../InputField'

const InputFieldGroup = () => {
  return (
    <FormControl variant="outlined">
      <FormLabel required>Email Address</FormLabel>
      <OutlinedInput
        placeholder="Enter email"
        notched={false}
        endAdornment={
          <InputAdornment position="end">
            <Button>Search</Button>
          </InputAdornment>
        }
        sx={{
          '&.MuiInputBase-adornedEnd': { paddingRight: 0 },
          '& .MuiInputAdornment-root': { maxHeight: 'none', height: 1 },
          '& .MuiInputAdornment-root .MuiButtonBase-root': {
            height: 1,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          },
        }}
      />
      <StyledHelperText error>This is helper text</StyledHelperText>
    </FormControl>
  )
}

export default InputFieldGroup
