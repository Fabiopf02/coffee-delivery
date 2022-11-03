import styled from 'styled-components'

export const IntroContainer = styled.section`
  padding: 5rem 0;
  display: flex;
  justify-content: space-between;
  gap: 3rem;

  @media (max-width: 549px) {
    padding: 2rem 0;
  }

  div {
    .description {
      font-size: 1.25rem;
      color: ${(props) => props.theme['brown-700']};
      line-height: 130%;
      padding: 1rem 0;
    }
    h1 {
      font-family: 'Baloo 2';
      font-size: 3rem;
      font-weight: 800;
      line-height: 130%;
      color: ${(props) => props.theme['brown-900']};
    }
    .items {
      display: flex;
      flex-wrap: wrap;
      gap: 1.25rem;

      margin-top: 3rem;

      font-size: 1rem;
      line-height: 130%;

      color: ${(props) => props.theme['brown-500']};
      .item {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        flex-basis: 48%;

        @media (max-width: 549px) {
          flex-basis: 100%;
        }

        div {
          width: max-content;
          padding: 0.5rem;
          border-radius: 16px;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        :nth-child(1) div {
          background: ${(props) => props.theme['yellow-900']};
        }
        :nth-child(2) div {
          background: ${(props) => props.theme['brown-500']};
        }
        :nth-child(3) div {
          background: ${(props) => props.theme['yellow-500']};
        }
        :nth-child(4) div {
          background: ${(props) => props.theme['purple-500']};
        }
      }
    }
  }

  img {
    max-width: 43.5rem;
    max-height: 22.5rem;
    filter: drop-shadow(0px 0px 4rem #d4ba72);
    border-radius: 0px;
    @media (max-width: 1072px) {
      display: none;
    }
  }
`
