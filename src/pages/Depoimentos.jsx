import Coment from "../components/Coment";
import persons from "../js/personTexts";
import style from "./styles.module.css";

export default function Depoimentos() {
  return (
    <main className={style.depoimentos}>
      <span className={style.title}>DEPOIMENTOS</span>
      <section className={style.coments}>
        {persons.map((person, i) => {
          return (
            <Coment
              key={i}
              src={`/person-${i + 1}.jpg`}
              text={person.texto}
              name={person.nome}
              typeAos="fade-up"
              durationAos="1000"
            />
          );
        })}
      </section>
    </main>
  );
}
