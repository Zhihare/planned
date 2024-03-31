import { useDispatch, useSelector } from "react-redux";
import { selectBackdrop } from "../component/redax/Tasks/tasksSelector";
import { setBackdrop } from "../component/redax/Tasks/tasksSlice";

export const useBackdropToggle = () => {
    const dispatch = useDispatch();
    const backdrop = useSelector(selectBackdrop);

    const toggleActive = () => {
        if (backdrop) {
            dispatch(setBackdrop(false));
        } else {
            dispatch(setBackdrop(true));
        }
    }

    return toggleActive;
}