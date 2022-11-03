import styled from 'styled-components'

export const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem;
  gap: 0.8rem;

  background: ${(props) => props.theme['gray-300']};
  border-radius: 6px;

  button {
    border: none;
    background: transparent;
    color: ${(props) => props.theme['purple-900']};
    cursor: pointer;
    transition: color 0.1s;

    :hover {
      filter: brightness(0.1);
    }
  }

  div {
    font-size: 1rem;
    line-height: 130%;
    text-align: center;
    color: ${(props) => props.theme['brown-900']};
  }
`
