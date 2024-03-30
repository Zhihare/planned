import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { activeReducer } from './ActiveLog/activeSlice';
import { taskListReducer } from './TaskList/taskListSlice';
import { taskReducer } from './Tasks/tasksSlice';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';


const activeConfig = {
	key: 'active',
	storage,
	whitelist: ['data', 'dataOne'],
};

const taskListConfig = {
    key: 'taskList',
    storage,
    whitelist: ['taskList'],
}

const taskConfig = {
    key: 'tasks',
    storage,
    whitelist: ['tasks'],
}


const rootReducer = combineReducers({
    activeLog: persistReducer(activeConfig, activeReducer),
    taskList: persistReducer(taskListConfig, taskListReducer),
    tasks: persistReducer(taskConfig, taskReducer),


});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
	reducer: rootReducer,

	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);