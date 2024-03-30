import { RootState } from "../store";

export const selectTaskList = (state: RootState) => state.taskList.taskList;
export const selectLoading = (state: RootState) => state.taskList.loading;