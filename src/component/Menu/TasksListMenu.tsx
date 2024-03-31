import React from 'react'
import { TaskListMenu } from '../TasksList/TasksList.styled'
import { FaPlus } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { selectEditTaskListId, selectMenu } from '../redax/TaskList/taskListSelector';
import { setEdit, setEditingTaskId, setMenu } from '../redax/TaskList/taskListSlice';
import { deleteTaskList } from '../redax/TaskList/taskListThank';
import { AppDispatch } from '../redax/store';

interface TasksMenuProps {
  taskListId: number;
}

const TasksMenu: React.FC<TasksMenuProps> = ({ taskListId }) => {
  const menu = useSelector(selectMenu);
  const editingTaskId = useSelector(selectEditTaskListId);

  const dispatch: AppDispatch = useDispatch();

  

  const handleEditClick = () => {
    dispatch(setEdit(true)); 
    dispatch(setEditingTaskId(taskListId));
    dispatch(setMenu(false));
  };

  const handleDeleteClick = () => {
  dispatch(deleteTaskList(taskListId));
  dispatch(setEdit(false));
  dispatch(setEditingTaskId(null));
  dispatch(setMenu(false));
};

  
  
  return (
       <TaskListMenu className={` ${menu && editingTaskId === taskListId ? 'active' : ''}`}>
        <ul>
            <li>
              <button onClick={handleEditClick}><FiEdit />Edit</button>
            </li>
            <li>
              <button>
                <FaPlus />Add new card
              </button>
              </li>
            <li>
              <button onClick={handleDeleteClick}>
                <RiDeleteBin6Line />Delete
                </button>
            </li>
        </ul>
      </TaskListMenu>
  )
}

export default TasksMenu