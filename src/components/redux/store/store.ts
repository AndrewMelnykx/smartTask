import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "@redux/reducers/RootReducer";

const store = configureStore({ reducer: RootReducer });

export type StoreDispatcherType = typeof store.dispatch;
const UseStoreDispatcher = (): StoreDispatcherType => store.dispatch;

export { UseStoreDispatcher };
export default store;
