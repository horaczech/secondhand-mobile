import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProfilesStateProps} from '../ts/interfaces';
import {ActiveProfile} from '../ts/types';

const initialState: ProfilesStateProps = {
    activeProfile: null,
};

export const profilesSlice = createSlice({
    name: 'profiles',
    initialState,
    reducers: {
        setActiveProfile: (state, action: PayloadAction<ActiveProfile>) => {
            state.activeProfile = action.payload;
        },
    },
});

export const {setActiveProfile} = profilesSlice.actions;

const profilesReducer = profilesSlice.reducer;

export default profilesReducer;
