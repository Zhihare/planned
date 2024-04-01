import React from 'react'
import { TasksCardBody, TasksCardContainer, TasksCardHeader, TasksCardSelect } from './TasksCard.styled'
import { SlOptionsVertical } from "react-icons/sl";
import { LuCalendar } from "react-icons/lu";
import TaskMenu from '../Menu/TaskMenu';
import { useDispatch, useSelector } from 'react-redux';
import { selectMenu, selectTaskList } from '../redax/TaskList/taskListSelector';
import { formatDate } from '../../utils/date';
import { setEditingTaskId, setMenu } from '../redax/TaskList/taskListSlice';
import { AppDispatch } from '../redax/store';
import { patchTask } from '../redax/Tasks/tasksThank';

interface TasksCardProps {
  task: Task;
}

interface Task {
  id: number;
  name: string;
  description: string;
  deadline: Date;
  priority: string;
  list: List
}

interface List{
  id: number;
  name: string;
}

 


const TasksCard: React.FC<TasksCardProps> = ({task}) => {
  const taskList = useSelector(selectTaskList);
  const menu = useSelector(selectMenu);
  const dispatch: AppDispatch = useDispatch();
  
    const {id, name, description, priority, deadline } = task;
  
  const toggleActive = () => {
    dispatch(setMenu(!menu));
    dispatch(setEditingTaskId(id));
  };


  const chengeList = (idList: number) => {
    dispatch(patchTask({ id, name, deadline, priority, list: idList }))
    console.log('hello', id, idList);
  }



  return (
      <TasksCardContainer>
          <TasksCardHeader>
        <h3>{name}</h3>
              <button onClick={toggleActive}><SlOptionsVertical /></button>
            <TaskMenu taskId={id} />
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
      <TasksCardSelect name="moveTo" onChange={(e) => chengeList(Number(e.target.value))}>
                <option value="" disabled selected hidden>Move to:</option>
                {taskList.map((task: any) =>(        
                  <option  key={task.id} value={task.id}>{task.name}</option> 
                ))}
        </TasksCardSelect>
    </TasksCardContainer>
  )
}

export default TasksCard