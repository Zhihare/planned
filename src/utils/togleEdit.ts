import { useDispatch, useSelector } from "react-redux";
import {  selectEditTask } from "../component/redax/Tasks/tasksSelector";
import {  setEditTask } from "../component/redax/Tasks/tasksSlice";

export const useBackdropToggleEdit = () => {
    const dispatch = useDispatch();
    const editTask = useSelector(selectEditTask);

    const toggleActive = () => {
        if (editTask) {
            dispatch(setEditTask(false));
        } else {
            dispatch(setEditTask(true));
        }
    }

    return toggleActive;
}