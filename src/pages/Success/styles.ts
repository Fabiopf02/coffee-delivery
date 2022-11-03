import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 4rem 0;
`

export const Title = styled.h2`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 2rem;
  line-height: 130%;
  color: ${(props) => props.theme['yellow-900']};
`

export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 130%;
  color: ${(props) => props.theme['brown-700']};
`

export const Info = styled.div`
  border-radius: 6px 36px;
  background: linear-gradient(to right, #dbac2c, #8047f8);
  padding: 1px;
  margin: 1rem 0;

  div {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    gap: 0 2rem;
    background: #fff;
    border-radius: 6px 36px;
    .row {
      display: flex;
      flex-direction: row;
      align-items: center;
      color: ${(props) => props.theme['brown-500']};
      span {
        font-weight: bold;
      }
    }
  }

  .map-pin,
  .timer,
  .currency {
    color: #fff;
    padding: 8px;
    border-radius: 50%;
  }
  .map-pin {
    background: ${(props) => props.theme['purple-500']};
  }
  .timer {
    background: ${(props) => props.theme['yellow-500']};
  }
  .currency {
    background: ${(props) => props.theme['yellow-900']};
  }
`
