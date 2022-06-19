import "normalize.css";
import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "routes";
import "./index.css";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<AppRouter />
	</React.StrictMode>
);