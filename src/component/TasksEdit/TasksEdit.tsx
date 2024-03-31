import React from 'react'
import { TasksEditBody, TasksEditContainer, TasksEditForm, TasksEditHeader, TasksEditHistory } from './TasksEdit.styled'
import { MdClose } from "react-icons/md";

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
      <TasksEditContainer className={`${isOpen ? 'active' : ''}`}>
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