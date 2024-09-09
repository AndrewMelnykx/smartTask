import { createSlice } from "@reduxjs/toolkit";
import { DataSliceTypes } from "src/components/types";
import { fetchUsersListThunk } from "./thunk-slice";

const initialState: DataSliceTypes = {
  usersData: [],
};

const DataSlice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    usersListData: (state, action) => {
      state.usersData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsersListThunk.fulfilled, (state, action) => {
      state.usersData = action.payload;
    });
  },
});
export default DataSlice;
