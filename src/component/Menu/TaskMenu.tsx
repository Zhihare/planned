import React, { useEffect } from 'react'
import { TaskListMenu } from '../TasksList/TasksList.styled'
import { FaPlus } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { selectBackdrop } from '../redax/Tasks/tasksSelector';
import { setBackdrop } from '../redax/Tasks/tasksSlice';

interface TasksMenuProps {
  isActive: boolean; 
}

const TaskMenu: React.FC<TasksMenuProps> = ({ isActive }) => {

  // useEffect(() => {
  //   if (!backdrop) {
  //     dispatch(setBackdrop(isActive));
  //   }
  // }, [dispatch, backdrop]);


  return (
       <TaskListMenu className={` ${isActive ? 'active' : ''}`}>
        <ul>
            <li>
              <button ><FiEdit />Edit</button>
            </li>
            <li>
              <button>
                <RiDeleteBin6Line />Delete
                </button>
            </li>
        </ul>
      </TaskListMenu>
  )
}

export default TaskMenu