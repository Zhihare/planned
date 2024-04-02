import React, { useEffect, useState } from 'react'
import { DescriptionSection, NameSection, StatusSection, TasksEditBody, TasksEditContainer, TasksEditForm, TasksEditHeader, TasksEditHistory } from './TasksEdit.styled'
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { setBackdrop, setEditTask } from '../redax/Tasks/tasksSlice';
// import DatePicker from 'react-datepicker';
import { setEditingTaskId } from '../redax/TaskList/taskListSlice';
import { AppDispatch } from '../redax/store';
import { selectDataEditTask } from '../redax/Tasks/tasksSelector';
import { selectTaskList } from '../redax/TaskList/taskListSelector';
import { FaEdit } from "react-icons/fa";
import { HeaderButton } from '../Header/Header.styled';
import { GrStatusGood } from "react-icons/gr";
import { CiCalendarDate } from "react-icons/ci";
import { IoPricetagOutline } from "react-icons/io5";
import { HistoryBody, HistoryItem } from '../History/History.styled';
import { selectActiveLogs } from '../redax/ActiveLog/activeSelector';
import { formatDate } from '../../utils/date';
import { createTask, patchTask } from '../redax/Tasks/tasksThank';
import { DatePicker } from 'antd';

interface TasksEditProps {
  isOpen: boolean; 
}

const TasksEdit: React.FC<TasksEditProps> = ({ isOpen }) => {
   const dispatch: AppDispatch = useDispatch();
  const dataEdit = useSelector(selectDataEditTask);
  const taskList = useSelector(selectTaskList);
  const activelog = useSelector(selectActiveLogs);


  const [taskName, setTaskName] = useState('');
  const [status, setStatus] = useState('');
  const [dueDate, setDueDate] = useState<Date | null>(null);
  const [priority, setPriority] = useState('');
  const [description, setDescription] = useState('');
  const [history, setHistory] = useState<any[]>([]);;


  useEffect(() => {
    if (typeof dataEdit === 'object' && dataEdit.name && dataEdit.deadline &&
      dataEdit.description && dataEdit.list.name && dataEdit.priority) {
    setTaskName(dataEdit.name);
    setDueDate(dataEdit.deadline);
    setDescription(dataEdit.description);
    setStatus(dataEdit.list.name);
    setPriority(dataEdit.priority);
    setHistory(activelog.filter(log => log.task_Id === dataEdit.id));
  } else {
    setTaskName('New name'); 
    setDueDate(null);
    setDescription('');
    setStatus('');
    setPriority('');  
    setHistory([]);
  }
}, [dataEdit, activelog]);

  const handleDueDateChange = (date: Date | null) => {
    setDueDate(date);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof dataEdit === 'object'&& dataEdit.list.id) {
      dispatch(patchTask({
        id: dataEdit.id,
        name: taskName,
        description: description,
        deadline: dueDate,
        priority: priority,
        list: dataEdit.list.id,
      }))
      handleBackdropClick()
    } else if(typeof dataEdit === 'number') {
      dispatch(createTask({
          name: taskName,
          description: description,
          deadline: dueDate,
          priority: priority,
          list: dataEdit,
        }))
    }
     handleBackdropClick()
    }


   const handleBackdropClick = () => {
    dispatch(setBackdrop(false));
    dispatch(setEditTask(false));
    dispatch(setEditingTaskId(null));
  };

  return (
      <TasksEditContainer className={`${isOpen ? 'active' : ''}`}>
          <TasksEditHeader>
              <button onClick={handleBackdropClick}><MdClose /></button>
          </TasksEditHeader>
          <TasksEditBody>
        <TasksEditForm onSubmit={handleSubmit}>
             <NameSection>
                 <input
                 type="text"
                 id="taskName"
                 value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
            />
            
                <HeaderButton type="submit"><FaEdit />Save task</HeaderButton>
            </NameSection>
      <StatusSection>
        <label htmlFor="status"><GrStatusGood />Status:</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
               {taskList.map((task) => (
        <option key={task.id} value={task.id} >{task.name}</option>
  ))}
        </select>
      </StatusSection>
      <StatusSection>
        <label htmlFor="dueDate"><CiCalendarDate />Due Date:</label>
         
            <DatePicker
            onChange={handleDueDateChange}
            defaultValue={dueDate}/>
                        
      </StatusSection>
      <StatusSection>
        <label htmlFor="priority"><IoPricetagOutline />Priority:</label>
        <select
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="">Select Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </StatusSection>
      <DescriptionSection>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </DescriptionSection>
      
        </TasksEditForm>
        <TasksEditHistory>
          <h2>Activity</h2>
          <HistoryBody className='historiTask'>
                {history.map(item =>
                    <HistoryItem key={item.id}>
                        <p>{item.description}</p>
                        <p>{formatDate(item.timestamp, 5)}</p>
                    </HistoryItem>
                )}
            </HistoryBody>
              </TasksEditHistory>
          </TasksEditBody>
    </TasksEditContainer>
  )
}

export default TasksEdit