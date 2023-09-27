import CardDay from "../components/CardDay";
import style from "./styles.module.css";

export default function home() {
  return (
    <main className={style.home}>
      <div className={style.conatainer01}>
        <span className={style.homeTitle}>XHealth</span>
        <span className={style.homeSubTitle}>
          seu <span className={style.strong}>maior</span> projeto deve ser você!
        </span>
      </div>
      <div className={style.days}>
        <CardDay
          date="SEGUNDA-FEIRA"
          treinos={["MUAY THAI", "BIKE IDOOR"]}
          horario="6:00-22:00"
          durationAnimation="1000"
        />
        <CardDay
          date="TERÇA-FEIRA"
          treinos={["ZUMBA", "FUNCIONAL"]}
          horario="6:00-22:00"
          durationAnimation="1100"
        />
        <CardDay
          date="QUARTA-FEIRA"
          treinos={["MUAY THAI", "BIKE IDOOR"]}
          horario="6:00-22:00"
          durationAnimation="1200"
        />
        <CardDay
          date="QUINTA-FEIRA"
          treinos={["ZUMBA", "FUNCIONAL"]}
          horario="6:00-22:00"
          durationAnimation="1300"
        />
        <CardDay
          date="SEXTA-FEIRA"
          treinos={["MUAY THAI", "HIIT"]}
          horario="6:00-22:00"
          durationAnimation="1400"
        />
        <CardDay
          date="SABADO"
          treinos={["BIKE IDOOR", "JUMP"]}
          horario="6:00-12:00"
          durationAnimation="1500"
        />
      </div>
    </main>
  );
}
