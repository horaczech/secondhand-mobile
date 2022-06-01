import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProductsStateProps} from '../ts/interfaces';
import {PRODUCTS} from '../demo/data';

const initialState: ProductsStateProps = {
    allProducts: PRODUCTS,
    categoryProducts: null,
    activeProduct: null,
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setActiveProduct: (state, action: PayloadAction<{productId: number}>) => {
            if (state.allProducts) {
                state.activeProduct =
                    state.allProducts.find(product => product.id === action.payload.productId) || null;
            }
        },
        setCategoryProducts: (state, action: PayloadAction<{categoryId: number}>) => {
            if (state.allProducts) {
                state.categoryProducts =
                    state.allProducts.filter(product => product.category === action.payload.categoryId) || null;
            }
        },
    },
});

export const {setActiveProduct, setCategoryProducts} = productsSlice.actions;

const productsReducer = productsSlice.reducer;

export default productsReducer;
