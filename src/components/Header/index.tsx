import { NavLink } from 'react-router-dom'

import { MapPin, ShoppingCart } from 'phosphor-react'

import {
  HeaderButton,
  HeaderButtonsContainer,
  HeaderContainer,
  Logo,
  LogoName,
} from './styles'
export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <LogoName>JUMP BRECHÓ</LogoName>
          <Logo>Desde 2018</Logo>
          {/* <img src={coffeLogoImg} alt="" /> */}
        </NavLink>

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Campos do Jordão, SP
          </HeaderButton>

          <NavLink to="/completeOrder">
            <HeaderButton variant="yellow">
              {/* {cartQuantity >= 1 && <span>{cartQuantity}</span>} */}
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
