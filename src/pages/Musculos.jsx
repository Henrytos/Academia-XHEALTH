import { ArrowBigRight } from "lucide-react";
import style from "./styles.module.css";
import { Link } from "react-router-dom";

export default function Musculos() {
  return (
    <main className={style.professores}>
      <span className={style.title}>TREINOS</span>
      <section className={style.treinos}>
        <h2>Tipo - A</h2>
        <Link to="/musculos/1">
          <h3>PEITO</h3>
          <ArrowBigRight />
        </Link>
        <Link to="/musculos/2">
          <h3>TRICEPS</h3>
          <ArrowBigRight />
        </Link>
        <h2>Tipo - B</h2>
        <Link to="/musculos/3">
          <h3>BICIPES</h3>
          <ArrowBigRight />
        </Link>
        <Link to="/musculos/4">
          <h3>COSTA</h3>
          <ArrowBigRight />
        </Link>
        <h2>Tipo - C</h2>
        <Link to="/musculos/5">
          <h3>QUADRÍCEPS E GLÚTEOS</h3>
          <ArrowBigRight />
        </Link>
        <Link to="/musculos/6">
          <h3>POSTERIOR DE COXA E PANTURRILHA</h3>
          <ArrowBigRight />
        </Link>
      </section>
    </main>
  );
}
