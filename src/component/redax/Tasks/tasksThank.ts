import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

axios.defaults.baseURL = "https://react-app-backend-kwrf.onrender.com";



export const getAllTasks = createAsyncThunk(
	"tasks/fetchTaskAll",
	async (_, thunkAPI) => {
		try {
			const response = await axios.get(`/tasks`);
			return response.data.result;
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
            return response.data.result;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);


export const patchTask = createAsyncThunk(
    "tasks/patchTask",
    async (id, thunkAPI) => {
        try {
            const response = await axios.patch(`/tasks/${id}`);
            return response.data.result;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);


export const deleteTask = createAsyncThunk(
    "tasks/deleteTask",
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(`/tasks/${id}`);
            return response.data.result;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);


export const createTask = createAsyncThunk(
    "tasks/createTask",
    async (taskList, thunkAPI) => {
        try {
            const response = await axios.post(`/task-lists`, taskList);
            return response.data.result;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);




