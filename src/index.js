import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import { createStore } from "redux"
import reducers from "./reducers";


const store = createStore(reducers)
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Auth0Provider
    domain="ayockson2500.us.auth0.com"
    clientId="Wbe0R06ah2Z8gF8NXoQBmn3rUYfQ7jte"
    redirectUri={window.location.origin}
  >
    <Provider store={store}>
    <App />
    </Provider>
  </Auth0Provider>
);
