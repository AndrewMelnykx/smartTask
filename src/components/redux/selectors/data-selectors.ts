import { RootState } from "@redux/reducers/RootReducer";
const usersDataSelector = (state: RootState) => state.data.usersData;

export { usersDataSelector };
