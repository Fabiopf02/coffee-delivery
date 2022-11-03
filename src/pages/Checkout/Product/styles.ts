import styled from 'styled-components'

export const CheckoutProductContainer = styled.div`
  display: flex;
  gap: 1.2rem;

  svg {
    color: ${(props) => props.theme['purple-500']};
  }

  .right {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .buttons {
    display: flex;
    margin-top: 0.5rem;
    gap: 0.6rem;
    button {
      color: ${(props) => props.theme['brown-200']};
      font-size: 0.75rem;
    }
  }
  .total-product {
    font-weight: 700;
    color: ${(props) => props.theme['brown-500']};
    font-size: 1rem;
  }
`
