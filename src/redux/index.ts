import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import CounterReducer from './lib/Counter'
import TodoReducer from './lib/Todo'
import AuthReducer from './lib/Auth'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['counter', 'todo', 'auth'],
    blacklist: [],
    version: 1
};

const rootReducer = combineReducers({
    counter: CounterReducer,
    todo: TodoReducer,
    auth: AuthReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const mode = import.meta.env.VITE_PUBLIC_MODE;
export const store = configureStore({
    reducer: persistedReducer,
    devTools: mode !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;