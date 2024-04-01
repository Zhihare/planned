import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { createTask, deleteTask, getAllTasks, patchTask } from './tasksThank';

export interface TaskState {
  tasks: Task[];
  loading: boolean;
    error: string | null;
    backdrop: boolean;
    editTask: boolean;
    dataEditTask: Task|number;
}

export interface Task {
    id?: number,
    name?: string,
    description?: string,
    deadline?: Date|null,
    priority?: string,
    list: List,
}

export interface Taskpatch {
    id?: number,
    name?: string,
    description?: string,
    deadline?: Date|null,
    priority?: string,
    list: number,
}

interface List {
    id?: number;
    name: string;
}




const initialState: TaskState = {
    tasks: [],
    loading: false,
    error: null,
    backdrop: false,
    editTask: false,
    dataEditTask: 0,
};

const taskSlice = createSlice({
	name: 'tasks',
	initialState,

    reducers: {
        
        setDataEditTak(state, action) {
            state.dataEditTask = action.payload;
        },

		setTask(state, action) {
			state.tasks = action.payload;
		},

        setIsLoading(state, action){
            state.loading = action.payload;
        },

        setBackdrop(state, action) {
            state.backdrop = action.payload;
        },

        setEditTask(state, action) {
            state.editTask = action.payload;
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
                const deletedTask = action.payload;
                state.tasks = state.tasks.filter((task: Task) => task.id !== deletedTask);
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
export const {setBackdrop, setDataEditTak, setEditTask, setIsLoading, setTask} = taskSlice.actions;