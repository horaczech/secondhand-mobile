import {createAsyncThunk} from '@reduxjs/toolkit';
import {saveToAsyncStorage} from './index';
import {ThemeType} from '../ts/types';

export const setTheme = createAsyncThunk('theme/setTheme', async (newTheme: ThemeType, {rejectWithValue}) => {
    try {
        await saveToAsyncStorage('selectedTheme', newTheme);
    } catch (e: any) {
        rejectWithValue(e.message);
    } finally {
        return newTheme;
    }
});
