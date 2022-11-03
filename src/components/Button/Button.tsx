import { ButtonContainer } from './styles'
import { ButtonProps } from './types'

export function Button(props: ButtonProps) {
  const { children, variant, ...rest } = props

  return (
    <ButtonContainer variant={variant} {...rest}>
      {children}
    </ButtonContainer>
  )
}
