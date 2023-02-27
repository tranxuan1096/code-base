import { Theme } from '@mui/material'
import Backdrop from './Backdrop'

import Button from './Button'
import Checkbox from './Checkbox'
import Form from './Form'
import Input from './Input'
import Radio from './Radio'

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(
    Button(theme),
    Input(theme),
    Backdrop(theme),
    Checkbox(theme),
    Radio(theme),
    Form(theme),
  )
}
