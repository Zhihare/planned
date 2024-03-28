import React from 'react'
import { ButtonContainer, HeaderButton, HeaderContainer } from './Header.styled'
import { GoHistory } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";

export const Header = () => {
  return (
    <HeaderContainer>
          <h1>My Tasks Board</h1>
          <ButtonContainer>
              <HeaderButton><GoHistory/>History</HeaderButton>
              <HeaderButton><FaPlus/>Create new list</HeaderButton>
          </ButtonContainer>
    </HeaderContainer>
  )
}
