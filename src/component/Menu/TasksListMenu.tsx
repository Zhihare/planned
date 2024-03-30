import React from 'react'
import { TaskListMenu } from '../TasksList/TasksList.styled'
import { FaPlus } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

interface TasksMenuProps {
  isActive: boolean; 
}

const TasksMenu: React.FC<TasksMenuProps> = ({ isActive }) => {
  return (
       <TaskListMenu className={` ${isActive ? 'active' : ''}`}>
        <ul>
            <li>
              <button><FiEdit />Edit</button>
            </li>
            <li>
              <button>
                <FaPlus />Add new card
              </button>
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

export default TasksMenu