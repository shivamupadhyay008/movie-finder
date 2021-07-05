import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import {BrowserRouter as Router} from "react-router-dom"
import MovieContextProvider from "./context/movieContext";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <MovieContextProvider>
      <Router>
        <App />
      </Router>
    </MovieContextProvider>
  </StrictMode>,
  rootElement
);
