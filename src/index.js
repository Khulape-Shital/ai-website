import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ConvexClientProvider from "./ConvexClientProvider";
import { MessagesContext } from "./context/MessagesContext";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <ConvexClientProvider>
    <MessagesContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MessagesContext>
  </ConvexClientProvider>
);
