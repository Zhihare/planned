import React from 'react'
import { TaskListMenu } from '../TasksList/TasksList.styled'
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useBackdropToggleEdit } from '../../utils/togleEdit';
import { AppDispatch } from '../redax/store';
import { deleteTask } from '../redax/Tasks/tasksThank';
import { setEdit, setEditingTaskId, setMenu } from '../redax/TaskList/taskListSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectEditTaskListId, selectMenu } from '../redax/TaskList/taskListSelector';

interface TasksMenuProps {
  taskId: number;
}

const TaskMenu: React.FC<TasksMenuProps> = ({ taskId }) => {
  const toggleActiveBackdrop = useBackdropToggleEdit(0, taskId);
  const menu = useSelector(selectMenu);
  const editingTaskId = useSelector(selectEditTaskListId);
 const dispatch: AppDispatch = useDispatch();


  const handleDeleteClick = () => {
  dispatch(deleteTask(taskId));
  dispatch(setEdit(false));
  dispatch(setEditingTaskId(null));
  dispatch(setMenu(false));
};


  return (
       <TaskListMenu className={` ${menu&& editingTaskId === taskId? 'active' : ''}`}>
        <ul>
            <li>
              <button onClick={toggleActiveBackdrop}><FiEdit />Edit</button>
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

export default TaskMenu