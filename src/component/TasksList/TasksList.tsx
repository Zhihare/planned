import React, { useEffect, useState } from 'react'
import { TaskListMenu, TasksListButton, TasksListContainer, TasksListHeader, TasksOptions } from './TasksList.styled'

import { SlOptionsVertical } from "react-icons/sl";
import { FaPlus } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import TasksCard from '../TasksCard/TasksCard';
import TasksMenu from '../Menu/TasksListMenu';




const TasksList = () => {
  const [isActive, setIsActive] = useState(false);

  
  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (

    <TasksListContainer>
      <TasksListHeader>
          <h2>To Do</h2>
          <TasksOptions>
                <p>4</p>
                <button onClick={toggleActive}><SlOptionsVertical /></button>
          </TasksOptions>
        <TasksMenu isActive={isActive} />
      </TasksListHeader>
      <TasksListButton><FaPlus /> Add new card</TasksListButton>
      <ul>
        <li><TasksCard/></li>
      </ul>
    </TasksListContainer>

    
  )
}

export default TasksList