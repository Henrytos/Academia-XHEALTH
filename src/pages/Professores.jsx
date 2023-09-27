import CardProfessor from "../components/CardProfessor";
import style from "./styles.module.css";
import personals from "../js/ProfessorText";

export default function Professores() {
  return (
    <>
      <main className={style.professores}>
        <span className={style.title}>PROFESSORES</span>
        <div className={style.personals}>
          {personals.map((personal, i) => {
            return (
              <CardProfessor
                key={i}
                typeTreino={personal.typeTreino}
                name={personal.name}
                src={personal.src}
                text={personal.text}
                durationAos={personal.durationAos}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
