import styled from 'styled-components'

export const ProductsContainer = styled.div`
  margin-top: 16px;
  gap: 16px;
  overflow: auto;
`

export const ProductsList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1rem;
  row-gap: 2.5rem;
  margin-top: 1.5rem;
  overflow: auto;
`
