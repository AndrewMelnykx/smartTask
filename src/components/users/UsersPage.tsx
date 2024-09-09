import { fetchUsersListThunk } from "@redux/slices/thunk-slice";
import { UseStoreDispatcher } from "@redux/store/store";
import React, { useEffect } from "react";
import UsersTable from "./UsersTable";
import { Paper } from "@mui/material";

const UsersList = () => {
  const dispatch = UseStoreDispatcher();
  useEffect(() => {
    dispatch(fetchUsersListThunk());
  }, [dispatch]);

  return (
    <Paper
      sx={{
        width: "80%",
        height: "80%",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
      }}
    >
      <UsersTable />
    </Paper>
  );
};

export default UsersList;
