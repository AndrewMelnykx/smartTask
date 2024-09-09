import { createSlice } from "@reduxjs/toolkit";
import { ActionSliceTypes } from "src/components/types";

const initialState: ActionSliceTypes = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const ActionSlice = createSlice({
  name: "actions",
  initialState: initialState,
  reducers: {
    setSearchName: (state, action) => {
      state.name = action.payload;
    },
    setSearchUsername: (state, action) => {
      state.username = action.payload;
    },
    setSearchEmail: (state, action) => {
      state.email = action.payload;
    },
    setSearchPhone: (state, action) => {
      state.phone = action.payload;
    },
  },
});
export const {
  setSearchName,
  setSearchUsername,
  setSearchEmail,
  setSearchPhone,
} = ActionSlice.actions;
export default ActionSlice;
