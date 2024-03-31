import { RootState } from "../store";

export const selectTaskList = (state: RootState) => state.taskList.taskList;
export const selectLoading = (state: RootState) => state.taskList.loading;
export const selectEdit = (state: RootState) => state.taskList.edit;
export const selectEditTaskListId = (state: RootState) => state.taskList.editingTaskId;
export const selectMenu = (state: RootState) => state.taskList.menu;