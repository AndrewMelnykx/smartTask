import { fetchUsersRequest } from "@data/fetched-data/requestUsers";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUsersListThunk = createAsyncThunk(
  "data/fetchUsersList",
  async () => {
    const response = await fetchUsersRequest();
    return response;
  }
);
export { fetchUsersListThunk };
