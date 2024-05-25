"use client";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { AuthContext } from "./context/app-context";
import { useState, useEffect } from "react";
import { useStore } from "./store/app-store";
import { getJWT, setJWT, removeJWT, getMe } from "./api/api-utils";
import { endpoints } from "./api/config";

export const App = (props) => {
  const store = useStore();

  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");
  useEffect(() => {
    store.checkAuth();
  }, []);

  return (
    <>
      
        <Header />
        {props.children}
        <Footer />
      
    </>
  );
};
