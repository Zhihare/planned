import React, { useState } from 'react'
import { TasksCardBody, TasksCardContainer, TasksCardHeader, TasksCardSelect } from './TasksCard.styled'
import { SlOptionsVertical } from "react-icons/sl";
import { LuCalendar } from "react-icons/lu";
import TaskMenu from '../Menu/TaskMenu';
import { useSelector } from 'react-redux';
import { selectTaskList } from '../redax/TaskList/taskListSelector';
import { formatDate } from '../../utils/date';

interface TasksCardProps {
  tasks: Task;
}

interface Task {
  id: number;
  name: string;
  description: string;
  deadline: Date;
  priority: string;
}

 


const TasksCard: React.FC<TasksCardProps> = ({tasks}) => {
  const taskList = useSelector(selectTaskList);
  const [isActive, setIsActive] = useState(false);
  
    const {name, description, priority, deadline } = tasks;
  
  const toggleActive = () => {
    setIsActive(!isActive);
  };



  return (
      <TasksCardContainer>
          <TasksCardHeader>
        <h3>{name}</h3>
              <button onClick={toggleActive}><SlOptionsVertical /></button>
            <TaskMenu isActive={isActive} />
          </TasksCardHeader>
          
          <TasksCardBody>
              <li>
          <p>{description}</p>
              </li>
              <li className='date'>
                  <LuCalendar />
            <p>{formatDate(deadline, 3)}</p>
              </li>
              <li>
            <p>{priority}</p>
              </li>
          </TasksCardBody>
      <TasksCardSelect name="moveTo" >
                <option value="" disabled selected hidden>Move to:</option>
                {taskList.map((task) =>(        
                  <option key={task.id} value={task.id}>{task.name}</option> 
                ))}
        </TasksCardSelect>
    </TasksCardContainer>
  )
}

export default TasksCard