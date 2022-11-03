import styled from 'styled-components'

export const ProductContainer = styled.div`
  width: 16rem;
  height: 19.37rem;
  border-radius: 6px 36px;
  padding: 0.2rem;
  background-color: ${(props) => props.theme['gray-100']};
  font-weight: 400;

  box-shadow: 0 0 1rem #dddddd99;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  img {
    margin-top: -20px;
    width: 7.5rem;
    height: 7.5rem;
  }

  .tags {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 4px;
    margin: 0.1rem 0;
  }

  .tag {
    padding: 0.25rem 0.5rem;
    font-size: 0.62rem;
    font-weight: 700;
    border-radius: 100px;
    text-transform: uppercase;
    background-color: ${(props) => props.theme['yellow-100']};
    color: ${(props) => props.theme['yellow-900']};
  }

  .name {
    font-family: 'Baloo 2';
    text-align: center;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 130%;
    margin: 0.2rem 0;
    color: ${(props) => props.theme['brown-700']};
  }

  .description {
    font-size: 0.87rem;
    line-height: 130%;
    text-align: center;
    color: ${(props) => props.theme['brown-200']};
  }

  .actions {
    display: flex;
    justify-content: space-between;
    font-size: 0.87rem;
    margin-top: 0.3rem;
    gap: 0.5rem;
    div:first-child {
      gap: 4px;
      margin-right: 0.6rem;
    }
    .price {
      font-family: 'Baloo 2';
      font-size: 1.5rem;
      font-weight: 800;
      color: ${(props) => props.theme['brown-500']};
    }
  }
`
