import styled from 'styled-components'
import { BUTTON_VARIANT } from './types'

interface Props {
  variant?: BUTTON_VARIANT
}

export const ButtonContainer = styled.button<Props>`
  padding: 0.5rem;
  border-radius: 6px;
  font-size: 0.87rem;
  border: none;
  font-weight: 500;
  position: relative;
  transition: background-color 0.15s, color 0.15s;
  gap: 4px;
  cursor: pointer;

  display: flex;
  align-items: center;

  ${(props) => {
    switch (props.variant) {
      case BUTTON_VARIANT.PURPLE:
        return `
          background-color: ${props.theme['purple-900']};
          color: ${props.theme['gray-100']};
          :hover {
            background-color: ${props.theme['purple-500']};
          }
        `
      case BUTTON_VARIANT.PURPLE_LIGHT:
        return `
          background-color: ${props.theme['purple-100']};
          color: ${props.theme['purple-500']};
          :hover {
            color: ${props.theme['purple-900']};
          }
        `
      case BUTTON_VARIANT.YELLOW:
        return `
          background-color: ${props.theme['yellow-500']};
          color: ${props.theme['gray-100']};
          :hover {
            background-color: ${props.theme['yellow-900']};
          }
        `
      case BUTTON_VARIANT.YELLOW_LIGHT:
        return `
          background-color: ${props.theme['yellow-100']};
          color: ${props.theme['yellow-900']};
          :hover {
            background-color: ${props.theme['yellow-900']};
            color: ${props.theme['gray-100']};
          }
        `
      default:
        return `
          background-color: ${props.theme['gray-300']};
          color: ${props.theme['brown-500']};
          :hover {
            background-color: ${props.theme['gray-400']};
            color: ${props.theme['brown-700']};
          }
        `
    }
  }}
  :disabled {
    background: #cacaca !important;
    color: #353535;
    cursor: not-allowed;
  }
`
