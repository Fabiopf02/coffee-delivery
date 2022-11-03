import styled from 'styled-components'

export const CheckoutContainer = styled.section`
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  .row {
    display: flex;
    justify-content: space-between;
    gap: 0 0.625rem;
  }
  .w-100 {
    width: 100%;
  }
  .row button {
    svg {
      margin-right: 0.1rem;
      color: ${(props) => props.theme['purple-500']};
      font-size: 1rem;
    }
  }
  .row:not(.product) button {
    width: 100%;
    height: 3rem;
    margin-top: 2rem;
    font-size: 0.75rem;
  }
  .active-button {
    border: 1px solid ${(props) => props.theme['purple-500']};
    background: ${(props) => props.theme['purple-100']};
  }
  .uppercase {
    text-transform: uppercase;
  }
`

export const Card = styled.div`
  width: 100%;
  .content {
    margin-top: 1rem;
    background-color: ${(props) => props.theme['gray-100']};
    padding: 2.4rem;
    border-radius: 6px;
  }
  :nth-child(2) {
    width: 75%;
  }
  :nth-child(2) .content {
    border-radius: 6px 44px;
  }
  input {
    margin-top: 0.9rem;
  }
`

export const Divider = styled.div`
  width: 100%;
  height: 0;
  border: 1px solid ${(props) => props.theme['gray-300']};
  margin: 1.5rem 0;
`

export const CoffeeCard = styled.div`
  .summary {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.875rem;
      font-weight: 400;
      color: ${(props) => props.theme['brown-500']};
    }
    .total {
      font-weight: 700;
      font-size: 1.25rem;
    }
  }
  .finish-button {
    margin-top: 1rem;
    width: 100%;
    height: 2.875rem;
    display: flex;
    justify-content: center;
  }
`

export const Description = styled.div`
  p:first-child {
    svg {
      margin-right: 0.4rem;
    }
    font-family: 'Roboto';
    font-size: 1rem;
    color: ${(props) => props.theme['brown-700']};
    font-weight: 500;
    display: flex;
    align-items: center;
  }
  p:nth-child(2) {
    margin-left: 1.7rem;
    font-size: 0.875rem;
    font-weight: 400;
    color: ${(props) => props.theme['brown-500']};
  }
`

export const Title = styled.h4`
  font-family: 'Baloo 2';
  font-size: 1.12rem;
  font-weight: 700;
  color: ${(props) => props.theme['brown-700']};
`
