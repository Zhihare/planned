import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { createTaskList, deleteTaskList, getAllTaskList, patchTaskList } from './taskListThank';


export interface TaskListState {
  taskList: TaskList[];
  loading: boolean;
    error: string | null;
    edit: boolean;
    editingTaskId: number | null;
    menu: boolean
}

interface TaskList {
    id?: number;
    name: string;
    tasks: [];

}


const initialState: TaskListState = {
    taskList: [],
    loading: false,
    error: null,
    edit: false,
    editingTaskId: null,
    menu: false,
};

const taskListSlice = createSlice({
	name: 'taskList',
	initialState,

	reducers: {

		setTaskList(state, action) {
			state.taskList = action.payload;
		},

        setIsLoading(state, action){
            state.loading = action.payload;
        },

        setEdit(state, action) {
            state.edit = action.payload;
        },

        setMenu(state, action) {
            state.menu = action.payload;
        },

        setEditingTaskId(state, action) {
      state.editingTaskId = action.payload;
    },
	},

	extraReducers: builder => {
		builder
			  .addCase(getAllTaskList.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.taskList = action.payload;     
            })
                    .addCase(patchTaskList.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                const updatedTaskList: TaskList = action.payload; 
                state.taskList = state.taskList.map((taskList: TaskList) => {
                    if (taskList.id === updatedTaskList.id) {
                        return updatedTaskList;
                    }
                    return taskList;
                });
            })
            .addCase(createTaskList.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                const newTaskList: TaskList = action.payload; 
                state.taskList.unshift(newTaskList);
                state.editingTaskId = action.payload.id
            })
            
            .addCase(deleteTaskList.fulfilled, (state, action) => {
                 state.loading = false;
                 state.error = null;
                 const deletedTaskListId = action.meta.arg;
                 state.taskList = state.taskList.filter((taskList: TaskList) => taskList.id !== deletedTaskListId);
            })

        
        
            .addMatcher(
                isAnyOf(
                    getAllTaskList.pending,
                    patchTaskList.pending,
                    deleteTaskList.pending,
                    createTaskList.pending,
                ),
                state => {
                    state.loading = true;
                }
            )
            .addMatcher(
                isAnyOf(
                    getAllTaskList.rejected,
                    patchTaskList.rejected,
                    deleteTaskList.rejected,
                    createTaskList.rejected,
                ),
                (state, action: any) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            );
    },
});

export const taskListReducer = taskListSlice.reducer;
export const {setTaskList, setIsLoading,setMenu, setEdit, setEditingTaskId} = taskListSlice.actions;