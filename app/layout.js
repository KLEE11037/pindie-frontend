import "./globals.css";

//import { useEffect, useState } from "react";
//import { getJWT, setJWT, removeJWT, getMe } from "./api/api-utils";
//import { endpoints } from "./api/config";

import { App } from "./App";
//import { Header } from "./components/Header/Header.jsx";
//import { Footer } from "./components/Footer/Footer.jsx";

export const metadata = {
  title: "Pindie",
  description: "Портал инди-игр от студентов Яндекс Практикума",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <App>{children}</App>
      </body>
    </html>
  );
}
