import { Link, useLocation } from "react-router-dom";

import styles from "../index.module.css";
export default function NavBarDesktop() {
  const { pathname } = useLocation();
  return (
    <>
      <Link to="/" style={{ all: "unset", cursor: "pointer" }}>
        <div className={styles.logo}>
          <span style={{ display: "flex", gap: ".5rem", alignItems: "center" }}>
            <img
              src="/public/favicon.png"
              alt=""
              height={50}
              style={{
                transform: "translateY(-.3rem)",
              }}
            />
            <span>XHealth</span>
          </span>
        </div>
      </Link>

      <nav>
        <Link to="/" className={`${pathname === "/" ? "active" : ""}`}>
          Home
        </Link>
        <Link
          to="/modalidades"
          className={`${pathname === "/modalidades" ? "active" : ""}`}
        >
          Modalidades
        </Link>
        <Link
          to="/depoimentos"
          className={`${pathname === "/depoimentos" ? "active" : ""}`}
        >
          Depoimentos
        </Link>
        <Link
          to="/professores"
          className={`${pathname === "/professores" ? "active" : ""}`}
        >
          Professores
        </Link>
        <Link
          to="/listLocais"
          className={`${pathname === "/listLocais" ? "active" : ""}`}
        >
          Locais
        </Link>
        <Link
          to="/musculos"
          className={`${pathname === "/musculos" ? "active" : ""}`}
        >
          Musculos
        </Link>
      </nav>
    </>
  );
}
