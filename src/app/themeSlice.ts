import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ThemeStateProps} from '../ts/interfaces';
import {ThemeType} from '../ts/types';
import {COLORS, DARK_COLORS} from '../constants/Colors';
import {setTheme} from '../utils/user';

const initialState: ThemeStateProps = {
    status: 'idle',
    error: null,
    activeTheme: {
        dark: false,
        colors: COLORS,
    },
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        // setTheme: (state, action: PayloadAction<ThemeType>) => {
        //     if (action.payload === 'dark') {
        //         state.activeTheme = {dark: true, colors: DARK_COLORS};
        //     } else {
        //         state.activeTheme = {dark: false, colors: COLORS};
        //     }
        // }
    },
    extraReducers: builder => {
        builder
            .addCase(setTheme.pending, state => {
                state.status = 'loading';
            })
            .addCase(setTheme.fulfilled, (state, action: PayloadAction<string>) => {
                state.status = 'succeeded';
                if (action.payload === 'dark') {
                    state.activeTheme.dark = true;
                    state.activeTheme.colors = DARK_COLORS;
                } else {
                    state.activeTheme.dark = false;
                    state.activeTheme.colors = COLORS;
                }
            })
            .addCase(setTheme.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Error';
            });
    },
});

const themeReducer = themeSlice.reducer;

export default themeReducer;
