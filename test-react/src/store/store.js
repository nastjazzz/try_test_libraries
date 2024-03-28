import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterReducer.js';

const rootReducer = combineReducers({
    counter: counterReducer,
});

export const createReduxStote = (initialState = {}) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
    });
};
