import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { createTask, deleteTask, getAllTasks, patchTask } from './tasksThank';

export interface TaskState {
  tasks: Task[];
  loading: boolean;
    error: string | null;
    backdrop: boolean;
}

interface Task {
    id?: number,
    action?: string,
    description?: string,
    timestamp?: Date| null,
    task_Id?: number,
    listId?: number,
}


const initialState: TaskState = {
    tasks: [],
    loading: false,
    error: null,
    backdrop: false,
};

const taskSlice = createSlice({
	name: 'tasks',
	initialState,

	reducers: {

		setTask(state, action) {
			state.tasks = action.payload;
		},

        setIsLoading(state, action){
            state.loading = action.payload;
        },

        setBackdrop(state, action) {
            state.backdrop = action.payload;
        }
	},

	extraReducers: builder => {
		builder
			  .addCase(getAllTasks.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.tasks = action.payload;     
            })
                    .addCase(patchTask.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                const updatedTaskList: Task = action.payload; 
                state.tasks = state.tasks.map((taskList: Task) => {
                    if (taskList.id === updatedTaskList.id) {
                        return updatedTaskList;
                    }
                    return taskList;
                });
            })
            .addCase(createTask.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                const newTask: Task = action.payload; 
                state.tasks.push(newTask);
            })
            
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                const deletedTask = action.payload.id;
                state.tasks = state.tasks.filter((taskList: any) => taskList.id !== deletedTask);
            })
        
            .addMatcher(
                isAnyOf(
                    getAllTasks.pending,
                    patchTask.pending,
                    deleteTask.pending,
                    createTask.pending,
                ),
                state => {
                    state.loading = true;
                }
            )
            .addMatcher(
                isAnyOf(
                    getAllTasks.rejected,
                    patchTask.rejected,
                    deleteTask.rejected,
                    createTask.rejected,
                ),
                (state, action: any) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            );
    },
});

export const taskReducer = taskSlice.reducer;
export const {setBackdrop, setIsLoading, setTask} = taskSlice.actions;