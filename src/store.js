/*
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//import ReduxThunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
};

const initialState = {
    currentPlayer: 1,
    history: []
};

const SET_CURRENT_PLAYER = 'SET_CURRENT_PLAYER';
const SET_HISTORY = 'SET_HISTORY';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_PLAYER:
            return { ...state, currentPlayer: action.currentPlayer };
        case SET_HISTORY:
            return { ...state, history: action.history };
        default:
            return state;
    }
};

const persistedReducer = persistReducer(persistConfig, reducer); //persist reducer

const store = configureStore({
    reducer: persistedReducer,
    // middleware: [ReduxThunk],
});

const persistor = persistStore(store);//takes the regular Redux store as an argument and returns a persisted store. save session

//dispatch return
export const setCurrentPlayer = (currentPlayer) => ({
    type: SET_CURRENT_PLAYER,
    currentPlayer,
});

export const setHistory = (history) => ({
    type: SET_HISTORY,
    history,
});


export default store;
export { persistor };
*/

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//import ReduxThunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
};

const initialState = {
    currentPlayer: 1,
    history: [],    
};

const SET_CURRENT_PLAYER = 'SET_CURRENT_PLAYER';
const SET_HISTORY = 'SET_HISTORY';


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_PLAYER:
            return { ...state, currentPlayer: action.currentPlayer };
        case SET_HISTORY:
            return { ...state, history: action.history };
        default:
            return state;
    }
};

const persistedReducer = persistReducer(persistConfig, reducer); //persist reducer

const store = configureStore({
    reducer: persistedReducer,
    // middleware: [ReduxThunk],
});

const persistor = persistStore(store);//takes the regular Redux store as an argument and returns a persisted store. save session

//dispatch return
export const setCurrentPlayer = (currentPlayer) => ({
    type: SET_CURRENT_PLAYER,
    currentPlayer,
});

export const setHistory = (history) => ({
    type: SET_HISTORY,
    history,
});

export const getPlayerPositions = state => {
    const history = state.history;
    return {
        p1: history.filter(entry => entry.player === 1).reduce((total, entry) => {
            const nayaTotal = total + entry.roll;
            if (nayaTotal === 97) {
                return 19;
            } else if (nayaTotal === 66) {
                return 49;
            } else if (nayaTotal === 42) {
                return 75;
            } else if (nayaTotal === 11) {
                return 91;
            } else {
                return nayaTotal;
            }
        }, -1),
        p2: history.filter(entry => entry.player === 2).reduce((total, entry) => {
            const nayaTotal = total + entry.roll;
            if (nayaTotal === 97) {
                return 19;
            } else if (nayaTotal === 66) {
                return 49;
            } else if (nayaTotal === 42) {
                return 75;
            } else if (nayaTotal === 11) {
                return 91;
            } else {
                return nayaTotal;
            }
        }, -1)
    };
};


export default store;
export { persistor };