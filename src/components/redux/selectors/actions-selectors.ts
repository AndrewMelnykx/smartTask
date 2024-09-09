import { RootState } from "@redux/reducers/RootReducer";

const actionsSelector = (state: RootState) => state.actions;

export { actionsSelector };
