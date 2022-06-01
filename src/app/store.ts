import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import themeReducer from './themeSlice';
import productsReducer from './productsSlice';
import categoriesReducer from './categoriesSlice';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        products: productsReducer,
        categories: categoriesReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
