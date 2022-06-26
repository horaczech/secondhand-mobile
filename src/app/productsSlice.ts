import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProductsStateProps} from '../ts/interfaces';
import {PRODUCTS} from '../demo/data';
import {lowerCaseText} from '../utils';

const initialState: ProductsStateProps = {
    allProducts: PRODUCTS,
    categoryProducts: null,
    activeProduct: null,
    searchedProducts: null,
    searchedCategoryProducts: null,
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
        searchProducts: (
            state,
            action: PayloadAction<{text: string; type: 'all' | 'category'; categoryId?: number}>,
        ) => {
            switch (action.payload.type) {
                case 'category':
                    state.searchedCategoryProducts =
                        state.allProducts?.filter(
                            product =>
                                product.category === action.payload.categoryId &&
                                lowerCaseText(product.title).includes(lowerCaseText(action.payload.text)),
                        ) || null;
                // eslint-disable-next-line no-fallthrough
                default:
                    state.searchedProducts =
                        state.allProducts?.filter(product =>
                            lowerCaseText(product.title).includes(lowerCaseText(action.payload.text)),
                        ) || null;
            }
        },
    },
});

export const {setActiveProduct, setCategoryProducts, searchProducts} = productsSlice.actions;

const productsReducer = productsSlice.reducer;

export default productsReducer;
