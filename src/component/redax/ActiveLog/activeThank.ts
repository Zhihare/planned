import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

axios.defaults.baseURL = "https://react-app-backend-kwrf.onrender.com";



export const getAllActive = createAsyncThunk(
	"active/fetchActiveAll",
	async (_, thunkAPI) => {
		try {
			const response = await axios.get(`/activity-log`);
			return response.data.result;
		} catch (e: any) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);



export const getOneActive = createAsyncThunk(
    "active/getOneActive",
    async (id:number, thunkAPI) => {
        try {
            const response = await axios.get(`/activity-log/${id}`);
            return response.data.result;
        } catch (e: any) { // явное указание типа ошибки
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);