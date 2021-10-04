import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import config from "@arcgis/core/config";
import { configureFakeBackend } from '@/helpers';
// configureFakeBackend();

config.apiKey = "AAPK8c795fd716244118be11f2d482cfad7aD0Rl0nlCDFMcBGFZGGPcbZ6gb9HPrP16_4jkmhujxsvybdq-SUZMASoyj_NdYzdD";


ReactDOM.render(
  <App />,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
