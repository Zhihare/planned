import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getAllActive, getOneActive } from './activeThank';


export interface ActiveLogState {
    data: any[];
    dataOne: any[];
  loading: boolean;
  error: string | null;
}

const initialState: ActiveLogState = {
    data: [],
    dataOne: [],
  loading: false,
  error: null,
};


const activeSlice = createSlice({
	name: 'active',
	initialState,

	reducers: {

		setActive(state, action) {
			state.data = action.payload;
		},

        setOneActive(state, action) {
            state.dataOne = action.payload;
        },

        setIsLoading(state, action){
            state.loading = action.payload;
        },
	},

	extraReducers: builder => {
		builder
			.addCase(getAllActive.fulfilled, (state, action) => {
				state.loading= false;
				state.error = null;
				state.data = action.payload;     
			})

			.addCase(getOneActive.fulfilled, (state, action) => {
				state.loading = false;
				state.error = null;
				state.dataOne = action.payload;        
            })
            


			.addMatcher(
				isAnyOf(
					getAllActive.pending,
					getOneActive.pending,
				), state => {
					state.loading = true;
				})
			.addMatcher(
				isAnyOf(
					getAllActive.rejected,
					getOneActive.rejected,      
				), (state, action: any) => {
					state.loading = false;
					state.error = action.payload;
				});
	},
});

export const activeReducer = activeSlice.reducer;
export const { setActive, setOneActive, setIsLoading } = activeSlice.actions;