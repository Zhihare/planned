import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from './component/Header/Header';
import TasksList from './component/TasksList/TasksList';
import History from './component/History/History';
import { BackdropContainer } from './component/Backdrop/Backdrop.styled';
import TasksEdit from './component/TasksEdit/TasksEdit';
import { useDispatch, useSelector } from 'react-redux';
import { selectBackdrop, selectTasks } from './component/redax/Tasks/tasksSelector';
import { selectTaskList } from './component/redax/TaskList/taskListSelector';
import { selectActiveLogs } from './component/redax/ActiveLog/activeSelector';
import { setIsLoading } from './component/redax/TaskList/taskListSlice';
import { getAllTaskList } from './component/redax/TaskList/taskListThank';
import { getAllTasks } from './component/redax/Tasks/tasksThank';
import { getAllActive } from './component/redax/ActiveLog/activeThank';
import { AppDispatch } from './component/redax/store';

function App() {
 const dispatch: AppDispatch = useDispatch();
  const backdrop = useSelector(selectBackdrop);
  const tasks = useSelector(selectTasks);
  const taskList = useSelector(selectTaskList);
  const activeLog = useSelector(selectActiveLogs);

  console.log(tasks);
  console.log(activeLog);
  console.log(taskList);

  const [isOpen, setIsOpen] = useState(backdrop);
  
    const handleBackdropClick = () => {
    setIsOpen(false);
    };
  
  useEffect(() => {
   if (!tasks || !taskList || !activeLog || (!tasks.length && !taskList.length && !activeLog.length)) {
      dispatch(setIsLoading(true));
      dispatch(getAllTaskList());
      dispatch(getAllTasks());
      dispatch(getAllActive());
    }
  }, [dispatch, taskList, tasks, activeLog]);

  return (
    <div className="App">
      <Header />
      <TasksList />
      <History/>
      <BackdropContainer onClick={handleBackdropClick} className={backdrop? 'active' : ''} />
      <TasksEdit isOpen={isOpen} />
    </div>
  );
}

export default App;
