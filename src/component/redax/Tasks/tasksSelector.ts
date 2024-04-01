import { RootState } from './../store';


export const selectTasks = (state: RootState) => state.tasks.tasks;


export const selectBackdrop = (state: RootState) => state.tasks.backdrop;


export const selectLoading = (state: RootState) => state.tasks.loading;

export const selectEditTask = (state: RootState) => state.tasks.editTask;
export const selectDataEditTask = (state: RootState) => state.tasks.dataEditTask;
