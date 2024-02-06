import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <div className="w-screen h-screen">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  </React.StrictMode>
);
