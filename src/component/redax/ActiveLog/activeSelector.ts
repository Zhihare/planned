import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './../store';


export const selectActiveLogs = (state: RootState) => state.activeLog.data;


export const selectOneActiveLog = (state: RootState) => state.activeLog.dataOne;


export const selectLoading = (state: RootState) => state.activeLog.loading;


export const selectError = (state: RootState) => state.activeLog.error;