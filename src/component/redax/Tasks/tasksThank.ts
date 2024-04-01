import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import {Taskpatch } from './tasksSlice';

axios.defaults.baseURL = "https://react-app-backend-kwrf.onrender.com";



export const getAllTasks = createAsyncThunk(
	"tasks/fetchTaskAll",
	async (_, thunkAPI) => {
		try {
            const response = await axios.get(`/tasks`);
			return response.data;
		} catch (e: any) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);



export const getOneTask = createAsyncThunk(
    "tasks/getOneTask",
    async (id, thunkAPI) => {
        try {
            const response = await axios.get(`/tasks/${id}`);
            return response.data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);




export const patchTask = createAsyncThunk(
    "tasks/patchTask",
    async (newTask: Taskpatch, thunkAPI) => {
        try {
            const response = await axios.patch(`/tasks/${newTask.id}`, newTask);

            return response.data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);


export const deleteTask = createAsyncThunk(
    "tasks/deleteTask",
    async (id:number, thunkAPI) => {
        try {
            const response = await axios.delete(`/tasks/${id}`);
            return response.data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);


export const createTask = createAsyncThunk(
    "tasks/createTask",
    async (taskList: Taskpatch, thunkAPI) => {
        try {
            const response = await axios.post(`/tasks`, taskList);
            return response.data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);




