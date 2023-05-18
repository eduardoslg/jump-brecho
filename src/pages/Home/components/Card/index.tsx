import { CardContainer } from './styles'

interface CardProps {
  cardTitle: string
}

export function Card({ cardTitle }: CardProps) {
  return <CardContainer>{cardTitle}</CardContainer>
}
