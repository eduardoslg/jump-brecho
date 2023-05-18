import { MenuCards } from './MenuCards'
import { Products } from './Products'
import { Content, HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Content>
        <MenuCards />

        <Products />
      </Content>
    </HomeContainer>
  )
}
