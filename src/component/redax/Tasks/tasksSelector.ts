import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './../store';


export const selectTasks = (state: RootState) => state.tasks;


export const selectBackdrop = (state: RootState) => state.tasks.backdrop;


export const selectLoading = (state: RootState) => state.tasks.loading;


