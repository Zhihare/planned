import React, { useEffect } from 'react';
import './App.css';
import { Header } from './component/Header/Header';
import TasksList from './component/TasksList/TasksList';
import History from './component/History/History';
import { BackdropContainer } from './component/Backdrop/Backdrop.styled';
import TasksEdit from './component/TasksEdit/TasksEdit';
import { useDispatch, useSelector } from 'react-redux';
import { selectBackdrop, selectEditTask, selectTasks } from './component/redax/Tasks/tasksSelector';
import { selectTaskList } from './component/redax/TaskList/taskListSelector';
import { selectActiveLogs } from './component/redax/ActiveLog/activeSelector';
import { setIsLoading } from './component/redax/TaskList/taskListSlice';
import { getAllTaskList } from './component/redax/TaskList/taskListThank';
import { getAllTasks } from './component/redax/Tasks/tasksThank';
import { getAllActive } from './component/redax/ActiveLog/activeThank';
import { AppDispatch } from './component/redax/store';
import { AppList } from './App.styled';


function App() {
  const dispatch: AppDispatch = useDispatch();
  const backdrop = useSelector(selectBackdrop);
  const editTask = useSelector(selectEditTask);
  const tasks = useSelector(selectTasks);
  const taskList = useSelector(selectTaskList);
  const activeLog = useSelector(selectActiveLogs);


  
 useEffect(() => {
    
    if ((!tasks || tasks.length === 0) || (!taskList || taskList.length === 0) || (!activeLog || activeLog.length === 0)) {
    
      dispatch(setIsLoading(true)); 
      dispatch(getAllTaskList()); 
      dispatch(getAllTasks()); 
      dispatch(getAllActive()); 
    }
  }, [dispatch, tasks, taskList, activeLog]);
 
  return (
    <div className="App">
      <Header/>
      <AppList >
        {taskList.map(e => (
          <li key={e.id}>
            {e.id !== undefined && <TasksList idList={e.id} name={e.name} tasks={tasks.filter(task => task.list.id === e.id)} />}
          </li>
        ))}
      </AppList>
       <BackdropContainer className={backdrop|| editTask ? 'active' : ''}>
        <History />
        <TasksEdit isOpen={editTask} />
        </BackdropContainer>
    </div>
  );
}

export default App;
