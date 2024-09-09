import UsersList from "@users/UsersPage";
import "./App.css";
import store from "@redux/store/store";
import { Provider } from "react-redux";
import { Box } from "@mui/material";

function App() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100vw", height: "100vh", m: 0, p: 0 }}
    >
      <Provider store={store}>
        <UsersList />
      </Provider>
    </Box>
  );
}

export default App;
