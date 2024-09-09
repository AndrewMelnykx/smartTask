import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from "@testing-library/react";
import UsersTable from "@users/UsersTable";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
const mockUsers = [
    {
        id: 1,
        name: "John Doe",
        username: "johndoe",
        email: "john@example.com",
        phone: "123-456-7890",
    },
    {
        id: 2,
        name: "Jane Smith",
        username: "janesmith",
        email: "jane@example.com",
        phone: "987-654-3210",
    },
];
const mockSearch = {
    name: "",
    username: "",
    email: "",
    phone: "",
};
const mockStore = configureMockStore();
const store = mockStore({
    data: {
        usersData: mockUsers,
    },
    actions: {
        searchResult: mockSearch,
    },
});
describe("UsersTable", () => {
    it("Renders with correct content", () => {
        render(_jsx(Provider, { store: store, children: _jsx(UsersTable, {}) }));
        expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
        expect(screen.getByText(/johndoe/i)).toBeInTheDocument();
        expect(screen.getByText(/john@example.com/i)).toBeInTheDocument();
        expect(screen.getByText(/123-456-7890/i)).toBeInTheDocument();
    });
});
