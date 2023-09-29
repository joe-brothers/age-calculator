import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18n";

window.Kakao.init(import.meta.env.VITE_APP_KEY);
window.Kakao.isInitialized();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4125713536443110"
      crossOrigin="anonymous"
    ></script>
  </React.StrictMode>
);
