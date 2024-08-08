import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const exerciseSlice = createSlice({
    name: 'exercises',
    initialState,
    reducers: {
        addExercise: (state, action) => {
            state.push({ ...action.payload, id: Date.now() });
        },
        deleteExercise: (state, action) => {
            return state.filter((exercise) => exercise.id !== action.payload);
        },
    },
    
});

export const { addExercise, deleteExercise } = exerciseSlice.actions;
export default exerciseSlice.reducer;