import React from 'react'
import { TaskListMenu } from '../TasksList/TasksList.styled'
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

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