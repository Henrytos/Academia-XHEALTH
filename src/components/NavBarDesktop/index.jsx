import { Link, useLocation } from "react-router-dom";

import styles from "../index.module.css";
export default function NavBarDesktop() {
  const { pathname } = useLocation();
  return (
    <>
      <Link to="/" style={{ all: "unset", cursor: "pointer" }}>
        <div className={styles.logo}>
          <span>
            Academia <span>XHealth</span>
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
          to="/musculos"
          className={`${pathname === "/musculos" ? "active" : ""}`}
        >
          musculos
        </Link>
      </nav>
    </>
  );
}
