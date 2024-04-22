import { configureStore, combineReducers } from '@reduxjs/toolkit';

import CounterReducer from './lib/counter'
import TodoReducer from './lib/todos'
import storage from 'redux-persist/lib/storage';
import {
    persistReducer, persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';


const rootReducer = combineReducers({
    counter: CounterReducer,
    todos: TodoReducer
})


const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    ],
    devTools: import.meta.env.type !== 'production'
})

export const persistor = persistStore(store)