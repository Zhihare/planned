import { useDispatch, useSelector } from "react-redux";
import {  selectDataEditTask, selectEditTask, selectTasks } from "../component/redax/Tasks/tasksSelector";
import {  Task, setDataEditTak, setEditTask } from "../component/redax/Tasks/tasksSlice";
import { setMenu } from "../component/redax/TaskList/taskListSlice";

export const useBackdropToggleEdit = (idList: number| 0, taskId: number|0) => {
    const dispatch = useDispatch();
    const editTask = useSelector(selectEditTask);
    const tasks = useSelector(selectTasks);
    const dataEdit = useSelector(selectDataEditTask);

    const toggleActive = () => {
        if (editTask) {
            dispatch(setEditTask(false));
            dispatch(setMenu(false));
            dispatch(setDataEditTak(null));
        } else {
            dispatch(setEditTask(true));
            taskId!==0? dispatch(setDataEditTak(tasks.find((item) => item.id === taskId))) : dispatch(setDataEditTak( idList ))
            dispatch(setMenu(false));
            console.log(dataEdit);
        }
    }

    return toggleActive;
}