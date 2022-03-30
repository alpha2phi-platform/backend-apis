import React from "react";
import ReactDOM from "react-dom";
import { createClient, Provider, defaultExchanges } from "urql";
import App from "./App";
import "./index.css";

const client = createClient({
  url: import.meta.env.VITE_GRAPHQL_URL,
  exchanges: defaultExchanges,
  fetchOptions: () => {
    return {
      headers: {
        "x-api-key": "da2-mgnvbvmb2rgvdpwwhuaixair2y",
      },
    };
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
