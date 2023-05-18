import { items } from '../../../data/items'
import { Item } from '../components/Item'
import { HomeTitle } from '../styles'
import { ProductsContainer, ProductsList } from './styles'

export function Products() {
  return (
    <ProductsContainer>
      <HomeTitle>Todos os produtos</HomeTitle>

      <hr />
      <ProductsList>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ProductsList>
    </ProductsContainer>
  )
}
