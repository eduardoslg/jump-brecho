import {
  AddCardWrapper,
  CardFooter,
  Description,
  ItemCardContainer,
  Name,
  Tags,
} from './styles'

interface Items {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
}

interface ItemProps {
  item: Items
}

export function Item({ item }: ItemProps) {
  return (
    <ItemCardContainer>
      <img src={`/items/${item.photo}`} alt="" />
      <Tags>
        {item.tags.map((tag) => (
          <span key={`${item.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <Name>{item.name}</Name>
      <Description>{item.description}</Description>

      <CardFooter>
        <div>
          {/* <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText> */}
        </div>

        <AddCardWrapper></AddCardWrapper>
      </CardFooter>
    </ItemCardContainer>
  )
}
