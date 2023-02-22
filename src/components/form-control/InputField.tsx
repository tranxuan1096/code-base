import {
  FormControl,
  FormHelperText,
  OutlinedInput,
  OutlinedInputProps,
  Typography,
} from '@mui/material'
import { Controller, UseFormReturn } from 'react-hook-form'

interface InputFieldProps extends OutlinedInputProps {
  form: UseFormReturn<any, any>
  name: string
}

export const InputField = ({
  form,
  name,
  label,
  disabled,
  fullWidth,
}: InputFieldProps) => {
  const {
    formState: { errors },
  } = form

  const hasError = errors[name]

  return (
    <FormControl fullWidth={fullWidth ?? false} error={!!hasError}>
      <Typography component="label" mb={0.5} fontWeight={600} htmlFor={name}>
        {label}
      </Typography>
      <Controller
        name={name}
        control={form.control}
        render={({ field }) => (
          <OutlinedInput
            id={name}
            disabled={disabled}
            inputProps={{ ...field }}
          />
        )}
      />
      {errors[name]?.message && (
        <FormHelperText id={name} error>
          {errors[name]?.message as string}
        </FormHelperText>
      )}
    </FormControl>
  )
}
