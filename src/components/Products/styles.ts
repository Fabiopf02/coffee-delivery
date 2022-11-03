import styled from 'styled-components'

export const ProductsContainer = styled.section`
  width: 100%;
  height: 100%;

  .products {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    row-gap: 3rem;
  }

  .title {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    margin-bottom: 3rem;
    margin-top: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['brown-700']};
  }
`
