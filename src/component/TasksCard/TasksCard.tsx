import React, { useState } from 'react'
import { TasksCardBody, TasksCardContainer, TasksCardHeader, TasksCardSelect } from './TasksCard.styled'
import { SlOptionsVertical } from "react-icons/sl";
import { LuCalendar } from "react-icons/lu";
import TaskMenu from '../Menu/TaskMenu';

const TasksCard = () => {
    const [isActive, setIsActive] = useState(false);

  
  const toggleActive = () => {
    setIsActive(!isActive);
  };



  return (
      <TasksCardContainer>
          <TasksCardHeader>
              <h3>New Task</h3>
              <button onClick={toggleActive}><SlOptionsVertical /></button>
            <TaskMenu isActive={isActive} />
          </TasksCardHeader>
          
          <TasksCardBody>
              <li>
                  <p>This mayby text description of a plan on the today, but tomorov erfg erterg</p>
              </li>
              <li className='date'>
                  <LuCalendar />
                  <p>Wed, 19 Apr</p>
              </li>
              <li>
                  <p>Medium</p>
              </li>
          </TasksCardBody>
          <TasksCardSelect name="moveTo">
                <option value="value1">Значение 1</option>
                <option value="value2" selected>Значение 2</option>
                <option value="value3">Значение 3</option>
        </TasksCardSelect>
    </TasksCardContainer>
  )
}

export default TasksCard