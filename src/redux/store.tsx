import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk, { ThunkMiddleware } from "redux-thunk";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { listSlice } from './slices/list-slice';

export const COMBINED_REDUCER = combineReducers({
  list: listSlice.reducer,
});

export type RootState = ReturnType<typeof COMBINED_REDUCER>;

export const store = configureStore({
  reducer: COMBINED_REDUCER,
  middleware: [thunk as ThunkMiddleware]
})

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;