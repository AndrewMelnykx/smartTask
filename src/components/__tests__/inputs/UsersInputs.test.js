import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from "@testing-library/react";
import UsersInputs from "@users/UsersInputs";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
const mockSearch = {
    name: "",
    username: "",
    email: "",
    phone: "",
};
const mockStore = configureMockStore();
const store = mockStore({
    actions: mockSearch,
});
describe("UsersInputs", () => {
    it("Renders search input for name", () => {
        const column = { id: "name", label: "Name" };
        render(_jsx(Provider, { store: store, children: _jsx(UsersInputs, { column: column }) }));
        expect(screen.getByLabelText(/Search Name/i)).toBeInTheDocument();
    });
    it("Renders search input for username", () => {
        const column = { id: "username", label: "Username" };
        render(_jsx(Provider, { store: store, children: _jsx(UsersInputs, { column: column }) }));
        expect(screen.getByLabelText(/Search Username/i)).toBeInTheDocument();
    });
    it("Renders search input for email", () => {
        const column = { id: "email", label: "Email" };
        render(_jsx(Provider, { store: store, children: _jsx(UsersInputs, { column: column }) }));
        expect(screen.getByLabelText(/Search Email/i)).toBeInTheDocument();
    });
    it("Renders search input for phone", () => {
        const column = { id: "phone", label: "Phone" };
        render(_jsx(Provider, { store: store, children: _jsx(UsersInputs, { column: column }) }));
        expect(screen.getByLabelText(/Search Phone/i)).toBeInTheDocument();
    });
});
