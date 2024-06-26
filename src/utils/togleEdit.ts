import { useDispatch, useSelector } from "react-redux";
import {  selectEditTask, selectTasks } from "../component/redax/Tasks/tasksSelector";
import { setDataEditTak, setEditTask } from "../component/redax/Tasks/tasksSlice";
import { setMenu } from "../component/redax/TaskList/taskListSlice";

export const useBackdropToggleEdit = (idList: number| 0, taskId: number|0) => {
    const dispatch = useDispatch();
    const editTask = useSelector(selectEditTask);
    const tasks = useSelector(selectTasks);


    const toggleActive = () => {
        if (!editTask) {
            dispatch(setEditTask(true));
            taskId!==0? dispatch(setDataEditTak(tasks.find(item => item.id === taskId))) : dispatch(setDataEditTak( idList ))
            dispatch(setMenu(false));        
        } else {
            dispatch(setEditTask(false));
            dispatch(setMenu(false));
            dispatch(setDataEditTak(null));
        }
    }

    return toggleActive;
}