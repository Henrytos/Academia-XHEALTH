import { Container } from "react-bootstrap";
import style from "./styles.module.css";

export default function ListLocal (){
    return   <main className={style.professores}>
    <span className={style.title}>LOCAIS</span>

    <section>
        <h2>E aí, onde você quer treinar?</h2>
        <input type="text" />
    </section>


    </main>
}