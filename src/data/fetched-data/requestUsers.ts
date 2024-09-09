import axios from "axios";
const url = process.env.VITE_SMART_TASK_USERS_REQUEST;

const fetchUsersRequest = async () => {
  if (url) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch", error);
    }
  }
};
export { fetchUsersRequest };
