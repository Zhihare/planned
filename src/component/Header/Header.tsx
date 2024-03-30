import React from 'react'
import { ButtonContainer, HeaderButton, HeaderContainer } from './Header.styled'
import { GoHistory } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { selectBackdrop } from '../redax/Tasks/tasksSelector';
import { setBackdrop } from '../redax/Tasks/tasksSlice';

export const Header = () => {
    const dispatch = useDispatch();
    const backdrop = useSelector(selectBackdrop);
    
    const toggleActive = () => {
        if (backdrop) {
            dispatch(setBackdrop(false));
        } else {
            dispatch(setBackdrop(true));
        }
  }

  return (
    <HeaderContainer>
          <h1>My Tasks Board</h1>
          <ButtonContainer>
              <HeaderButton onClick={toggleActive}><GoHistory/>History</HeaderButton>
              <HeaderButton><FaPlus/>Create new list</HeaderButton>
          </ButtonContainer>
    </HeaderContainer>
  )
}
