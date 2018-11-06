import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom"; //
import mocksdk from "../test.utils";
import App from "./App";

jest.mock("../config/firebase", () => mocksdk);

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
