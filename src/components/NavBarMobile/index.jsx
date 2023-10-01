import { Link, useLocation } from "react-router-dom";

import styles from "./mobile.module.css";
import { useState } from "react";
export default function NavBarMobile() {
  const { pathname } = useLocation();
  const disableMenu = () => {
    setViewLinks(false);
  };
  const [viewLinks, setViewLinks] = useState(false);
  return (
    <>
      <nav>
        <Link to="/" style={{ all: "unset", cursor: "pointer" }}>
          <div className={styles.logo}>
            <span>
              Academia <span>XHealth</span>
            </span>
          </div>
        </Link>
        <div
          className={styles.menu}
          onClick={() => setViewLinks((current) => !current)}
        >
          {viewLinks ? (
            <>
              <div></div>
              <div></div>
            </>
          ) : (
            <>
              <span></span>
              <span></span>
              <span></span>
            </>
          )}
        </div>
      </nav>
      {viewLinks ? (
        <div className={styles.links}>
          <Link
            to="/"
            className={`${pathname === "/" ? "active" : ""}`}
            onClick={disableMenu}
          >
            Home
          </Link>
          <Link
            to="/modalidades"
            className={`${pathname === "/modalidades" ? "active" : ""}`}
            onClick={disableMenu}
          >
            Modalidades
          </Link>
          <Link
            to="/depoimentos"
            className={`${pathname === "/depoimentos" ? "active" : ""}`}
            onClick={disableMenu}
          >
            Depoimentos
          </Link>
          <Link
            to="/professores"
            className={`${pathname === "/professores" ? "active" : ""}`}
            onClick={disableMenu}
          >
            Professores
          </Link>
          <Link
            to="/musculos"
            className={`${pathname === "/musculos" ? "active" : ""}`}
          >
            musculos
          </Link>
        </div>
      ) : null}
    </>
  );
}
