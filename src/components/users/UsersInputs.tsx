import { Box, TextField } from "@mui/material";
import React from "react";
import { Column } from "../types";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchName,
  setSearchUsername,
  setSearchEmail,
  setSearchPhone,
} from "@redux/slices/actions-slice";
import { actionsSelector } from "@redux/selectors/actions-selectors";

const UsersInputs = ({ column }: { column: Column }) => {
  const dispatch = useDispatch();
  const search = useSelector(actionsSelector);
  return (
    <Box display="flex" flexDirection="column">
      {column.label}
      {column.id === "name" && (
        <TextField
          label="Search Name"
          variant="outlined"
          size="small"
          value={search.name}
          onChange={(e) => dispatch(setSearchName(e.target.value))}
        />
      )}
      {column.id === "username" && (
        <TextField
          label="Search Username"
          variant="outlined"
          size="small"
          value={search.username}
          onChange={(e) => dispatch(setSearchUsername(e.target.value))}
        />
      )}
      {column.id === "email" && (
        <TextField
          label="Search Email"
          variant="outlined"
          size="small"
          value={search.email}
          onChange={(e) => dispatch(setSearchEmail(e.target.value))}
        />
      )}
      {column.id === "phone" && (
        <TextField
          label="Search Phone"
          variant="outlined"
          size="small"
          value={search.phone}
          onChange={(e) => dispatch(setSearchPhone(e.target.value))}
        />
      )}
    </Box>
  );
};
export default UsersInputs;
