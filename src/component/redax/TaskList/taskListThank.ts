import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

axios.defaults.baseURL = "https://react-app-backend-kwrf.onrender.com";

export const getAllTaskList = createAsyncThunk(
	"taskList/fetchTaskListAll",
	async (_, thunkAPI) => {
		try {
            const response = await axios.get(`/task-lists`);
            
			return response.data;
		} catch (e: any) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);


export const patchTaskList = createAsyncThunk(
    "taskList/patchTaskList",
    async ({ id, name }: { id: number; name: string }, thunkAPI) => {
        try {
            const response = await axios.patch(`/task-lists/${id}`, { name: name });
            return response.data;
            
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);


export const deleteTaskList = createAsyncThunk(
    "taskList/deleteTaskList",
    async (id: number, thunkAPI) => {
        try {
            const response = await axios.delete(`/task-lists/${id}`);
            return response.data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);


export const createTaskList = createAsyncThunk(
    "taskList/createTaskList",
    async (taskList: object, thunkAPI) => {
        try {
            const response = await axios.post(`/task-lists`, taskList);
            return response.data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
