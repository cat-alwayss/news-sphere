import React from "react";
import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
} from "react-router-dom";

import App from "./App";

import "./styles/App.css";
import "./styles/Navbar.css";
import "./styles/Hero.css";
import "./styles/FeaturedNews.css";
import "./styles/NewsCard.css";
import "./styles/TrendingTopics.css";
import "./styles/Footer.css";
import "./styles/WeatherCard.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);