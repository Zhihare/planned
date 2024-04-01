import React, {useState } from 'react'
import {TasklistForm, TasksListButton, TasksListContainer, TasksListHeader, TasksOptions } from './TasksList.styled'

import { SlOptionsVertical } from "react-icons/sl";
import { ImCancelCircle } from "react-icons/im";
import { FaPlus } from "react-icons/fa6";
import TasksCard from '../TasksCard/TasksCard';
import TasksMenu from '../Menu/TasksListMenu';
import { useDispatch, useSelector } from 'react-redux';
import { selectEdit, selectEditTaskListId, selectMenu } from '../redax/TaskList/taskListSelector';
import { patchTaskList } from '../redax/TaskList/taskListThank';
import { AppDispatch } from '../redax/store';
import { setEdit, setEditingTaskId, setMenu } from '../redax/TaskList/taskListSlice';
import { TfiSave } from "react-icons/tfi";
import { useBackdropToggleEdit } from '../../utils/togleEdit';
import { setActive } from '../redax/ActiveLog/activeSlice';

interface TasksListProps {
  idList: number;
  name: string;
  tasks: Array<any>;
}



const TasksList: React.FC<TasksListProps> = ({idList, name, tasks}) => {
  const menu = useSelector(selectMenu);
  const edit = useSelector(selectEdit);

  const toggleActiveBackdrop = useBackdropToggleEdit(idList, 0);
  const [taskListName, setTaskListName] = useState('');
  const editingTaskId = useSelector(selectEditTaskListId);
  const dispatch: AppDispatch = useDispatch();



  const toggleActive = () => {
    dispatch(setMenu(!menu));
    dispatch(setEditingTaskId(idList));
    setTaskListName(name);  
  };

  const handleAddTaskList = () => {
  dispatch(patchTaskList({ id: idList, name: taskListName }));
    handleCancel()
    dispatch(setActive([]));
  };

  const handleCancel = () => {
    dispatch(setEdit(false)); 
    dispatch(setEditingTaskId(null));
  };

  return (

    <TasksListContainer>
            
      <TasksListHeader>
        {edit && editingTaskId === idList ? (
       
          <TasklistForm>
            <input
              type="text"
              value={taskListName}
              onChange={(e) => setTaskListName(e.target.value)}
            />
            <button type="button" onClick={handleAddTaskList}><TfiSave /></button>
            <button type="button" onClick={handleCancel}><ImCancelCircle /></button>
          </TasklistForm>
        ) : (
          <>
            <h2>{name}</h2>
            <TasksOptions>
          <p>{tasks?tasks.length:""}</p>
                <button onClick={toggleActive}><SlOptionsVertical /></button>
              </TasksOptions>
              </>
        )}
          
        <TasksMenu  taskListId={idList} />
      </TasksListHeader>
      <TasksListButton onClick={toggleActiveBackdrop}><FaPlus /> Add new card</TasksListButton>
      {tasks && tasks.length > 0 ? (
      tasks.map((task) => (
        <li key={task.id}><TasksCard task={task} /></li>
      ))
    ) : (
      <></>
    )}
    </TasksListContainer>

    
  )
}

export default TasksList