import React from "react";
import { mount } from "@cypress/react";
import App from "./App";

it("render stocks", () => {
  mount(<App />);
  // cy.get("a").contains("AAPL");
});
