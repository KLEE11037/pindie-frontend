"use client";

import Styles from "./Header.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Overlay } from "../Overlay/Overlay";
import { Popup } from "../Popup/Popup";
import { AuthForm } from "../AuthForm/AuthForm";
import { usePathname } from "next/navigation";
import { authorize, removeJWT } from "@/app/api/api-utils";
import { useContext } from "react";
import { AuthContext } from "@/app/context/app-context";
import { useStore } from "@/app/store/app-store";
//import { endpoints } from "@/app/api/config";

//import { getJWT, moveJWT, getMe, isResponseOk } from "@/app/api/api-utils";

export const Header = () => {
  const [popupIsOpened, setPopupIsOpened] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  function openPopup() {
    setPopupIsOpened(true);
  }
  function closePopup() {
    setPopupIsOpened(false);
  }
  const pathname = usePathname();
  
  const authContext = useStore();

  const handleLogout = () => {
    authContext.logout(); // Метод logout из контекста
  };
  /*useEffect(() => {
    console.log("header hook");
    const jwt = getJWT();
    console.log("received jwt");
    console.log(jwt);
    if (jwt) {
      getMe(endpoints.me, jwt).then((userData) => {
        console.log("received user data");
        console.log(userData);
        if (isResponseOk(userData)) {
          setIsAuthorized(true);
        } else {
          setIsAuthorized(false);
          removeJWT();
        }
      });
    }
  }, []);*/

  /*const handleLogout = () => {
    setIsAuthorized(false);
    removeJWT();
  };*/

  return (
    <header className={Styles["header"]}>
      {pathname === "/" ? (
        <img
          className={`${Styles["logo__image"]} ${Styles["logo"]}`}
          src="/images/logo.svg"
          alt="Логотип Pindie"
        />
      ) : (
        <Link href="/" className={Styles["logo"]}>
          <img
            className={Styles["logo__image"]}
            src="/images/logo.svg"
            alt="Логотип Pindie"
          />
        </Link>
      )}

      <nav className={Styles["menu"]}>
        <ul className={Styles["menu__list"]}>
          <li className={Styles["menu__item"]}>
            <Link
              href="/new"
              className={`${Styles["menu__link"]}
              ${pathname === "/new" ? Styles["menu__link_active"] : ""}
              `}
            >
              Новинки
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/popular"
              className={`${Styles["menu__link"]}
              ${pathname === "/popular" ? Styles["menu__link_active"] : ""}
              `}
            >
              Популярные
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/shooters"
              className={`${Styles["menu__link"]}
              ${pathname === "/shooters" ? Styles["menu__link_active"] : ""}
              `}
            >
              Шутеры
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/runners"
              className={`${Styles["menu__link"]}
              ${pathname === "/runners" ? Styles["menu__link_active"] : ""}
              `}
            >
              Ранеры
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/pixel-games"
              className={`${Styles["menu__link"]}
              ${pathname === "/pixel-games" ? Styles["menu__link_active"] : ""}
              `}
            >
              Пиксельные
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/tds"
              className={`${Styles["menu__link"]}
              ${pathname === "/tds" ? Styles["menu__link_active"] : ""}
              `}
            >
              TDS
            </Link>
          </li>
        </ul>
        <div className={Styles["auth"]}>
          {authContext.isAuth ? (
            <button className={Styles["auth__button"]} onClick={handleLogout}>
              Выйти
            </button>
          ) : (
            <button className={Styles["auth__button"]} onClick={openPopup}>
              Войти
            </button>
          )}
        </div>
      </nav>
      <Overlay isOpened={popupIsOpened} closePopup={closePopup} />
      <Popup isOpened={popupIsOpened} closePopup={closePopup}>
        <AuthForm close={closePopup} setAuth={setIsAuthorized} />
      </Popup>
    </header>
  );
};
