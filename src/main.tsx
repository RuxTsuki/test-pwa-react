import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// no me toca mas tarde, al parecer debe estar en src 
//const workerT = new Worker(new URL('./service-worker.js?worker', import.meta.url))

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
