import { combineReducers } from "@reduxjs/toolkit";
import ActionSlice from "@redux/slices/actions-slice";
import { ActionSliceTypes, DataSliceTypes } from "src/components/types";
import DataSlice from "@redux/slices/data-slice";

export interface RootState {
  actions: ActionSliceTypes;
  data: DataSliceTypes;
}

const RootReducer = combineReducers({
  actions: ActionSlice.reducer,
  data: DataSlice.reducer,
});

export default RootReducer;
