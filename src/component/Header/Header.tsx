import React from 'react'
import { ButtonContainer, HeaderButton, HeaderContainer } from './Header.styled'
import { GoHistory } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { useDispatch } from 'react-redux';

import { useBackdropToggle } from '../../utils/togle';
import { createTaskList } from '../redax/TaskList/taskListThank';
import { AppDispatch } from '../redax/store';

import { setEdit } from '../redax/TaskList/taskListSlice';
import { setActive } from '../redax/ActiveLog/activeSlice';

export const Header = () => {
    // const backdrop = useSelector(selectBackdrop);
    const toggleActive = useBackdropToggle();
    // const edit = useSelector(selectEdit);
    const dispatch: AppDispatch = useDispatch();

    const handleAddTaskList = () => {
        dispatch(createTaskList({ name: "New categories" })); 
        dispatch(setEdit(true));
        dispatch(setActive([]));
  };
    
  return (
    <HeaderContainer>
          <h1>My Tasks Board</h1>
          <ButtonContainer>
              <HeaderButton onClick={toggleActive}><GoHistory/>History</HeaderButton>
              <HeaderButton onClick={handleAddTaskList}><FaPlus/>Create new list</HeaderButton>
          </ButtonContainer>
    </HeaderContainer>
  )
}
