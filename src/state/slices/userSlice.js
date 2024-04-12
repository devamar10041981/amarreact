import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    filteredData: [],
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
        setFilteredData: (state, action) => {
            state.filteredData = action.payload;
        },
    },
});

export const { setData, setFilteredData } = userSlice.actions;
export default userSlice.reducer;