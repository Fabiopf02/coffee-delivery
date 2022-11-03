import styled from 'styled-components'

export const HeaderContainer = styled.header`
  z-index: 10;
  top: 0;
  position: sticky;
  height: 6.5rem;
  background-color: ${(props) => props.theme['background']};

  display: flex;
  .header-content {
    display: flex;
    flex-basis: 100%;
    justify-content: space-between;
    align-items: center;
    max-width: 72rem;
    margin: 0 auto;
    padding: 0 1rem;

    div {
      display: flex;
      gap: 0.75rem;
    }

    .counter {
      position: absolute;
      top: -0.5rem;
      right: -0.5rem;
      width: 1.25rem;
      height: 1.25rem;
      border-radius: 100px;
      background: ${(props) => props.theme['yellow-900']};
      color: ${(props) => props.theme['gray-100']};

      font-size: 0.75rem;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`
