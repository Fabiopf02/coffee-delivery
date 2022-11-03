import { forwardRef, InputHTMLAttributes } from 'react'
import { InputComponent } from './styles'

interface InputProps extends InputHTMLAttributes<any> {}

export const Input = forwardRef<any, InputProps>((props, ref) => {
  return <InputComponent ref={ref} {...props} />
})
