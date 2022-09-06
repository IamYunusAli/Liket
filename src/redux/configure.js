import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import coinReducer from './coin';

const rootReducer = combineReducers({
  coins: coinReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
