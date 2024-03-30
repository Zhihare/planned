import React from 'react'
import { TasksEditBody, TasksEditContainer, TasksEditForm, TasksEditHeader, TasksEditHistory } from './TasksEdit.styled'
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { setBackdrop } from '../redax/Tasks/tasksSlice';
import { selectBackdrop } from '../redax/Tasks/tasksSelector';

interface TasksEditProps {
  isOpen: boolean; 
}

const TasksEdit: React.FC<TasksEditProps> = ({ isOpen }) => {
  
  // const dispatch = useDispatch();
  // const backdrop = useSelector(selectBackdrop);
  // console.log(backdrop);


  // const toggleActive = () => {
  //   dispatch(setBackdrop(isOpen));
  // }

  return (
      <TasksEditContainer>
          <TasksEditHeader>
              <button><MdClose /></button>
          </TasksEditHeader>
          <TasksEditBody>
              <TasksEditForm />
              <TasksEditHistory/>
          </TasksEditBody>
    </TasksEditContainer>
  )
}

export default TasksEdit