import { Card } from '../components/Card'
import { MenuCardsContainer } from './styles'

export function MenuCards() {
  return (
    <MenuCardsContainer>
      <Card cardTitle="Todos os produtos" />
      <Card cardTitle="Saias" />
      <Card cardTitle="Blusas" />
      <Card cardTitle="Calças e Leggings" />
      <Card cardTitle="Shorts" />
    </MenuCardsContainer>
  )
}
