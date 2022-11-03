import styled from 'styled-components'

export const InputComponent = styled.input`
  padding: 0.75rem;
  border-radius: 4px;
  font-size: 0.87rem;
  outline: none;
  background-color: ${(props) => props.theme['gray-200']};
  color: ${(props) => props.theme['brown-500']};
  transition: 0.15s;

  ::placeholder {
    color: ${(props) => props.theme['brown-200']};
  }

  display: flex;
  align-items: center;
  gap: 4px;

  border: 1px solid ${(props) => props.theme['gray-300']};
  :focus {
    border: 1px solid ${(props) => props.theme['yellow-900']};
  }
`
