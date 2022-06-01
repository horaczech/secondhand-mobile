import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CategoriesStateProps} from '../ts/interfaces';
import {CATEGORIES} from '../demo/data';

const initialState: CategoriesStateProps = {
    allCategories: CATEGORIES,
    activeCategory: null,
};

export const productsSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setActiveCategory: (state, action: PayloadAction<{categoryId: number}>) => {
            if (state.allCategories) {
                state.activeCategory =
                    state.allCategories.find(category => category.id === action.payload.categoryId) || null;
            }
        },
    },
});

export const {setActiveCategory} = productsSlice.actions;

const productsReducer = productsSlice.reducer;

export default productsReducer;
