import React from "react";
import { render, screen } from "@testing-library/react";
import UsersInputs from "@users/UsersInputs";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import { Column } from "src/components/types";

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
    const column: Column = { id: "name", label: "Name" };
    render(
      <Provider store={store}>
        <UsersInputs column={column} />
      </Provider>
    );
    expect(screen.getByLabelText(/Search Name/i)).toBeInTheDocument();
  });

  it("Renders search input for username", () => {
    const column: Column = { id: "username", label: "Username" };
    render(
      <Provider store={store}>
        <UsersInputs column={column} />
      </Provider>
    );
    expect(screen.getByLabelText(/Search Username/i)).toBeInTheDocument();
  });

  it("Renders search input for email", () => {
    const column: Column = { id: "email", label: "Email" };
    render(
      <Provider store={store}>
        <UsersInputs column={column} />
      </Provider>
    );
    expect(screen.getByLabelText(/Search Email/i)).toBeInTheDocument();
  });

  it("Renders search input for phone", () => {
    const column: Column = { id: "phone", label: "Phone" };
    render(
      <Provider store={store}>
        <UsersInputs column={column} />
      </Provider>
    );
    expect(screen.getByLabelText(/Search Phone/i)).toBeInTheDocument();
  });
});
